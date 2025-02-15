"use strict";

// Selecting the elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
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

// create an array to store the scores for player 1 and 2
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Implementing functionality to the game - rolling the dice
btnRollEL.addEventListener("click", function () {
    // 1. Generate a random dice rolled number
    const dice = Math.trunc(Math.random() * 6) + 1; // create a random number between 1 to 6
    console.log(dice);
    // 2. Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Check if dice rolled is equal to  1
    if (dice !== 1) {
        // add dice number to current score
        currentScore += dice;
        // select the score element dynamically based on who is the active player now
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    } else {
        // if true, switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // Reset the current score
        currentScore = 0;
        // Reassigning the active player, checking if it is player switch from 0 to 1
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
    }
});
