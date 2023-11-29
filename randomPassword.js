const passwordLength = 0;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const generatePassword = (
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@£$%^&*()_+=';

  let allowedChars = '';
  let password = '';

  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  let result = '';
  const charactersLength = allowedChars.length;
  let counter = 0;
  while (counter < length) {
    result += allowedChars.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

for (var x = 1; x < 16; x++) {
  const passwords = [];
  var match = false;
  do {
    const password = generatePassword(
      x,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols
    );

    if (!passwords.includes(password)) {
      passwords.push(password);
    } else {
      console.log(
        `Length: ${x} Password list size: ${passwords.length} Match of ${password}`
      );
      match = true;
    }
  } while (match == false);
}
