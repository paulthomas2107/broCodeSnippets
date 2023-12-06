// firstElementChild
const element = document.getElementById('fruits');
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = 'yellow';
const element2 = document.getElementById('vegetables');
const firstChild2 = element2.firstElementChild;
firstChild2.style.backgroundColor = 'pink';
const element3 = document.getElementById('desserts');
const firstChild3 = element3.firstElementChild;
firstChild3.style.backgroundColor = 'gray';
// or all
const allElems = document.querySelectorAll('ul');
allElems.forEach((elem) => {
  const first = elem.firstElementChild;
  first.style.color = 'red';
  const last = elem.lastElementChild;
  last.style.fontSize = '20px';
});

// next
const el4 = document.getElementById('fruits');
const nextSibling = el4.nextElementSibling;
nextSibling.style.backgroundColor = 'green';

