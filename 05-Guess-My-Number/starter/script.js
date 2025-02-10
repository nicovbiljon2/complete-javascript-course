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
// add functionality to the button
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // implement game logic: check if there is a value, if not prompt the user to add a value
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number!";
    }
});
