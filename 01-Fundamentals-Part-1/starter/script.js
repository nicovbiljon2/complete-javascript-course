/*// Values and Variables
let js = "amazing";
// if (js === "amazing") alert("JavaScript if FUN!");
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// Variable name conventions
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Always use descriptive names for your variable names 
let myFirstJob = "Programmer";
let myCurrentJob = "Coder";

console.log(myFirstJob);
console.log(myCurrentJob);

// Constant variable 
const birthYear = 1991;
console.log(birthYear);
*/

/*// Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

/*// Basic math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Nico";
const lastName = "van Biljon";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
console.log(ageSarah <= 15);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// Operator Precedence: 
// how operators gets executed = subtract first then the comparison
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 -10 - 5; // subtract first then assignment x = y = 10, x = 10
console.log(x, y);

const averageAge =  (ageJonas + ageSarah) / 2; // parentheses first then division
console.log(ageJonas, ageSarah, averageAge);
*/

// Strings and template literals
/* const firstName = "Nico";
const job = "Spare Parts Coordinator";
const birthYear = 1974;
const year = 2037;

const nico = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(nico);

const nicoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nicoNew);

console.log(`Just a regular string....`);

// Create new lines
console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`)  
*/

// Taking decisions: If / else statements
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
