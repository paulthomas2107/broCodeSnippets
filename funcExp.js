const hello = (name, age) => {
  console.log(`Hi ${name}. You are ${age}.`);
};

setTimeout(
  (name, age) => {
    hello(name, age);
  },
  1000,
  'Paul',
  22
);

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubed = numbers.map((element) => Math.pow(element, 3));
const evens = numbers.filter((element) => element % 2 === 0);
const odds = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((acc, total) => acc + total);

console.log(squares);
console.log(cubed);
console.log(evens);
console.log(odds);
console.log(total);
