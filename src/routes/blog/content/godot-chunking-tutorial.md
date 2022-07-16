---
slug: 'godot-chunk-loading-tutorial'
title: 'Threaded chunks with Godot 🌎'
description: 'Making a randomly generated top-down 2d world that uses multiple threads to load/unload our chunks'
createdAt: 'Jul. 16, 2022'
published: true
tags:
  [
    { name: 'godot', value: 'godot' },
    { name: 'gamedev', value: 'gamedev' },
    { name: 'rng', value: 'random' }
  ]
---

## What are we doing? 🤨

This post is about how to make a randomly generated top-down 2D world that you can move around in. It uses multiple threads to load and unload chunks of our world. A chunk consists of `chunk_size * chunk_size` tiles. A tile can be grass, sand and collides with the player.

> Check out the <a href="https://github.com/DennisSmuda/godot-chunking-system" target="_blank">source code</a> for this post! I expect you to know your way around godot and how to create scenes and setup autoload-scripts in the project settings.

First, we need a main scene to run our project, so create a `Node2D` and save it to `res://scenes/Main.tscn`:

![MainScene in the project](/images/blog/godot-chunking/main_scene.png)

Go ahead and also create our player - which is just a `RigidBody2D` with three child nodes: `Camera2D`, `Sprite` and `CollisionShape2D`. Based on the screenshot above you can see how to setup those nodes, don't forget to **disable gravity** for the players body!

Also, create two scripts for the `Player` and `Camera2D`. The Camera script is ommited in this post, because it just handles the camera's zoom, but you can check it out <a href="https://github.com/DennisSmuda/godot-chunking-system/blob/master/scenes/Camera2D.gd" target="_blank" rel="nofollower">here</a>.

```gdscript
# res://scenes/Player.gd
extends RigidBody2D

const move_speed = 256

var new_body_velocity: Vector2 = Vector2(0, 0)
var direction_vector: Vector2 = Vector2(0, 0)


# ready function
func _ready() -> void:
	Events.emit_signal("player_move", global_position)

# ... movement code
```

We initialize and handle all our player movement in this file. It's pretty basic vector based velocity addition and it's pretty fast, but it's enough to demonstrate the chunk loading functionality.

Check out the rest of <a href="https://github.com/DennisSmuda/godot-chunking-system/blob/master/scenes/Player.gd" target="_blank" rel="nofollower">Player.gd</a>.

You might have noticed the line `Events.emit_signal`. This will cause our code to break because there is no <em>global</em> named "Events" yet!

## Autoloads 🤖

This is how the `AutoLoad` tab of my project settings looks like:

![autoload scripts in project.settings](/images/blog/godot-chunking/autoloads.png)

You can see what to do: Create both these files `res://src/Events.gd` and `res://src/World.gd`.

Let's start with `Events.gd`, it's very simple and it will get our Player-code working:

```gdscript
# res://src/Events.gd
extends Node

signal player_move(position)
```

This enables us to have a global `player_move` event in our code. It might be a little overkill but it's something I've been using ever since I learned about it in <a href="https://www.gdquest.com/docs/guidelines/best-practices/godot-gdscript/event-bus/" target="_blank" rel="nofollower">this guide</a> by <em>GDQuest</em>.

## Tiles and Chunks ⛰

Before we get to `World.gd`, we should first create our tiles and define what a "chunk" actually is!

![grass tile node in the editor](/images/blog/godot-chunking/grass_tile.png)

Create two different scenes inside `res://scenes/tiles`. In the screenshot above, you can see `Grass.tscn` - also make a `Sand.tscn`. Of course it can look however you want, use your own sprites!

Now create a new scene with a `Node2D` and save it as `res://scenes/Chunk.tscn`. A chunk holds x by y tiles and has information about the underlying `SimplexNoise` that defines our terrain.

```gdscript
var noise: OpenSimplexNoise = null

var chunk_x: int = 0
var chunk_y: int = 0

var should_remove := false


func _ready() -> void:
	for x in range(chunk_x, chunk_x + chunk_size):
		for y in range(chunk_y, chunk_y + chunk_size):
			var value = noise.get_noise_2d(x, y)
			if value > 0.39:
				var new_grass = _Grass.instance()
				new_grass.position = Vector2(x * 16, y * 16)
				add_child(new_grass)
			elif value > 0.33:
				var new_sand = _Sand.instance()
				new_sand.position = Vector2(x * 16, y * 16)
				add_child(new_sand)
```

As you can see, our Chunk node does nothing more, than going through each tile and checking the noise-value. Depending on the "height" we can decide what tile to spawn - in our case grass or sand.

## World 🌎

Now to the juicy part. Create `res://src/World.gd` if you haven't yet, and set it as an autoload-script (see above).

```gdscript
# src/World.gd
extends Node

const _Chunk = preload("res://scenes/Chunk.tscn")

const chunk_size: int = 16
const chunk_radius: int = 2

var spawn_thread: Thread
var kill_thread: Thread
var update_timer: Timer

var player_pos: Vector2 = Vector.ZERO
var last_player_pos: Vector2 = Vector2.ZERO

var chunks: Dictionary = {}
var unready_chunks: Dictionary = {}

onready var noise = OpenSimplexNoise.new()

func _ready() -> void:
	spawn_thread = Thread.new()
	kill_thread = Thread.new()

	# noise generation
	randomize()
	noise.seed = randi()
	noise.period = 32.0
	noise.octaves = 3.0
	noise.persistence = 0.8

	# connect to player_move event
	Events.connect("player_move", self, "on_player_move")

	# update update_timer
	update_timer = Timer.new()
	update_timer.connect("timeout", self, "_on_update_timer_timeout")
	update_timer.set_wait_time(0.125)
	add_child(update_timer)
	update_timer.start()
```

