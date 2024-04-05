---
slug: 'bevy-run-get-started'
title: 'Get started with Rust & Bevy 🎮'
description: 'Getting started with the Bevy game engine. Build a small app with input handling and game states'
createdAt: 'Mar. 20, 2022'
published: true
tags:
  [
    { name: 'rust', value: 'rust' },
    { name: 'bevy', value: 'bevy' },
    { name: 'gamedev', value: 'gamedev' }
  ]
---

<blockquote class="disclaimer">
  <p>
  I am <strong>not</strong> affiliated with the Rust Foundation in any way, so this not an official resource!
  </p>
</blockquote>

> This post was initially written using bevy `0.6.1`. You can check out the <a href="https://github.com/DennisSmuda/run_bevy_tutorial" target="_blank" rel="noreferrer">source code</a> and the concepts still apply, but it'll differ from what is written in this post!

[Bevy](https://bevyengine.org/) is a <span class="keyword">data-driven game engine</span> for Rust. It provides a fully custom <em>ECS</em> - Entity Component System - a popular design-pattern in games. Pretty much like MVC <s>is</s> was a popular design-pattern for Web-Applications.

It helps to have some prior game-dev experience. Especially if your project grows in size and complexity, the ECS-approach helps (and forces you) to keep your code lean and decoupled while also giving you ways to <span class="keyword">compose</span> functionality across different Entities.

<blockquote class="disclaimer">
  <p>
    In order to follow this tutorial you will need to <a href="https://doc.rust-lang.org/book/ch01-01-installation.html" target="_blank" rel="noreferrer">get setup</a> with Rust and at least be able to run your very first example `hello world` code!
  </p>
</blockquote>

## Create a new project

If you have gone thrugh Rust's installation, you know that creating a new project is just one command away:

```bash
cargo new bevy_run_tutorial
cd bevy_run_tutorial

cargo run
```

<span class="keyword">Cargo</span> for Rust is <i>kind of</i> like <span class="keyword">npm</span> for Node. You can just add dependencies to your cargo file and they will get installed automatically.

Go ahead, and edit your `Cargo.toml` dependencies as follows:

```toml
// ...

[dependencies]
bevy = "0.6.1"
rand = "0.8"
bevy-inspector-egui = "0.9"
```

Just by adding these few lines, we now have access to all of Bevy's features. `rand` is a library to help us with random number generation and `bevy-inspector-egui` is a very useful debugging-tool as it shows you what entities are present within your ecs.

Let's edit `src/main.rs` to actually use some Bevy features:

```rust
use bevy::prelude::*;

fn main() {
    App::new()
      .add_plugins(DefaultPlugins)
      .run();
}
```

You should now `cargo run` your project and confirm everything was done correctly. It will probably take a while on your first go, subsequent runs will be faster, once the dependencies are installed.

## Making a window

Let's setup some constants for our game first! Create `src/constants.rs` and enter the following:

```rust
use bevy::prelude::Color;

// Dimensions
pub const WINDOW_WIDTH: f32 = 720.;
pub const WINDOW_HEIGHT: f32 = 420.;

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

This code should spawn a `720 x 420` window with a title and two cameras. Pretty much "standard" bevy setup code - if this seems too daunting right now, you might want to go through <a href="https://bevyengine.org/learn/book/getting-started/" target="_blank" rel="noreferrer">bevy's own getting started guide</a> to get comfortable with the basics first.

## Changing "Screens"

Pretty much in any game I have ever <em>tried</em> to make I needed some way to go from one "screen" to another. In <a href="https://godotengine.org/" target="blank" rel="noreferrer">Godot</a> you can implement a `SceneManager` that will transition from one `Node` to another. <a href="https://unity.com/" target="_blank" rel="noreferrer">Unity</a> has `Scenes` and <a href="https://www.yoyogames.com/en" target="_blank" rel="noreferrer">GameMaker</a> has `rooms` - but they all do very similar things for your game.

In Bevy, we can create an `enum AppState` to help us keep track of "where we are" in our game. We only need three in total (for now) - `Menu, InGame & GameOver`.

```rust
// constants.rs

//...

#[derive(Debug, Clone, Eq, PartialEq, Hash)]
pub enum AppState {
  Menu,
  InGame,
  GameOver,
}

//...
```

Now the fun part! Bevy-"Systems" are just Rust-functions, <em>but</em> you can "query" for all kinds of game-resources by just defining the function signature. So in any system that needs to change the `AppState`, like when the player has died and we want to enter the GameOver state, we can define it as such:

```rust
// just example code
fn some_game_system(mut state: ResMut<State<AppState>>) {
  // ...
  if (has_just_died) {
    state.set(AppState::GameOver).unwrap();
  }
}
```

Now we need to tell Bevy what systems to run depending on our `AppState`. In your `main.rs` you could add these lines to the bottom of your AppBuilder-chain:

```rust
fn main() {
  app
    // just example code
    .add_system_set(SystemSet::on_enter(AppState::Menu).with_system(setup_menu))
    .add_system_set(SystemSet::on_update(AppState::Menu).with_system(update_menu))
    .add_system_set(SystemSet::on_exit(AppState::Menu).with_system(teardown_state));
}
```

As you can see, `SystemSet` provides useful "Lifecycle-Hooks" so you can run different systems when you enter/exit the AppState as well!

One thing we actually need, is the `teardown_state` function - our first system!

```rust
// main.rs

// ..
pub fn teardown_state(
  mut commands: Commands,
  entities: Query<Entity, Without<Camera>>
) {
  for entity in entities.iter() {
    commands.entity(entity).despawn_recursive();
  }
}
```

The `teardown_state` function will be used for all our `on_exit` state logic. Here you can see, we don't have to worry about <i>supplying</i> the correct parameters to call the function. Rather, we only have to `define` what parameters a <s>function</s> system needs, and Bevy will take care of the rest. Also, it will try to be smart about how to run your code and try to optimize/cache queries - but that's above my skill level and beyond the scope of this post 😅.

## Implementing States

We are going to setup the structure right away - so go ahead and create three directories containing a `mod.rs` which will be the "entry-point" of every Screen. One for each AppState:

- `game/mod.rs`
- `main_menu/mod.rs`
- `game_over/mod.rs`

Each of these are what's called a <span class="keyword">Plugin</span> in Bevy. You can use plugins to organize your code. We are going to make <em>every</em> AppState a Plugin, but you are free to get creative of course.

Depending on your game you might even need a seperate `DamagePlugin` that can run multiple `DamageSystems` in order to combine lots of different status effects and buffs with a singular blow.

Let's start with the `MainMenuPlugin`

```rust
// src/main_menu/mod.rs

use crate::*;

pub struct MainMenuPlugin;

impl Plugin for MainMenuPlugin {
  fn build(&self, app: &mut App) {
    app
      .add_system_set(SystemSet::on_enter(AppState::Menu).with_system(setup_menu_system))
      .add_system_set(SystemSet::on_update(AppState::Menu).with_system(update_menu_system))
      .add_system_set(SystemSet::on_exit(AppState::Menu).with_system(teardown_state));
  }
}

///
/// Setup Main Menu
fn setup_menu_system(mut commands: Commands, asset_server: Res<AssetServer>) {
  // Headline
  commands.spawn_bundle(TextBundle {
    style: Style {
      position_type: PositionType::Absolute,
      position: Rect {
        top: Val::Px(4.0),
        left: Val::Px(24.0),
        ..Default::default()
      },
      ..Default::default()
    },
    text: Text::with_section(
      format!("Run in Rust"),
      TextStyle {
        font: asset_server.load("fonts/Efforts.ttf"),
        font_size: 64.0,
        color: Color::WHITE,
      },
      TextAlignment {
        horizontal: HorizontalAlign::Center,
        vertical: VerticalAlign::Center,
      },
    ),
    ..Default::default()
  });
}

///
/// Update Main Menu
fn update_menu_system(mut state: ResMut<State<AppState>>, keyboard_input: Res<Input<KeyCode>>) {
  if keyboard_input.just_released(KeyCode::Space) {
    state.set(AppState::InGame).unwrap();
  }
}
```

This is it! Our very first state. I think you can finish off the other states by yourself. You make it so that every screen has a different headline-text and have to press `Escape` to go back to the main menu.

The last thing to do is to tell Bevy to use our new plugins. So in your `main.rs`:

```rust
use bevy::prelude::*;

mod constants;
use constants::*;

///
/// State Plugins
mod main_menu;
use main_menu::MainMenuPlugin;
mod game;
use game::GamePlugin;
mod game_over;
use game_over::GameOverPlugin;

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
    .add_plugins(DefaultPlugins)
    // States
    .add_plugin(MainMenuPlugin)
    .add_plugin(GamePlugin)

    .add_state(AppState::Menu); // This is the state we start in!
  // ...
```

Thanks for sticking with me if you got this far. I hope I have provided some insight on how to get started with a new game in Bevy, and keep your code organized. In the next post, we will go over the actual game-code. How to spawn actual entities with components, player-input and enemies.

<blockquote class="disclaimer">
  <span>Disclaimer</span>
  <p>
    I'm no expert on Rust nor Bevy! If you have any feedback on how to improve, please reach out directly, or open issues/pull requests in <a href="https://github.com/DennisSmuda/run_bevy_tutorial" target="_blank" rel="noreferrer">on github</a>.
  </p>
</blockquote>
