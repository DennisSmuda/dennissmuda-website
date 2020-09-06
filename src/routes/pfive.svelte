<script>
  import { onMount, onDestroy } from "svelte";
  import Vehicle from "../utils/Vehicle";

  let sketch;
  let p5;

  onMount(async () => {
    const module = await import("p5");
    p5 = module.default;

    let mover;
    let vehicle;

    const s = sk => {
      sketch = sk;
      sk.setup = () => {
        sk.createCanvas(window.innerWidth, window.innerHeight);
        // mover = new Mover(sk);
        vehicle = new Vehicle(p5, sk);

        sk.stroke(200);
        sk.strokeWeight(3);
      };

      sk.draw = () => {
        sk.background("#191c26");
        // mover.update(sk);
        vehicle.update(sk);

        // mover.draw(sk);
        vehicle.draw(sk);
      };
    };
    const P5 = new p5(s);
  });

  onDestroy(() => {
    if (sketch) {
      console.log("remove", sketch);
      sketch.remove();
    }
  });

  class Mover {
    constructor(sk) {
      this.position = sk.createVector(
        sk.random(sk.width),
        sk.random(sk.height)
      );
      this.velocity = sk.createVector(0, 0);
      this.acceleration = sk.createVector(0, 0);
      this.mass = 10.0;
    }

    update(sk) {
      this.accelerate(sk);
      this.velocity.add(this.acceleration);
      this.position = this.position.add(this.velocity);
      this.acceleration.mult(0);

      this.collide(sk);
    }

    accelerate(sk) {
      const mousePos = sk.createVector(sk.mouseX, sk.mouseY);
      const target = mousePos.sub(this.position).normalize();
      // console.log("Accel", target);
      // this.acceleration.add(target);
      this.applyForce(target);
    }

    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }

    collide(sk) {
      if (this.position.x > sk.width) {
        this.position.x = sk.width;
        this.velocity.x *= -1;
      } else if (this.position.x < 0) {
        this.position.x = 0;
        this.velocity.x *= -1;
      }

      if (this.position.y > sk.height) {
        this.velocity.y *= -1;
        this.position.y = sk.height;
      }
    }

    draw(sk) {
      sk.noStroke();
      sk.fill(234, 123, 21);
      sk.ellipse(this.position.x, this.position.y, 16, 16);
      sk.ellipse(sk.mouseX, sk.mouseY, 16, 16);
    }
  }
</script>

<style>
  :global(canvas) {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    mix-blend-mode: difference;
    pointer-events: none;
  }
</style>

<!-- <h1>Test</h1> -->