The `Chunk` class gets preloaded and we define two constants for chunk-size and how big the radius of chunks surrounding the player should be.

We have two `Thread`s to spawn and kill our chunks, and a `Timer` to call our world's update code.

We also define two `Dictionary`s to keep track of existing and "unready" chunks, that haven't been added to the tree.

In our `_ready()` function we actuall create new instances for our threads, set noise parameters and setup our update-timer!

### Chunk Helpers 💊

```gdscript
# src/World.gd

...
# at the end of the file

# create chunk at x,y position
func create_chunk(x, y) -> Chunk:
	var new_chunk = _Chunk.instance()
	new_chunk.noise = noise
	new_chunk.chunk_size = chunk_size
	new_chunk.chunk_x = x
	new_chunk.chunk_y = y
	return new_chunk


# get chunk at x,y position
func get_chunk(x, y) -> Chunk:
	var key = str(x) + "," + str(y)
	if chunks.has(key):
		return chunks.get(key)

	return null


# set all chunks to should_remove = true
func set_all_chunks_to_remove() -> void:
	for key in chunks:
		chunks[key].should_remove = true
```

At the end of the file, we include two helper functions to create a new chunk or get a chunk at a specific x/y position. And one that goes through all present chunks and sets their `should_remove` attribute to `true`.

### Tracking the player and updating ⏰

To be able to create new chunks based on the player's position, we need to keep track of the players position in our `on_player_move` event, and we need to call our world update code with our `Timer` event.

```gdscript
# update player pos internal variable
func on_player_move(_position: Vector2) -> void:
	player_pos = _position


# can also be in update -> watch for performance
func _on_update_timer_timeout() -> void:
	set_all_chunks_to_remove()
	determine_chunks_to_keep()
	clean_up_chunks()
```

### Threaded creation 🐣

Now, to our actual chunk-creation code! In `determine_chunks_to_keep` we look for chunks in a radius around the player. You can play around with the `chunk_radius` variable to render more/less chunks at the same time depending on your needs.

```gdscript
func determine_chunks_to_keep() -> void:
	if not player_pos:
		return
	var p_x = floor(player_pos.x / 16 / chunk_size)
	var p_y = floor(player_pos.y / 16 / chunk_size)

	for x in range(p_x - chunk_radius, p_x + chunk_radius + 1):
		for y in range(p_y - chunk_radius, p_y + chunk_radius + 1):
			add_chunk(x * chunk_size, y * chunk_size)
			var chunk = get_chunk(x * 16, y * 16)
			if chunk != null:
				chunk.should_remove = false
```

Our `add_chunk` function will return if a chunk already exists for the x/y-position. Otherwise it will spawn a chunk in a new (available) thread:

```gdscript
func add_chunk(x: int, y: int) -> void:
	var key: String = str(x) + "," + str(y)

	# return if chunk exists
	if chunks.has(key) or unready_chunks.has(key):
		return

	# start loading a new chunk if a spawn_thread is available
	if not spawn_thread.is_active():
		unready_chunks[key] = 1
		spawn_thread.start(self, "load_chunk", [spawn_thread, x, y])


# load a new chunk in a spawn_thread
func load_chunk(args: Array) -> void:
	var _thread = args[0]
	var x = args[1]
	var y = args[2]

	var new_chunk = create_chunk(x, y)

	call_deferred("load_done", x, y, new_chunk, _thread)


func load_done(x: int, y: int, chunk: Chunk, _thread: Thread) -> void:
	var key = str(x) + "," + str(y)
	add_child(chunk)
	chunks[key] = chunk
	unready_chunks.erase(key)
	_thread.wait_to_finish()
```

### Threaded destuction 🌋

The last thing we need is to destroy our old chunks, or we'll get memory problems very quickly! `clean_up_chunks` will look for chunks that should be removed, and give that task to an available thread, very similar to the creation process.

```gdscript
# Look for a chunk to remove and start a kill_thread to free it
func clean_up_chunks() -> void:
	for key in chunks:
		var chunk = chunks[key]
		if chunk.should_remove:
			if not kill_thread.is_active():
				chunk.visible = false
				kill_thread.start(self, "free_chunk", [chunk, key, kill_thread])


# free chunk inside a thread
func free_chunk(args) -> void:
	var _chunk = args[0]
	var _key = args[1]
	var _thread = args[2]

	chunks.erase(_key)
	_chunk.queue_free()

	call_deferred("on_free_chunk", _chunk, _key, _thread)


# thread wait to finish function -> if some work needs to happen after chunk deletion
func on_free_chunk(_chunk: Chunk, _key: String, _thread: Thread) -> void:
	_thread.wait_to_finish()
```

It's important to note the order of things. Start with requesting a new thread and calling a method. This called method (`free_chunk`) will do our <em>heavy lifting</em> and `call_deferred` to another method that can call `_thread.wait_to_finish()` and do more work after the threaded function is done.

## More Ideas 🤔

Feel free to experiment with different noise values or more terrain like hills and mountaintops. You can generate pretty crazy terrain with this setup and take it a lot further.

It would be pretty easy to let a chunk "know" when a player is close to or inside it and have different events.

You could layer another "biome-noise" on top, etc...

### Optimizations 📈

There will be a performance hit, if you go overboard with chunks and especially if you have a lot of tiles within a chunk, because you have a lot of "land" for example.

One solution would be to <strong>use tilemaps instead of individual tiles</strong>. And maybe I will, once Godot 4 comes out and I get to play with the [new tilemap features](https://github.com/godotengine/godot/pull/48535)!
