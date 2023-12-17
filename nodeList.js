let buttons = document.querySelectorAll('.myButtons');

const decorate = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = 'green';
    button.textContent += '😀';
    button.addEventListener('click', (event) => {
      event.target.style.backgroundColor = 'tomato';
      event.target.remove();
    });
    button.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'hsl(205, 100%, 40%)';
    });
    button.addEventListener('mouseout', (event) => {
      event.target.style.backgroundColor = 'hsl(205, 100%, 60%)';
    });
  });
};

decorate();

const newButton = document.createElement('button');
newButton.textContent = 'Button 5';
newButton.classList = 'myButtons';
document.body.appendChild(newButton);
buttons = document.querySelectorAll('.myButtons');

decorate();
