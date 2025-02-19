const prompt = require('prompt-sync')();

// Get user input for character name and game
let card_suit = prompt("What is the card suit of the card?");
let card_rank = prompt("What's is the card rank?");

// Combine the inputs into a greeting
let greeting = "You pulled a " + card_rank+ " of " + card_suit;

console.log(greeting);