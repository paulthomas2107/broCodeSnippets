class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }

  sayHello() {
    console.log(`Hello, my username is ${this.userName}`);
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online.`);
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

const user1 = new User('Spongebob');
console.log(user1);
console.log(User.userCount);
user1.sayHello();

const user2 = new User('Patrick');
console.log(user2);
console.log(User.userCount);
user2.sayHello();

const user3 = new User('Sandy');
console.log(user3);
console.log(User.userCount);
user3.sayHello();

User.getUserCount();
