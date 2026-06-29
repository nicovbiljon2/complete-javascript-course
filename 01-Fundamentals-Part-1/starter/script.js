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


// Srings and template literals
const firstName = "Nico";
const job = "Spare Parts Coordinator";
const birthYear = 1974;
const year = 2026;

const nico =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(nico);

const nicoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nicoNew);

console.log(`Just a regular string....`);

console.log(
  "String with \n\
  multiple \n\
  lines",
);

console.log(`String
  multiple 
  lines`);
 
const age = 15;
//const isOldEnough = age >= 18;

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


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Nico"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");

let n = "1" + 1; // "11"
n = n - 1; // 11 - 1
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Nico"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all 😊");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED!");
}


const age = "18";

if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // "23" == 23 -> FALSE
  console.log("Coo! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasDriverLicense;

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
