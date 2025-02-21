const prompt = require("prompt-sync")(); // Ask for user inputs
let gameCharacter = prompt("what is your name?: ");
let weapon = prompt("what is your choice of weapon?: ");
let main_enemy = prompt('what is the primary race in this world?')
let food = prompt("what is your favorite food")
let sidecharacter = prompt('who would you like to also be in your story')
let story = `you wake up in a cave you and you hear water running and you see a little boy in the corner when you approch him he calls out to you ${gameCharacter}!!! and then he hands you a ` + weapon + ' you must protect me from the ' + main_enemy + 'please i beg of you you recluntanlty agree to protect this little boy from ' + main_enemy + 'you begin to head out fo the cave getting blinded by the light as you when your eyes are done adjusting to the new light you look around and see' + sidecharacter + 'you approach him as he is making '+ food + 'your eyes light up as you see it your stomach starts to grumble you ask the old man if you may have some as you are starving he seems reluntent to give you food but he sees your frail body and he deciedes that it is best for him to give you food'
console.log(story);