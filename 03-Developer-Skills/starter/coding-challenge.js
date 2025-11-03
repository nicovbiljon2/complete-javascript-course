/* Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4] */

// 1) Understanding the problem
// - Array transformed to strings, separated by ...
// - What is the x days? Answer is: index + 1

// 2) Breaking up into sub-problems
// - Transform the array's into strings
// - Transform each element into a string with the ºC sign
// - Strings needs to contain current day (index + 1)
// - Add ... between the elements at the start and end of each string
// - Log the string to the console

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = ""; // create an empty string
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};

printForecast(testData1);
printForecast(testData2);

/* Coding Challenge #2 With AI
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked 
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 5, 0]
 */
function analyseWorkWeek(dailyHours) {
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // 1. Total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // 2. Average daily hours (rounded to one decimal place)
  const averageDailyHours = Number((totalHours / dailyHours.length).toFixed(1));

  // 3. The day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const dayWithMostHours = dayNames[dailyHours.indexOf(maxHours)];

  // 4. Number of days worked (more than 0 hours)
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  // 5. Whether the week was full-time (35 hours or more)
  const fullTime = totalHours >= 35;

  // Return the analysis as an object
  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours,
    daysWorked,
    fullTime,
  };
}

const weekData = [8, 7.5, 6, 0, 9, 4, 0];
console.log(analyseWorkWeek(weekData));
