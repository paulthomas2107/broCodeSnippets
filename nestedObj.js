const person = {
  fullName: 'SpongeBob',
  age: 30,
  isStudent: true,
  hobbies: ['Karate', 'Fishing', 'Cooking'],
  address: {
    street: '124 Conch St',
    city: 'BikiniBottom',
    country: 'Int. Waters',
  },
};

console.log(person.fullName);
console.log(person.address);
console.log(person.address.street);
console.log(person.hobbies[2]);

for (const prop in person.address) {
  console.log(person.address[prop]);
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person1 = new Person('Paul', 30, '10 Downing St', 'London', 'UK');
console.log(person1);
const person2 = new Person(
  'Rory',
  20,
  '12 Downing St',
  'Manchester',
  'England'
);
console.log(person2);
const person3 = new Person('Caitlin', 22, '14 Downing St', 'Salford', 'Wales');
console.log(person3);

console.log(person1.address.country);
console.log(person2.address.country);
console.log(person3.address.country);
