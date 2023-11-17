let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);
numbers.forEach(triple);
numbers.forEach(display);

function display(element) {
  console.log(element);
}

function double(element, index, array) {
  array[index] = element * 2;
}

function triple(element, index, array) {
  array[index] = element * 3;
}

let fruits = ['apple', 'orange', 'banana', 'coconut'];
fruits.forEach(dispFruit);
fruits.forEach(upperCase);
fruits.forEach(dispFruit);
fruits.forEach(lowerCase);
fruits.forEach(dispFruit);
fruits.forEach(capitalize);
fruits.forEach(dispFruit);

function dispFruit(elememt) {
  console.log(elememt);
}

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
