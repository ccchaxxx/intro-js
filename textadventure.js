// Import prompt function
const prompt = require('prompt-sync')();

// Game state variables
let playerName = "";
let treasureFound = false;
let inventory = [];
let location = "beach"; // Starting location
let gameOver = false;
let mapFound = false;

// Locations map, to easily track where you can go from each place
const locations = {
  "beach": ["search", "swim", "cave", "village"],
  "cave": ["search", "light", "beach", "forest"],
  "village": ["talk", "search", "forest", "mountain"],
  "forest": ["search", "follow", "village", "mountain"],
  "mountain": ["climb", "search", "forest"]
};

// Start the game
function startGame() {
  playerName = prompt("Welcome to the Treasure Hunt Adventure! What's your name? ");
  console.log(`Hello, ${playerName}! Your journey begins as you search for the legendary lost treasure.`);
  gameLoop();
}

// Main game loop
function gameLoop() {
  while (!gameOver) {
    console.clear();
    console.log("\n--- Game Status ---");
    console.log(`Location: ${location}`);
    console.log(`Inventory: ${inventory.join(", ")}`);
    console.log(`Treasure Found: ${treasureFound ? "Yes" : "No"}`);

    // Handle the path based on the current location
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
    prompt('Press Enter to continue...');
  }
  console.log("\nGame Over! Thanks for playing.");
}

// Handle Beach Path
function beachPath() {
  console.log("\nYou are on the beach. The ocean waves crash softly against the shore.");
  handleAction("beach");
}

// Handle Cave Path
function cavePath() {
  console.log("\nYou enter a dark cave. The air is damp, and you hear the sound of dripping water.");
  handleAction("cave");
}

// Handle Village Path
function villagePath() {
  console.log("\nYou are in a small village. The villagers look friendly, but they seem to be guarding something.");
  handleAction("village");
}

// Handle Forest Path
function forestPath() {
  console.log("\nYou are now in the dense forest. The trees are thick, and it’s hard to see where you're going.");
  handleAction("forest");
}

// Handle Mountain Path
function mountainPath() {
  console.log("\nYou are at the foot of a towering mountain. The climb looks difficult, but you might find something valuable.");
  handleAction("mountain");
}

// Handle the player's action based on their location
function handleAction(currentLocation) {
  let action = prompt(`What do you want to do? (${locations[currentLocation].join(", ")}) `).toLowerCase();

  while (!locations[currentLocation].includes(action)) {
    console.log("Invalid action! Please choose a valid action.");
    action = prompt(`What do you want to do? (${locations[currentLocation].join(", ")}) `).toLowerCase();
  }

  // Perform actions based on the location and choice
  if (currentLocation === "beach") {
    if (action === "search") {
      if (!inventory.includes("Map Piece")) {
        console.log("You search the sand... You find a piece of a map buried under the sand!");
        inventory.push("Map Piece");
        mapFound = true;
      } else {
        console.log("You already have the map piece!");
      }
    } else if (action === "swim") {
      console.log("You swim in the ocean... but there's nothing of interest here.");
    } else if (action === "cave") {
      location = "cave";
      console.log("You decide to explore the cave.");
    } else if (action === "village") {
      location = "village";
      console.log("You decide to head to the village.");
    }
  } else if (currentLocation === "cave") {
    if (action === "search") {
      if (mapFound && !inventory.includes("Hidden Passage Key")) {
        console.log("Using the map, you find a hidden passage leading deeper into the cave...");
        inventory.push("Hidden Passage Key");
      } else {
        console.log("You find nothing of interest here.");
      }
    } else if (action === "light") {
      console.log("You light a torch and can now see better in the cave.");
    } else if (action === "beach") {
      location = "beach";
      console.log("You decide to return to the beach.");
    } else if (action === "forest") {
      location = "forest";
      console.log("You decide to go to the forest.");
    }
  } else if (currentLocation === "village") {
    if (action === "talk") {
      if (!inventory.includes("Clue")) {
        console.log("You talk to the villagers. One of them gives you a clue about the treasure's location.");
        inventory.push("Clue");
      } else {
        console.log("You've already received the clue from the villagers.");
      }
    } else if (action === "search") {
      if (!inventory.includes("Coins")) {
        console.log("You search the village... You find a hidden pouch with some coins!");
        inventory.push("Coins");
      } else {
        console.log("You've already found the coins in the village.");
      }
    } else if (action === "forest") {
      location = "forest";
      console.log("You decide to head into the forest.");
    } else if (action === "mountain") {
      location = "mountain";
      console.log("You decide to go to the mountain.");
    }
  } else if (currentLocation === "forest") {
    if (action === "search") {
      if (!inventory.includes("Ancient Chest")) {
        console.log("You search the forest floor... You find an ancient chest hidden beneath some roots!");
        inventory.push("Ancient Chest");
      } else {
        console.log("You've already found the ancient chest in the forest.");
      }
    } else if (action === "follow") {
      if (!inventory.includes("Secret Path")) {
        console.log("You follow a trail through the forest and discover a hidden clearing.");
        inventory.push("Secret Path");
      } else {
        console.log("You've already discovered the secret path.");
      }
    } else if (action === "village") {
      location = "village";
      console.log("You decide to go back to the village.");
    } else if (action === "mountain") {
      location = "mountain";
      console.log("You decide to go to the mountain.");
    }
  } else if (currentLocation === "mountain") {
    if (action === "climb") {
      console.log("You begin climbing the mountain. It’s tough, but you make it to a high plateau.");
      let foundTreasure = Math.random() < 0.3; // 30% chance to find the treasure

      if (foundTreasure) {
        treasureFound = true;
        console.log("You found the legendary treasure chest! It's full of gold and jewels!");
        gameOver = true; // End game when treasure is found
      } else {
        console.log("You reach the plateau but find no treasure. The journey continues.");
      }
    } else if (action === "search") {
      if (!inventory.includes("Ancient Relic")) {
        console.log("You search the area... You find an old relic that could be useful.");
        inventory.push("Ancient Relic");
      } else {
        console.log("You've already found the ancient relic.");
      }
    } else if (action === "forest") {
      location = "forest";
      console.log("You decide to go back to the forest.");
    }
  }
}

// Start the game
startGame();
