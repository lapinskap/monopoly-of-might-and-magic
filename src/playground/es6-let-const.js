var nameVar = 'Patrycja';
var nameVar = 'Alina';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'KtosInny';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Paulina Lapinska';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
