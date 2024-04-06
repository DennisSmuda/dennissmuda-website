---
slug: 'low-res-voxels'
title: 'Low Res Graphics with Voxels 🧊'
description: 'Low Resolution pixelated graphics in a 3D space'
createdAt: 'Jan. 29, 2023'
published: true
tags: [{ name: 'godot', value: 'godot' }, { name: 'voxel', value: 'voxel' }]
order: 1
---

> Check out the <a href="https://github.com/DennisSmuda/low-rez-voxel-demo" target="_blank" rel="noreferrer">source code</a>. If you do, make sure to use the latest Godot 4 version!

## Goal

In this blog post we will recreate this **look** in godot:
![low resolution scene](/images/blog/low-res-voxels/new.png)

## Game Scene

The **base game scene** we are working with, looks like this:
![high resolution scene](/images/blog/low-res-voxels/old.png)

It can be anything you want really - I chose to build a basic boat on water. ⛵️🌊

Important to note though - set your stretch mode to `viewport`:
![project settings - stretch mode to viewport](/images/blog/low-res-voxels/display_settings.png)

## Scene Setup

Our "container scene" basically just holds both our UI and our Game:
![node setup in the contain](/images/blog/low-res-voxels/scene_setup.png)

**The whole trick** is setting the `TextureRect` texture to a `new ViewportTexture` and when it asks you to select a Subviewport, you pick the `SubviewPort` that contains your main gameplay scene from before.

![node setup in the contain](/images/blog/low-res-voxels/viewport_texture.png)

### Beta bugs?

Because I've found some buggy behaviour when attaching the `ViewportTexture` to `GameTextureRect` - and that's how it's supposed to be - you can set the texture at runtime as a workaround. The error only occurs when the texture is set in the editor. This way we **don't set it**, but let gdscript take care of it for us:

```gdscript
# attach this script to the GameTextureRect
extends TextureRect

@onready var game_viewport = $GameViewport

# Called when the node enters the scene tree for the first time.
func _ready():
	texture = game_viewport.get_texture() as ViewportTexture
	texture.set_viewport_path_in_scene("GameTextureRect/GameViewport")

```

I'll keep an eye on the <a href="https://github.com/godotengine/godot/pull/64388" target="_blank" rel="noreferrer">issue</a>, as this should only be a beta-workaround.

## Do whatever you want

Now the `TextureRect`-Node needs two properties. First, we set it's `Layout -> Anchors Preset` to `Full Rect`. And also, we need to set the `Texture -> Filter` to `Nearest Mipmap`!

After we can resize our game's resolution however we like:

![ViewPort Scaling](/images/blog/low-res-voxels/viewport_settings.png)

The `TextureRect` will scale it to fit our window dimensions, and produce a "pixelated" look!

Basically it makes our `1920x1080` game render through a `240x135` lense.

## Why?

The main reason why you would use a `SubViewport`, is because of the ability to have your whole UI on a separate layer.
You can also set the `Viewport Width/Height` to a small size and use `Window Width/Height Override` to make the actual window bigger - it will achieve the same look, **but** it will also upscale your UI and make it very hard to work with. Especially once you end up needing to make your `font_size = 2px`. 🤔
