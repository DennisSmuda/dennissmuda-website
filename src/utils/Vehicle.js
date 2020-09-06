const blue = "#38cfff";
const orange = "#ea7b15";

class Vehicle {
  constructor(p5, sk) {
    this.p5 = p5;
    this.position = sk.createVector(sk.random(sk.width), sk.random(sk.height));
    this.velocity = sk.createVector(0, 0);
    this.target = sk.createVector(0, 0);
    this.acceleration = sk.createVector(0, 0);
    this.maxSpeed = 5.0;
    this.maxForce = 2.5;
    this.mass = 30.0;
    this.size = 6;
  }

  update(sk) {
    this.seekMouse(sk);
    this.velocity.add(this.acceleration);
    this.position = this.position.add(this.velocity);
    this.acceleration.mult(0);

    // this.collide(sk);
  }

  seekMouse(sk) {
    const mousePos = sk.createVector(sk.mouseX, sk.mouseY);
    const target = mousePos.sub(this.position).normalize().mult(this.maxSpeed);
    this.target = target;

    const steer = this.p5.Vector.sub(target, this.velocity);
    steer.limit(this.maxForce);
    // console.log("Accel", target);
    // this.acceleration.add(target);
    this.applyForce(steer);
  }

  applyForce(force) {
    let f = this.p5.Vector.div(force, this.mass);
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
    const theta = this.velocity.heading() + Math.PI / 2;
    // console.log("Theta", theta);

    sk.noStroke();
    sk.fill(orange);
    sk.push();

    sk.translate(this.position.x, this.position.y);
    sk.rotate(theta);
    // sk.rect(this.position.x, this.position.y, 32, 16);
    // sk.rect(0, 0, 16, 32);
    sk.beginShape();
    sk.vertex(0, this.size * -2);
    sk.vertex(this.size * -1, this.size * 2);
    sk.vertex(this.size, this.size * 2);
    sk.endShape();

    // sk.ellipse(this.position.x, this.position.y, 16, 16);
    sk.pop();

    sk.fill(blue);
    sk.ellipse(sk.mouseX, sk.mouseY, 16, 16);
  }
}
export default Vehicle;
