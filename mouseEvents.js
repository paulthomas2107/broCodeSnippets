const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

myBox.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'tomato';
  event.target.textContent = 'Ouch ! 🤕';
});

myBox.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'yellow';
});

myBox.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor = 'tomato';
});

myButton.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'tomato';
  event.target.textContent = 'Ouch ! 🤕';
});

myButton.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = 'yellow';
});

myButton.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor = 'tomato';
});