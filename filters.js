const isEven = (element) => {
  return element % 2 === 0;
};

const isOdd = (element) => {
  return element % 2 !== 0;
};

const isAdult = (element) => {
  return element >= 18;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNums = numbers.filter(isEven);
const oddNums = numbers.filter(isOdd);
console.log(evenNums, oddNums);

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
console.log(adults);
