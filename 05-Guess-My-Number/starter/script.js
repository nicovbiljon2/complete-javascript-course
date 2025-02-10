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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// create a variable to store the score data
let score = 20;

document.querySelector(".number").textContent = secretNumber;

// add functionality to the button
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // implement game logic: check if there is a value, if not prompt the user to add a value,
    // and compare the secret number with the user guests.
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number!";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
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
