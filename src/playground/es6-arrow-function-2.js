// arguments object - no longer bound with arrow functions
//simple arrow function
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound
//array+arrow function
const user = {
  name: 'Paulina',
  cities: ['Poznan', 'Gorzow', 'Szczecin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

//Using another arrow function with ES5(?)

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
