/*let js = "amazing";
// if (js === "amazing") alert("JavaSript is FUN!");

console.log(40 + 8 + 23 - 10);

// Values and Variables name conventions
console.log("Nico");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);


// Data types 
let javaSriptIsFun = true;
console.log(javaSriptIsFun);

// console.log(typeof true);
console.log(typeof javaSriptIsFunavaSriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Nico");

javaSriptIsFun = "YES!";
console.log(typeof javaSriptIsFun);

// empty vairalbe - undifined 
let year;
console.log(year);
console.log(typeof year);

// assign a new value to year
year = 1991;
console.log(typeof year);

console.log(typeof null);


// Declare a variable 
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";
*/

// Basic operators
// Math operators 
const now = 2037

const ageNico = now - 1991;
const ageSarah = now - 2018;
console.log(ageNico, ageSarah);

console.log(ageNico * 2, ageNico / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Nico";
const lastName = "van Biljon";
console.log(firstName + " " + lastName);

// Assigment operators 
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison oprators 
console.log(ageNico > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);