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

![MainScene](/images/blog/godot-chunking/main_scene.png)

Go ahead and also create our player - which is just a `RigidBody2D` with three child nodes: `Camera2D`, `Sprite` and `CollisionShape2D`. Based on the screenshot above you can see how to setup those nodes.

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
