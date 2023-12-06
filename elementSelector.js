// Elmentid
const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = 'yellow';
myHeading.style.textAlign = 'center';

// Classnam
const fruits = document.getElementsByClassName('fruits');
fruits[0].style.backgroundColor = 'orange';
fruits[1].style.backgroundColor = 'gray';
fruits[2].style.backgroundColor = 'blue';
for (let fruit of fruits) {
  fruit.style.backgroundColor = 'red';
}
Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = 'gray';
});

// Tagnane
const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');
h4Elements[0].style.backgroundColor = 'yellow';
h4Elements[1].style.backgroundColor = 'yellow';
for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = 'pink';
}
for (let liElement of liElements) {
  liElement.style.backgroundColor = 'lightgreen';
}
Array.from(h4Elements).forEach((h4) => {
  h4.style.backgroundColor = 'purple';
});
Array.from(liElements).forEach((liElement) => {
  liElement.style.backgroundColor = 'lightblue';
});
