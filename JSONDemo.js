const names = ['Spongebob', 'Patrick', 'Squidward', 'Sandy'];
const JSONString = JSON.stringify(names);
console.log(JSONString);

const person = {
  name: 'Spongebob',
  age: 30,
  isEmployed: true,
  hobbies: ['Jellyfishing', 'Karate', 'Cooking'],
};
const JSONString2 = JSON.stringify(person);
console.log(JSONString2);

const people = [
  {
    name: 'Spongebob',
    age: 30,
    isEmployed: true,
  },
  {
    name: 'Patrick',
    age: 34,
    isEmployed: false,
  },
  {
    name: 'Squidward',
    age: 50,
    isEmployed: true,
  },
  {
    name: 'Sandy',
    age: 27,
    isEmployed: false,
  },
];

const JSONString3 = JSON.stringify(people);
console.log(JSONString3);

const names2 = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const JSONNames2 = JSON.parse(names2);
console.log(JSONNames2);

fetch('person.json')
  .then((response) => response.json())
  .then((value) => console.log(value));

fetch('people.json')
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)))
  .catch((error) => console.log(error));

fetch('names.json')
  .then((response) => response.json())
  .then((value) => console.log(value));
