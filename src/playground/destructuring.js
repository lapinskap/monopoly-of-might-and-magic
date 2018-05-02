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

let { name:publisherName = 'Self-Published'} = book;

console.log(publisherName);