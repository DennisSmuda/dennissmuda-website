---
slug: "bevy-run-get-started"
title: "Get started with Rust & Bevy."
description: "Getting started with the Bevy game engine. Build a small app with input handling and game states"
createdAt: "Mar. 20, 2022"
published: false
tags:
  [
    { name: "gamedev", value: "gamedev" },
    { name: "rust", value: "rust" },
    { name: "bevy", value: "bevy" },
  ]
---

> In order to follow this tutorial you will need to <a href="https://doc.rust-lang.org/book/ch01-01-installation.html" target="_blank">get setup</a> with Rust and at least be able to run your very first example `hello world` code!

[Bevy](https://bevyengine.org/) is a <span class="keyword">data-driven game engine</span> for Rust. It provides a fully custom <em>ECS</em> - Entity Component System - a popular design-pattern in games. Pretty much like MVC <s>is</s> was a popular design-pattern for Web-Applications.

It helps to have some prior game-dev experience. Especially if your project grows in size and complexity, the ECS-approach helps (and forces you) to keep your code lean and decoupled while also giving you ways to <span class="keyword">compose</span> functionality across different Entities.

## Create a new project

```bash
cargo new bevy_run_tutorial
cd bevy_run_tutorial

cargo run
```

Edit your `Cargo.toml` dependencies as follows:

```toml
// ...

[dependencies]
bevy = "0.6.1"
rand = "0.8"
bevy-inspector-egui = "0.9"
```

And edit `src/main.rs` to:

```rust
fn main() {
    App::new()
      .add_plugins(DefaultPlugins)
      .run();
}
```

You should now `cargo run` your project and confirm everything was setup correctly! It will probably take a while on your first go.

## Making a window

Let's setup some constants for our game first! Create `src/constants.rs` and enter the following:

```rust
use bevy::prelude::Color;

// Dimensions
pub const GAME_WIDTH: f32 = 720.;
pub const GAME_HEIGHT: f32 = 420.;

// Colors
pub const BG_COLOR: Color = Color::rgb(38. / 255., 20. / 255., 40. / 255.);
pub const PLAYER_COLOR: Color = Color::rgb(255. / 255., 228. / 255., 120. / 255.);
pub const ENEMY_COLOR: Color = Color::rgb(60. / 255., 163. / 255., 112. / 255.);
```

And in your `main.rs`:

```rust
use bevy::prelude::*;

mod constants;
use constants::*;

fn main() {
  let mut app = App::new();
  // Window setup
  app
    .insert_resource(ClearColor(BG_COLOR))
    .insert_resource(WindowDescriptor {
      title: "Run Rust!".to_string(),
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      ..Default::default()
    })
    // Bevy default plugins
    .add_plugins(DefaultPlugins);

  // Startup system (cameras)
  app.add_startup_system(camera_setup);
  // Run the app
  app.run();


fn camera_setup(mut commands: Commands) {
  // 2D orthographic camera
  commands.spawn_bundle(OrthographicCameraBundle::new_2d());
  // UI Camera
  commands.spawn_bundle(UiCameraBundle::default());
}
```

This code should spawn a `720 x 420` window with a title and two cameras. Pretty much "standard" bevy setup code - if this seems too daunting right now, you might want to go through <a href="https://bevyengine.org/learn/book/getting-started/" target="_blank">bevy's own getting started guide</a> to get comfortable with the basics first.

## Changing "Screens"

Pretty much in any game I have ever <em>tried</em> to make I needed some way to go from one "screen" to another. In <a href="https://godotengine.org/" target="blank">Godot</a> you can implement a `SceneManager` that will transition from one `Node` to another. <a href="https://unity.com/" target="_blank">Unity</a> has `Scenes` and <a href="https://www.yoyogames.com/en" target="_blank">GameMaker</a> has `rooms` - but they all do very similar things for your game.

In Bevy, we can create an `enum AppState` to help us keep track of "where we are" in our game. We only need three in total (for now) - `Menu, InGame & GameOver`.

```rust
// main.rs

//...

#[derive(Debug, Clone, Eq, PartialEq, Hash)]
pub enum AppState {
  Menu,
  InGame,
  GameOver,
}

//...
```
