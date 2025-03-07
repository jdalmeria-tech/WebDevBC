// source: https://www.youtube.com/watch?v=9j1dZwFEJ-c

// async = makes a function return a promise
// await = makes an async function wait for a promise

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const dogWalked = true; // you can try to edit this to false

      if (dogWalked) {
        resolve("You walk the dog. 🐕");
      }
      else {
        reject("You did NOT walk the dog 😔");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You clean the kitchen. 🍽️");
      }
      else {
        reject("You did NOT clean the kitchen 😔");
      }
    }, 2500);
  })
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;

      if (trashTakenOut) {
        resolve("You take out the trash. 🚮");
      }
      else {
        reject("You did NOT take out the trash 😔");
      }
      
    }, 500);
  })
}

async function doChores() {

  try {
    const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);

  console.log("Chores are accomplised! Well done.");
  } catch (error) {
    console.error(error);
  }
  
}

doChores()