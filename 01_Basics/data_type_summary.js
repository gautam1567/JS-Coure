// primitive


// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// => JavaScript is dynamically typed or statically?
// -> 

// e.g.
const score = 1000;
const scoreValue = 100.4;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 5875878577n

// => Refrence Type(Non-primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "Naagraj", "doga"];

let myObj = {
    name : "Gautam",
    age : 25,
}

const myFunction = function(){

    console.log("Hello Gautam")
}

console.log(typeof bigNumber);