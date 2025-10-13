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


const now = 2037;
const ageNico = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 -5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avarageAge = (ageNico + ageSarah) / 2;
console.log(ageNico, ageSarah, avarageAge);
*/

/* Strings and template literals 

const firstName = "Nico";
const job = "Spares coordinator";
const birthYear = 1974;
const year = 2037;

const nico = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(nico);

// Template literal 
const nicoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nicoNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
linse`);
 */

/* Taking descisions if else statements
 
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving licence 🚗");
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
*/

/* Type conversion and Coercion
// conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Nico"));
console.log(typeof NaN);

console.log(String(23), 23);
// coercion
console.log("i am " + 23 + " years old");
console.log("23" - "10"  - 3);
*/

/* Truthy and Falsy 
// 5 falsy values: 0, "", undifiend, null. NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Nico"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("Yay! Height is definded!");
} else {
    console.log("Height is Undifined!");
}
*/

/*Equality operators 
const age = "18";
if (age === 18) console.log("You just became an adult :D (strick)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favouriteNumber = Number(prompt("What is your favourite number?"));
console.log(favouriteNumber);
console.log(typeof(favouriteNumber));

if (favouriteNumber === 23) { // "23" == 23
    console.log("Cool! 23 is an amazing number");
} else if (favouriteNumber === 7) {
    console.log("7 is also a cool number");
} else if (favouriteNumber === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favouriteNumber !== 23) console.log("Why not 23?");
*/

/*Logical operators */
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // varialbe C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone esle should drive...");
}
