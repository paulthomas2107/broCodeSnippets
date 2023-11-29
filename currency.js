let number = 123456.789;

console.log(number.toLocaleString('en-UK'));
console.log(number.toLocaleString('en-US'));
console.log(number.toLocaleString('hi-IN'));
console.log(number.toLocaleString('de-DE'));

console.log(
  number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
);

console.log(
  number.toLocaleString('en-UK', {
    style: 'currency',
    currency: 'GBP',
  })
);

console.log(
  number.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })
);

console.log(
  number.toLocaleString('hi-IN', {
    style: 'currency',
    currency: 'INR',
  })
);
