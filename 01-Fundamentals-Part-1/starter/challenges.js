/*CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Test Data 2
let massMark1 = 95;
let heightMark1 = 1.88;
let massJohn1 = 85;
let heightJohn1 = 1.76;

let BMIMark1 = massMark1 / (heightMark1 * heightMark1);
let BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
console.log(BMIMark1, BMIJohn1);

let markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log(markHigherBMI1);

/* CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are. */
// Test data 1
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's BMI !");
} else {
  console.log("John's BMI is higher than Mark's BMI !");
}

// Test data 2
if (BMIMark1 < BMIJohn1) {
  console.log(`Mark's BMI ${BMIMark1} is lower than John's BMI ${BMIJohn1}`);
} else {
  console.log(`John's BMI ${BMIJohn1} is lower than Mark's BMi ${BMIMark1}`);
}
