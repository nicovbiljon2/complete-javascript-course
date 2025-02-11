"use strict";

/*
// Reading the content of class element .message from the DOM
console.log(document.querySelector(".message").textContent);
// Changing the text content of the DOM class element .message
document.querySelector(".message").textContent = "🎊 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
//Starting of the project

// define the secret number and round it off the a whole number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// create a variable to store the score data
let score = 20;

// add functionality to the button check
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // implement game logic: check if there is a value, if not prompt the user to add a value,
    // and compare the secret number with the user guests.
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number!";
        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        // changing the background color and increase the width of the secret number
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        // when guess is to high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            // decreasing the score when incorrectly guest
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "💥You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
        // when guess is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

// Coding Challenge #1
/* Implement a game rest functionality, so that the player can make a new guess! 
Here is how:

1. Select the element with the 'again' class and attached a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // Reset the message back to start guessing
    document.querySelector(".message").textContent = "Start guessing...";
    // Reset the score back to 20
    document.querySelector(".score").textContent = score;
    // Reset the secret number to a question mark
    document.querySelector(".number").textContent = "?";
    // Clear the input field
    document.querySelector(".guess").value = "";
    // Reset the back ground color and guess my number to the original color and width
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
