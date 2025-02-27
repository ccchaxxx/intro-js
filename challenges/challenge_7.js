const prompt = require('prompt-sync')();
 let  lockIsBroken= prompt('is the lock broken?') === 'yes'
let hasKey = prompt("Do you have a key? (yes/no) ") === "yes";
let strength = parseInt(prompt("Enter your strength: "));
if (hasKey && strength >= 8 && lockIsBroken != true) {
   console.log("You opened the door!");
} else {
   console.log("The door won't budge.");
}