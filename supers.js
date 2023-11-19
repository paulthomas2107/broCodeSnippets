class Animal {
  constructor(age, speed) {
    this.name = this.constructor.name;
    this.age = age;
    this.speed = speed;
    this.move();
  }
  move() {
    var mode;
    if (this instanceof Rabbit) {
      mode = 'leaps';
    } else if (this instanceof Fish) {
      mode = 'swims';
    } else {
      mode = 'flies';
    }
    console.log(`This ${this.name} ${mode} at speed of ${this.speed}`);
  }
}

class Rabbit extends Animal {}

class Fish extends Animal {}

class Hawk extends Animal {}

const rabbit = new Rabbit(1, 25);
const fish = new Fish(2, 12);
const hawk = new Hawk(3, 50);
