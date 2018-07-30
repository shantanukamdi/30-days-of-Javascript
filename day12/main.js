// For Numbers and String
let age = 100;
let age2 = age;

console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Shantanu';
let name2 = name;
console.log(name, name2);
name = 'SK';
console.log(name, name2);

// For Array
const players = ['Ronaldo', 'Messi', 'Neymar', 'Rooney'];

const team = players;

team[3] = 'Luz';

// create a copy of array
const team2 = players.slice();
const team3 = [].concat(players);

// es6 spread
const team4 = [...players];

const team5 = Array.from(players);

// For Objects

const person = {
    name: 'Shantanu',
    age: 24
};

const captain = person;
captain.age = 25;

console.log(person, captain);

const cap2 = Object.assign({}, person, {number: 99});

console.log(cap2);

// const cap3 = {...spread};
// const shan = JSON.parse(JSON.stringify(Objname));