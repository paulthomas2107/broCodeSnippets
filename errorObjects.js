try {
  console.log('Hello, Paul');
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log('Finally....');
}

console.log('The End');

try {
  const dividend = 10;
  const divisor = 0;
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error('Values must be numeric');
  }
  if (divisor == 0) {
    throw new Error("You can't div by zero");
  }
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
} finally {
  console.log('Finally again....');
}
