class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName == 'string' && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error('FirstName must be a string with length > 0');
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName == 'string' && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error('LastName must be a string with length > 0');
    }
  }

  set age(newAge) {
    if (typeof newAge == 'number' && newAge > 0) {
      this._age = newAge;
    } else {
      console.error('Age must be a number > 0');
    }
  }

  get firstName() {
    return `${this._firstName}`;
  }

  get lastName() {
    return `${this._lastName.toUpperCase()}`;
  }

  get age() {
    return `aged ${this._age}`;
  }

  get retires() {
    var retire = 65 - this._age;
    if (retire < 0) {
      return `already retired ${Math.abs(retire)} year${
        Math.abs(retire) > 1 ? 's' : ''
      } ago`;
    } else {
      return `Retires in ${retire} years`;
    }
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error('Width must be a positive number');
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error('Height must be a positive number');
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm²`;
  }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.width, rectangle.height);

rectangle.width = 5.345;
rectangle.height = 6.322;
console.log(rectangle.width, rectangle.height, rectangle.area);

const person = new Person('Paul', 'Thomas', 21);
console.log(person.firstName, person.lastName, person.age, person.retires);

const person2 = new Person('Old', 'Fart', 67);
console.log(person2.firstName, person2.lastName, person2.age, person2.retires);
