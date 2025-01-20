/* CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and 
   return a single number (the average score).
2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to 
   them (you will need to call this function, and pass scores as arguments).
3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then 
   logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) 
   (use avgDolphins and avgKoalas instead of hard-coded values).
4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...")
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

/* CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is 
between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the 
   rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. 
   Test the function using a bill value of 100.
2. And now let's use arrays! So, create an array called bills containing the test data below.
3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/

const calcTip = function (bill) {
    return tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
} 
// Create bills array and tips array
const bills = [125, 555, 44];
// Create tips array and assign the tip value to the array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Create a totals array and calculate the total by adding up the bill and tip values
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);
