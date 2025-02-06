// Coding Challenge #1

/* Given an array of forecasted maximum temperatures, the thermometer
displays a string with these temperatures.

Example: {17, 21, 23] will print "...17°C in 1 days ...21°C in 2 days 
...23°C in 3 days ..."

Create a function "printForecast" which takes in an array "arr" and logs
a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into
sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4] */

// 1. Understanding the problem
// - Array converted to a string and separated by ...
// - What is the X days: that is the index + 1
// - With 2 arrays, do we need to implement functionality twice? No merge the 2 arrays

// 2. Breaking problem up into sub-problems
// - Convert array into a string
// - Convert each element to a string including °C
// - String needs to contain day: that is the index + 1
// - Add ... between the elements and start and end of the strings
// - Log the string to the console

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

// Use this as an example to see how the string should look like
console.log(`...${arr1[0]}°C ...${arr1[1]}°C ...${arr1[2]}°C`);

const printForecast = function (arr) {
    // create an empty string (accumulator variable called string)
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log("..." + str);
};

printForecast(arr1);
printForecast(arr2);
