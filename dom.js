document.title = 'I Have Changed';
document.body.style.backgroundColor = 'hsl(0, 0%, 15%)';

const userName = '';
const welcomeMessage = document.getElementById('welcome-msg');
welcomeMessage.textContent += userName === '' ? ` Guest` : userName;
