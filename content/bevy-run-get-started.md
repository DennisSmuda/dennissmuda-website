---
slug: "bevy-run-get-started"
title: "Get started with Rust & Bevy."
description: "Getting started with the rust programming language and Bevy game engine"
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
