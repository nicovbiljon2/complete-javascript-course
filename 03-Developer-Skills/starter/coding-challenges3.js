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

// Coding Challenge #2 With AI
/* Let's say you're building a time tracking application for freelancers. At Some point in
building this app, you need a function that receives daily work hours for a certain week,
and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

Test data: [7.5, 8, 6.5, 0, 8.5, 4, 0] */

// AI Solution
function analyzeWorkWeek(workHours) {
    // Check if the array has exactly 7 days
    if (workHours.length !== 7) {
        throw new Error("Input array must have exactly 7 days of work hours.");
    }

    // Array of day names starting with Monday (index 0)
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    // Calculate total hours worked
    const totalHours = workHours.reduce((sum, hours) => sum + hours, 0);

    // Calculate average daily hours (rounded to one decimal place)
    const averageDailyHours = (totalHours / workHours.length).toFixed(1);

    // Find the day with the most hours worked
    const maxHours = Math.max(...workHours);
    const dayWithMostHours = daysOfWeek[workHours.indexOf(maxHours)];

    // Calculate the number of days worked (days with more than 0 hours)
    const daysWorked = workHours.filter(hours => hours > 0).length;

    // Check if the week was full-time (35 or more hours worked)
    const isFullTime = totalHours >= 35;

    // Return the result as an object
    return {
        totalHours,
        averageDailyHours,
        dayWithMostHours,
        daysWorked,
        isFullTime,
    };
}

// Example usage
const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0]; // Example array for a week (Mon-Sun)
const result = analyzeWorkWeek(workHours);
console.log(result);

// Example usage 2
const workHours2 = [7.5, 8, 6.5, 0, 8.5]; // Example array for a week (Mon-Sun)
const result2 = analyzeWorkWeek(workHours2);
console.log(result2);
