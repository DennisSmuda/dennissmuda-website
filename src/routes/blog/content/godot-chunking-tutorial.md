---
slug: 'godot-chunk-loading-tutorial'
title: 'Threaded chunks with Godot 🌎'
description: 'Getting started with the Bevy game engine. Build a small app with input handling and game states'
createdAt: 'Jul. 15, 2022'
published: true
tags: [{ name: 'godot', value: 'godot' }, { name: 'gamedev', value: 'gamedev' }]
---

> Check out the <a href="https://github.com/DennisSmuda/godot-chunking-system" target="_blank">source code</a> for this post! I expect you to know your way around godot and how to create scenes and setup autoload-scripts in the project settings.

First you need a main scene - I tried to setup everything as simple and minimal as possible. So you only need a `Node2D` and save it under `res://scenes/Main.tscn`. This is our main scene:

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

This enables us to have a global `player_move` event in our code. It might be a little overkill but it's something I've been using ever since I learned about it in <a href="https://github.com/DennisSmuda/godot-chunking-system/blob/master/scenes/Player.gd" target="_blank" rel="nofollower">this guide</a> by <em>GDQuest</em>.

## Tiles and Chunks ⛰

Before we get to `World.gd`, we should first create our tiles and define what a "chunk" actually is!

![grass tile node in the editor](/images/blog/godot-chunking/grass_tile.png)

Create two different scenes inside `res://scenes/tiles`. In the screenshot above, you can see `Grass.tscn` - also make a `Sand.tscn`. Of course it can look however you want, use your own sprites!

### Chunk?

<!-- TODO: MAKE CHUNK -->

## World 🌎

Now to the juicy part. Create `res://src/World.gd` if you haven't yet, and set it as an autoload-script (see above).

Let's start with setting up our script

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

## Chunk Helpers 💊

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

<!-- TODO: Explain chunk helper code -->

## Threaded loading 🌋
