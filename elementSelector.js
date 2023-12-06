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

// Queryselector - first element only
const element = document.querySelector('.fruits');
element.style.color = 'white';
const element2 = document.querySelector('h4');
element2.style.color = 'yellow';
const li = document.querySelector('li');
li.style.color = 'red';
const ul = document.querySelector('ul');
li.style.color = 'blue';

// QueryselectorAll
const fruits2 = document.querySelectorAll('.fruits');
fruits2[0].style.backgroundColor = 'pink';
fruits2[1].style.backgroundColor = 'lightpink';
fruits2[2].style.backgroundColor = 'red';
const list3 = document.querySelectorAll('li');
list3[0].style.backgroundColor = 'pink';
list3[1].style.backgroundColor = 'lightpink';
list3[2].style.backgroundColor = 'red';
list3[3].style.backgroundColor = 'red';
list3[4].style.backgroundColor = 'pink';
list3[5].style.backgroundColor = 'green';
//or
list3.forEach((food) => {
  food.style.fontSize = '30px';
});
    