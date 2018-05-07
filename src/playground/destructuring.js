const person = {
    age: 19,
    location: {
        city: 'Gorzow Wielkopolski',
        temp: 20
    }
};

//name = person.name;
//age = person.age;

let { name:FirstName = 'Anonumous', age } = person;
console.log(`${FirstName} is ${age}.`);

console.log(`${person.name} is ${person.age}.`);

const { city, temp:temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} oC in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

let { name:publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//Array destructuring

const address = ['Chodkiewicza 42', 'Wroclaw', 'Dolnoslaskie', '66-400'];

const [ , city, state = 'Gorzow', zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee','$2.00','$2.50','$2.75'];

const [ coffee, , medium , ] = item;

console.log(`${coffee} costs ${medium}.`);