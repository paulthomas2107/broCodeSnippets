function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve('You Walk The Dog ! 🐶');
      } else {
        reject('Dog was not walked !');
      }
    }, 1500);
  });
}

function cleanKitchen() {
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
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTaken = true;
      if (trashTaken) {
        resolve('You Take Out Trash 🧻');
      } else {
        reject('Trash not taken !');
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log('All done !');
  } catch (error) {
    console.error(error);
  }
}

doChores();
