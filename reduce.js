const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

const alt = prices.reduce((acc, next) => acc + next);
console.log(alt);

function sum(acc, nextElement) {
  return acc + nextElement;
}

const grades = [75, 50, 90, 80, 65, 95];
const max = grades.reduce(getMax);
const min = grades.reduce(getMin);
console.log(max, min);

function getMax(acc, nextElement) {
  return Math.max(acc, nextElement);
}

function getMin(acc, nextElement) {
  return Math.min(acc, nextElement);
}
