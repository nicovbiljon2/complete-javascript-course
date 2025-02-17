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

// Declare variables with no values to make them accessible outside the init function
let scores;
let currentScore;
let activePlayer;
let playing;

// Create a function to reset the game when new game button is click (scoping)
const init = function () {
    // Starting the conditions
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
};
init();

// Create a function to switch players
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Implementing functionality to the game - rolling the dice
btnRollEL.addEventListener("click", function () {
    if (playing) {
        // 1. Generate a random dice rolled number
        const dice = Math.trunc(Math.random() * 6) + 1; // create a random number between 1 to 6
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
            switchPlayer();
            // if true, switch to next player
            //document.getElementById(`current--${activePlayer}`).textContent = 0;
            // Reset the current score
            //currentScore = 0;
            // Reassigning the active player, checking if it is player switch from 0 to 1
            //activePlayer = activePlayer === 0 ? 1 : 0;
            // Add the class name to the active player and change the background color of the players
            // player0El.classList.toggle("player--active");
            //player1El.classList.toggle("player--active");
        }
    }
});

// Implementing functionality to the hold button to keep the players score
btnHoldEL.addEventListener("click", function () {
    if (playing) {
        // 1. Add current score to the active player score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];
        // 2. Check if the player's score is greater or equal to 100
        if (scores[activePlayer] >= 100) {
            // If yes finish the game
            playing = false;
            diceEl.classList.add("hidden");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
        } else {
            // If not switch to the next player
            switchPlayer();
        }
    }
});

// Implementing functionality to the new game button to reset the game
btnNewEL.addEventListener("click", init);
