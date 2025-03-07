// Import prompt function
const prompt = require('prompt-sync')();

// Game state variables
let playerName = "";
let treasureFound = false;
let inventory = [];
let location = "beach"; // Starting location
let gameOver = false;
let mapFound = false;

// Start the game
function startGame() {
  playerName = prompt("Welcome to the Treasure Hunt Adventure! What's your name? ");
  console.log(`Hello, ${playerName}! Your journey begins as you search for the legendary lost treasure.`);
  gameLoop();
}

// Main game loop
function gameLoop() {
  while (!gameOver) {
    console.clear()
    console.log("\n--- Game Status ---");
    console.log(`Location: ${location}`);
    console.log(`Inventory: ${inventory.join(", ")}`);
    console.log(`Treasure Found: ${treasureFound ? "Yes" : "No"}`);

    if (location === "beach") {
      beachPath();
    } else if (location === "cave") {
      cavePath();
    } else if (location === "village") {
      villagePath();
    } else if (location === "forest") {
      forestPath();
    } else if (location === "mountain") {
      mountainPath();
    } else {
      console.log("You seem lost... Please make a decision.");
      gameOver = true; // End game if no valid location is found
    }
  }
  console.log("\nGame Over! Thanks for playing.");
}

// Beach Path
function beachPath() {
  console.log("\nYou are on the beach. The ocean waves crash softly against the shore.");
  let action = prompt("Do you want to search the sand, swim in the ocean, or go to the cave? (search / swim / cave) ");

  if (action.toLowerCase() === "search") {
    console.log("You search the sand... You find a piece of a map buried under the sand!");
    inventory.push("Map Piece");
    mapFound = true; // Player finds part of the treasure map
  } else if (action.toLowerCase() === "swim") {
    console.log("You swim in the ocean... but there's nothing of interest here.");
  } else if (action.toLowerCase() === "cave") {
    console.log("You decide to explore the cave.");
    location = "cave"; // Move to cave
  } else {
    console.log("Invalid action! Please choose 'search', 'swim', or 'cave'.");
  }
}

// Cave Path
function cavePath() {
  console.log("\nYou enter a dark cave. The air is damp, and you hear the sound of dripping water.");
  let action = prompt("Do you want to search the cave, light a torch, or go back to the beach? (search / light / beach) ");

  if (action.toLowerCase() === "search") {
    if (mapFound) {
      console.log("Using the map, you find a hidden passage leading deeper into the cave...");
      inventory.push("Hidden Passage Key");
    } else {
      console.log("You find nothing of interest here.");
    }
  } else if (action.toLowerCase() === "light") {
    console.log("You light a torch and can now see better in the cave.");
  } else if (action.toLowerCase() === "beach") {
    console.log("You decide to return to the beach.");
    location = "beach"; // Go back to the beach
  } else {
    console.log("Invalid action! Please choose 'search', 'light', or 'beach'.");
  }
}

// Village Path
function villagePath() {
  console.log("\nYou are in a small village. The villagers look friendly, but they seem to be guarding something.");
  let action = prompt("Do you want to talk to the villagers, search the village, or head into the forest? (talk / search / forest) ");

  if (action.toLowerCase() === "talk") {
    console.log("You talk to the villagers. One of them gives you a clue about the treasure's location.");
    inventory.push("Clue");
  } else if (action.toLowerCase() === "search") {
    console.log("You search the village... You find a hidden pouch with some coins!");
    inventory.push("Coins");
  } else if (action.toLowerCase() === "forest") {
    console.log("You decide to head into the forest.");
    location = "forest"; // Move to forest
  } else {
    console.log("Invalid action! Please choose 'talk', 'search', or 'forest'.");
  }
}

// Forest Path
function forestPath() {
  console.log("\nYou are now in the dense forest. The trees are thick, and it’s hard to see where you're going.");
  let action = prompt("Do you want to search the forest, follow a trail, or go to the village? (search / follow / village) ");

  if (action.toLowerCase() === "search") {
    console.log("You search the forest floor... You find an ancient chest hidden beneath some roots!");
    inventory.push("Ancient Chest");
  } else if (action.toLowerCase() === "follow") {
    console.log("You follow a trail through the forest and discover a hidden clearing.");
    inventory.push("Secret Path");
  } else if (action.toLowerCase() === "village") {
    console.log("You decide to go back to the village.");
    location = "village"; // Go back to the village
  } else {
    console.log("Invalid action! Please choose 'search', 'follow', or 'village'.");
  }
}

// Mountain Path
function mountainPath() {
  console.log("\nYou are at the foot of a towering mountain. The climb looks difficult, but you might find something valuable.");
  let action = prompt("Do you want to climb the mountain, search the area, or go back to the forest? (climb / search / forest) ");

  if (action.toLowerCase() === "climb") {
    console.log("You begin climbing the mountain. It’s tough, but you make it to a high plateau.");
    let foundTreasure = Math.random() < 0.3; // 30% chance to find the treasure

    if (foundTreasure) {
      treasureFound = true;
      console.log("You found the legendary treasure chest! It's full of gold and jewels!");
      gameOver = true; // End game when treasure is found
    } else {
      console.log("You reach the plateau but find no treasure. The journey continues.");
    }
  } else if (action.toLowerCase() === "search") {
    console.log("You search the area... You find an old relic that could be useful.");
    inventory.push("Ancient Relic");
  } else if (action.toLowerCase() === "forest") {
    console.log("You decide to go back to the forest.");
    location = "forest"; // Go back to the forest
  } else {
    console.log("Invalid action! Please choose 'climb', 'search', or 'forest'.");
  }
}

// Start the game
startGame();
 