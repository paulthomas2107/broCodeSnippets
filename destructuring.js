let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

const colors = ['red', 'green', 'blue', 'black', 'white'];
console.log(colors);
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor, secondColor, thirdColor, extraColors);

const person1 = {
  firstName: 'SpongeBob',
  lastName: 'SquarePants',
  age: 30,
  job: 'Fry Cook',
};

const person2 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 33,
};

const { firstName, lastName, age, job = 'Vacant' } = person2;
console.log(firstName, lastName, age, job);

const displayPerson = ({ firstName, lastName, age, job = 'Vacant  ' }) => {
  console.log(firstName, lastName, age, job);
};

displayPerson(person1);
displayPerson(person2);
