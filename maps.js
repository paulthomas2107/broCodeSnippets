const numbers = [1, 2, 3, 4, 5];

function sqr(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

const newArray = numbers.map(sqr);
const cubArray = numbers.map(cube);

console.log(numbers);
console.log(newArray);
console.log(cubArray);

const students = ['Spongbob', 'Patrick', 'Squidward', 'Sandy'];
const newStudents = students.map(upperCase);
const lowerStudents = students.map(lowerCase);
console.log(students);
console.log(newStudents);
console.log(lowerStudents);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

const dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
const formDates = dates.map(formatDate);
console.log(dates);
console.log(formDates);

function formatDate(element) {
  const parts = element.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
