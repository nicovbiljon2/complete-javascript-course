
/* Values and Variables
1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
2. Log their values to the console.*/

/*let country = "South Africa";
let continent = "Africa";
let population = "64.75 million";
console.log(country);

console.log(continent);
console.log(country);*/

/* Data Types
1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
2. Log the types of isIsland, population, country and language to the console.
*/
/*let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof country);
console.log(typeof language);*/

/*let, const and var
1.Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
2.Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.*/

/* language = "Afrikaans";
const country = "South Africa";
const continent = "Africa";
let population = "64.75 million";
const isIsland = false;
//isIsland = true; - gives an error can't change a const variable

console.log(language);
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);*/

/* Basic Operators
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console.
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does you country have less people than the average country?
5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/
const country = "South Africa";
const continent = "Africa";
language = "Afrikaans"
let population = 64.75; // this is in millions

console.log(population / 2);

population++;
console.log(population);

const populationFinland = 6; // this is in millions
console.log(population > populationFinland);

const averagePopulation = 33; // this is in millions
console.log(population < averagePopulation);

const description = country + " is in " + continent + " , and its " + population + " million people speak " + language;
console.log(description);
