const task1 = (callback) => {
  setTimeout(() => {
    console.log('Task 1 complete');
    callback();
  }, 2000);
};

const task2 = (callback) => {
  setTimeout(() => {
    console.log('Task 2 complete');
    callback();
  }, 1000);
};

const task3 = (callback) => {
  setTimeout(() => {
    console.log('Task 3 complete');
    callback();
  }, 3000);
};

const task4 = (callback) => {
  setTimeout(() => {
    console.log('Task 4 complete');
    callback();
  }, 1500);
};

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log('All done....');
      });
    });
  });
});
