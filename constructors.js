class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = (gear) => {
      console.log(`Driving in gear ${gear}`);
    };
  }
}

class Convertible extends Car {
  constructor(make, model, year, color, isConvertible) {
    super(make, model, year, color);
    this.isConvertible = isConvertible;
  }
}

const car1 = new Car('Porsche', '911 Turbo', '1987', 'Black');

const car2 = new Car('Ford', 'Escort XR3', '1986', 'White');
const car3 = new Car('VW', 'Golf GTI', '2020', 'Blue');

console.log(car1);
console.log(car2);
console.log(car3);

const conv = new Convertible('Dodge', 'F123', '2022', 'Blue', true);
console.log(conv);
conv.drive(3);
