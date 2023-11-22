const fruit = [
  'Pear',
  'Apple',
  'Cabbage',
  'Blueberry',
  'Banana',
  'Yam',
  'Strawberry',
];
console.log(fruit);
fruit.sort();
console.log(fruit);

const nums = [];
for (var n = 0; n < 10; n++) {
  nums[n] = Math.floor(Math.random() * 100) + 1;
}
console.log(nums);
nums.sort();
console.log(nums);
nums.reverse();
console.log(nums);

const people = [
  { name: 'Paul', age: 30, gpa: 3.1 },
  { name: 'Rory', age: 38, gpa: 4.43 },
  { name: 'Caitlin', age: 22, gpa: 6.2 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
