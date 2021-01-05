/* ------------------------------------------------
Created by: Kit Howlett
Date: 05/01/2021

Context: 'Codecademy code challenge to test knowledge of JavaScript variables, data types,
conditionals/control flow and functions. The project features a number guessing game. As a
challenge, it was my responsibility to create the below functions in order to get the game
working.'
------------------------------------------------ */

// Initialise counters
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates random number to be guessed.
const generateTarget = () => Math.floor(Math.random() * 10);

// Calculate distance between target and guess then return absolute value.
const getAbsoluteDistance = (target, guess) => Math.abs(target - guess);

// Compare guess and determine who got closer to target number: computer or user?
const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    // Calculate difference between target number and guess.
    const computerDiff = getAbsoluteDistance(targetNumber, computerGuess);
    const userDiff = getAbsoluteDistance(targetNumber, userGuess);
    
    // Return true if computer guess is greater or equal to user guess.
    return computerDiff >= userDiff;
};

// Update score.
const updateScore = winner => {

    // If winner is user add one to userscore else, add one to computerscore.
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

// Add to round number variable.
const advanceRound = () => {

    currentRoundNumber ++;
}
