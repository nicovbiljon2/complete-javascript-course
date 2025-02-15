"use strict";

// Selecting the elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNewEL = document.querySelector(".btn--new");
const btnRollEL = document.querySelector(".btn--roll");
const btnHoldEL = document.querySelector(".btn--hold");

// Starting the conditions
score0El.textContent = 0; // set the text content to zero
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Implementing functionality to the game - rolling the dice
btnRollEL.addEventListener("click", function () {
    // 1. Generate a random dice rolled number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Check if dice rolled is equal to  1
    if (dice !== 1) {
        // add dice number to current score
        currentScore += dice;
        current0El.textContent = currentScore; // change later
    } else {
        // if true, switch to next player
    }
});
