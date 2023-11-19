class Animal {
  constructor() {
    this.name = this.constructor.name;
  }
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
  isAlive() {
    console.log(this.alive);
  }
}

class Rabbit1 extends Animal {
  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit1();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
rabbit.isAlive();
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.isAlive();
fish.eat();
fish.sleep();
fish.swim();            

hawk.isAlive();
hawk.eat();
hawk.sleep();
hawk.fly();
