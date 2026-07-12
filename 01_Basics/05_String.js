const name = "gautam";
const repoCount = 20;

// console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gautam-sy');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('u'));

 const newString = gameName.substring(0, 4)
 console.log(newString);
 
 const anotherString = gameName.slice(-8, 4)

 console.log(anotherString);
 
const newStringOne = "    gautam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gautam.com/gautam%20chodhary"
console.log(url.replace('%20', '_'));

console.log(url.includes('gautam'));

