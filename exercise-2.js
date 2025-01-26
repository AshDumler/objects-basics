/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

papaJohns.grabCategories = function (obj) {
  return Object.keys(obj);
}

papaJohns.grabCategories(papaJohns);
console.log(papaJohns.grabCategories(papaJohns.pizzaToppings));

papaJohns.verifyValues = function (obj) {
  const runner = Object.values(obj);
  if (runner.length === 11) {
    return true;
  }
  return false;
}

console.log(papaJohns.verifyValues(papaJohns));

papaJohns.getToppingsInfo = function (obj) {
  return Object.entries(obj);
}

papaJohns.printAd = function (topp, keyValue) {
  console.log("Welcome to Papa John's! We are located at " + papaJohns.address + ". This week, we are having a sale on " + topp +" for " + keyValue + ". Better Ingredients. Better Pizza. Papa John's.");
}