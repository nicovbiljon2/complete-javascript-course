'use strict'; // activate strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio" // SyntaxError strict mode reserved word
// const private = 534; // SyntaxError strict mode reserved word

// Functions 

/* function logger() {
    console.log("My name is Nico");
}

logger(); // Invoking, calling or running the function 
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0); //saving the value in appleJuice variable 
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // log the result directly to the console

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression (expression produce a value)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1);
console.log(age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Nico"));
console.log(yearsUntilRetirement(1980, "Piet"));
*/

/* function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));*/

/* const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
        
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
        
    }
}

console.log(yearsUntilRetirement(1991, "Nico"));
console.log(yearsUntilRetirement(1950, "Bob"));*/

/* // Data Structures 
// Arrays 
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1661, 1984, 2008, 2020);
console.log(years)

console.log(friends[0]); // indexing print the first name in the array
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"; // updating the array (mutate)
console.log(friends);

const firstName = "Nico"
const nico = [firstName, "van Biljon", 2037 - 1986, "software developer student", friends];
console.log(nico);

// Array exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);*/

// Array methods 

/* // Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // remove the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

// Position of an element in the array
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes ("Steven")) {
    console.log("You have a friend called Steven");
} */

// Objects
const nico = {
    firstName: "Nico",
    lastName: "van Biljon",
    age: 2037 - 1989,
    job: "Spare Parts Sales",
    friends: ["Milton", "Wessel", "Dean"]
};

console.log(nico);

console.log(nico.lastName);
console.log(nico["lastName"]);

const nameKey = "Name";
console.log(nico["first" + nameKey]);
console.log(nico["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Nico? Choose between firstName, lastName, age, job, and friends");

if(nico[interestedIn]) {
console.log(nico[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

nico.location = "South Africa";
nico["twitter"] = "@nicovanbiljon"; // this is just an example - account don't exist
console.log(nico);

// challenge 
console.log(`${nico.firstName} has ${nico.friends.length} friends, and his best friend is called ${nico.friends[0]}`);