const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

const alt = prices.reduce((acc, next) => acc + next);
console.log(alt);

function sum(acc, nextElement) {
  return acc + nextElement;
}
