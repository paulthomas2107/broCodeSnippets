let userName = window.prompt('Enter username....');
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;
console.log(userName);

// Method chaining
let newOne =
  userName.trim().charAt(0).toUpperCase() +
  userName.trim().slice(1).toLowerCase();
console.log(newOne);
