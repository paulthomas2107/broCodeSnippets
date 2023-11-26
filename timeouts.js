const hello = () => {
  console.log('Hello 1');
};

setTimeout(hello, 1000);

setTimeout(() => {
  console.log(`Hello 2`);
}, 1000);

const timeoutId = setTimeout(() => {
  console.log('Hello 3');
}, 3000);
clearTimeout(timeoutId);

let timeOutId;

const startTimer = () => {
  timeOutId = setTimeout(() => {
    console.log('Hello');
  }, 3000);
  console.log('Started');
};

const clearTimer = () => {
  clearTimeout(timeOutId);
  console.log('Cleared');
};
