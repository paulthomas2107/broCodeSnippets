const walkDog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve('You Walk The Dog ! 🐶');
      } else {
        reject('Dog was not walked !');
      }
    }, 1500);
  });
};

const cleanKitchen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve('You Clean The Kitchen ! 🪠');
      } else {
        reject('Kitchen not cleaned !');
      }
    }, 2500);
  });
};

const takeOutTrash = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTaken = false;
      if (trashTaken) {
        resolve('You Take Out Trash 🧻');
      } else {
        reject('Trash not taken !');
      }
    }, 500);
  });
};

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log('Finished Chores !');
  })
  .catch((error) => console.error(error));
