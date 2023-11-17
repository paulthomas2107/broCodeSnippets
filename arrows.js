const hello = function () {
  console.log('Hello');
};

// Better
const hello2 = (name, age) => {
  console.log(`Hello ${name}. You are ${age} years old.`);
};

hello();
hello2('Paul', 23);

setTimeout(
  (name2, deposit) => {
    console.log(`Hi, ${name2}. Deposit is ${deposit}`);
  },
  250,
  'John',
  123.45
);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubed = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((acc, element) => acc + element);

console.log(squares, cubed, evenNums, oddNums, total);
