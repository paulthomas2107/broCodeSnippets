const date = new Date();
console.log(date);

const d2 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(d2);

const d3 = new Date('2024-07-21T13:14:15Z');
console.log(d3);

const d4 = new Date(0);
console.log(d4);

const d5 = new Date();
console.log(d5);

const yr = d5.getFullYear();
const mnth = d5.getMonth() + 1;
const day = d5.getDate();
const hr = d5.getHours();
const mins = d5.getMinutes();
const secs = d5.getSeconds();
const dow = d5.getDay();
console.log(yr, mnth, day, hr, mins, secs, dow);

const d10 = new Date();
d10.setFullYear(1966);
d10.setMonth(6);
d10.setDate(21);
d10.setHours(12);
d10.setMinutes(13);
d10.setSeconds(14);
console.log(d10);

const d11 = new Date('1966-07-21 10:11:12');
const d12 = new Date('1966-07-22 10:11:12');
if (d12 > d11) {
  console.log('More than');
}
