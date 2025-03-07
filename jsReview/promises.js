// source: https://www.youtube.com/watch?v=NOzi4wBHn0o

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the dog. 🐕");
      }
      else {
        reject("Yo did NOT walk the dog 😔");
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

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); return console.log("All chores are done!")})
         .catch(error => console.error(error));