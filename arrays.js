const fruit = [
  {
    name: 'Apple',
    color: 'Red',
    calories: 95,
  },
  {
    name: 'Orange',
    color: 'Orange',
    calories: 45,
  },
  {
    name: 'Banana',
    color: 'Yellow',
    calories: 105,
  },
  {
    name: 'Coconut',
    color: 'White',
    calories: 159,
  },
  {
    name: 'Pineapple',
    color: 'Yellow',
    calories: 37,
  },
];

console.log(fruit[0].calories);

fruit.push({
  name: 'Grapees',
  color: 'Purple',
  calories: 62,
});

console.log(fruit);

// fruit.pop();
console.log(fruit);

//  fruit.splice(1, 2);
console.log(fruit);

fruit.forEach((fru) => console.log(fru.name));

const fruNames = fruit.map((fru) => fru.name);
console.log(fruNames);

const fruColors = fruit.map((fru) => fru.color);
console.log(fruColors);

const fruCals = fruit.map((fru) => fru.calories);
console.log(fruCals);

const yellowFru = fruit.filter((fru) => fru.color === 'Yellow');
console.log(yellowFru);

const lowCalFru = fruit.filter((fru) => fru.calories < 100);
console.log(lowCalFru);

const highCalFru = fruit.filter((fru) => fru.calories >= 100);
console.log(highCalFru);

const maxFruit = fruit.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
const minFruit = fruit.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(maxFruit, minFruit);
