const isEven = (element) => {
  return element % 2 === 0;
};

const isOdd = (element) => {
  return element % 2 !== 0;
};

const isAdult = (element) => {
  return element >= 18;
};

const isChild = (element) => {
  return element < 18;
};

const getShortWords = (element) => {
  return element.length < 5;
};
const getLongWords = (element) => {
  return element.length > 6;
};

const getMediumWords = (element) => {
  return element.length > 4 && element.length < 7;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNums = numbers.filter(isEven);
const oddNums = numbers.filter(isOdd);
console.log(evenNums, oddNums);

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
console.log(adults, children);

const words = ['Apple', 'Orange', 'Banana', 'Kiwi', 'Pomegranate', 'Coconut'];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
const mediumWords = words.filter(getMediumWords);
console.log(shortWords, longWords, mediumWords);
