console.time('time');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('time');

const loadData = (timerName) => {
  console.time(timerName);
  for (let i = 0; i < 1000000; i++) {
    // load data
  }
  console.timeEnd(timerName);
};

const processData = (timerName) => {
  console.time(timerName);
  for (let i = 0; i < 100000; i++) {
    // process data
  }
  console.timeEnd(timerName);
};

loadData('timer2');
processData('timer2');
