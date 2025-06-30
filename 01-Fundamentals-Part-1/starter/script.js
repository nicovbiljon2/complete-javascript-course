/*let js = "amazing";
    if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);
console.log("Nico");
console.log(23);*/

// Variables names
/*let firstName = "Matilda";
let PI = 3.1415;

console.log(firstName);
console.log(firstName);
console.log(PI);

let myFirstJob = "programmer";
let mySecondJob = "coder";

console.log(myFirstJob + " " + mySecondJob);*/

// Data Types
/*let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
console.log(typeof "Nico");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);*/

// let, Const and Var
/*let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; - will get an error can't change a const variable
// const job; - will get an error missing initializer

var job = "programmer";
job = "coder";

lastName = "van Biljon";
console.log(lastName);*/

// Basic operators
// Math operators
const now = 2037;
const ageNico = now - 1974;
const ageSarah = now - 2020;
console.log(ageNico, ageSarah);

console.log(ageNico * 2, ageNico / 10, ageSarah / 2, 2 **3);
// 2 ** 3 2 to the power of 3 = 2 * 2 * 2 

const firstName = "Nico";
const lastName = "van Biljon";
console.log(firstName + " " +  lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x -1 = 99
console.log(x);

// Comparison operators
console.log(ageNico > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);


