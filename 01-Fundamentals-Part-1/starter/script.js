/*
let js = "amazing";
//if (js === "amazing") alert("JavaScript is FUN!");
//console.log(40 + 8 + 23 - 10);

console.log("Nico");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let nico_matilda = "NM";
let $function = 27;

let myFirstJob = "Coder";
let myCurrentJob = "teacher";
console.log(myFirstJob);


//true;
//console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
console.log(typeof "Nico van Biljon");

javascriptIsFun = "YES!"; // change the value that is in the variable (dynamic typing)
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31; // reassigning a value to a variable or mutate the age variable

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = "programmer";
job = "developer";

lastName = "van Biljon";
console.log(lastName);


// Math operator
const now = 2037;
const ageNico = now - 1991;
const ageDean = now - 2010;
console.log(ageNico, ageDean);

console.log(ageNico * 2, ageDean / 4, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Nico";
const lastName = "van Biljon";
console.log(firstName + " " + lastName); // concatenate two strings

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 100
x--;
console.log(x);

// Comparison operators
console.log(ageNico > ageDean); // >, <, >=, <=
console.log(ageDean < ageDean);
console.log(ageDean >= 18);

const isFullAge = ageDean >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2010);
*/

const now = 2037;
const ageNico = now - 1991;
const ageDean = now - 2018;

console.log(now - 1991 > now - 2018);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 (left to right), y = 10 x = 10 (right to left)
console.log(x, y);

const averageAge = (ageNico + ageDean) / 2;
console.log(ageNico, ageDean, averageAge);
