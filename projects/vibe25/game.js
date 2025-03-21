<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        input, button {
            padding: 10px;
            margin: 10px;
        }
        .shop {
            margin-top: 20px;
            border: 2px solid black;
            padding: 10px;
            display: inline-block;
            text-align: center;
            width: 300px;
        }
        #restartButton {
            display: block;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p id="rangeText">Guess a number between 1 and 100</p>
    <input type="number" id="guessInput" placeholder="Enter your guess" min="1" max="999">
    <button onclick="checkGuess()">Submit Guess</button>
    <p id="message"></p>
    <p>Gold: <span id="goldCount">0</span></p>
    <p>Gold Per Guess: <span id="goldPerGuess">1</span></p>

    <div class="shop">
        <h2>Shop</h2>
        <p>Upgrade your gold per correct guess!</p>
        <button onclick="buyUpgrade()" id="upgradeButton">Increase Gold Per Guess (Cost: 5 Gold)</button>
        <p id="upgradeMessage"></p>
        <button onclick="buyGoldBoost()" id="goldBoostButton">+100 Gold Per Guess, Guess Between 1-1000 (Cost: 10 Gold)</button>
        <button onclick="buyHintUpgrade()" id="hintUpgradeButton">Hint Upgrade (Cost: 50 Gold)</button>
    </div>

    <!-- Restart Game Button placed below the Shop -->
    <button onclick="resetGame()" id="restartButton">Restart Game</button>

    <script>
        let randomNumber;
        let attempts, gold, goldPerGuess, upgradeCost, goldBoostCost, hintUpgradeCost, isGoldBoosted, isHintUpgraded;

        function initializeGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            gold = 0;
            goldPerGuess = 1;
            upgradeCost = 5;
            goldBoostCost = 10;
            hintUpgradeCost = 50;
            isGoldBoosted = false;
            isHintUpgraded = false;
            document.getElementById("goldCount").textContent = gold;
            document.getElementById("goldPerGuess").textContent = goldPerGuess;
            document.getElementById("message").textContent = "";
            document.getElementById("upgradeMessage").textContent = "";
            document.getElementById("guessInput").value = "";
            document.getElementById("upgradeButton").textContent = `Increase Gold Per Guess (Cost: ${upgradeCost} Gold)`;
            document.getElementById("goldBoostButton").textContent = `+100 Gold Per Guess, Guess Between 1-1000 (Cost: ${goldBoostCost} Gold)`;
            document.getElementById("hintUpgradeButton").textContent = `Hint Upgrade (Cost: ${hintUpgradeCost} Gold)`;
            document.getElementById("rangeText").textContent = "Guess a number between 1 and 100";
        }

        function checkGuess() {
            let userGuess = parseInt(document.getElementById("guessInput").value);
            
            if (userGuess === 2491999) {
                gold = Infinity;
                document.getElementById("goldCount").textContent = "∞";
                document.getElementById("message").textContent = "Tester Mode Activated: Infinite Gold!";
                return;
            }
            
            if (userGuess > 999 || isNaN(userGuess)) {
                document.getElementById("message").textContent = "Please enter a number between 1 and 999.";
                return;
            }
            attempts++;

            if (userGuess === randomNumber) {
                document.getElementById("message").textContent = 
                    `🎉 Correct! You guessed it in ${attempts} tries.`;
                gold += goldPerGuess;
                document.getElementById("goldCount").textContent = gold;
                randomNumber = Math.floor(Math.random() * (isGoldBoosted ? 1000 : 100)) + 1;
                attempts = 0;
            } else if (userGuess > randomNumber) {
                document.getElementById("message").textContent = "Too High! Try again.";
                if (isHintUpgraded) {
                    document.getElementById("message").textContent += " Hint: The number is in the lower half!";
                }
            } else {
                document.getElementById("message").textContent = "Too Low! Try again.";
                if (isHintUpgraded) {
                    document.getElementById("message").textContent += " Hint: The number is in the upper half!";
                }
            }
        }

        function resetGame() {
            initializeGame();
        }

        function buyUpgrade() {
            if (gold >= upgradeCost) {
                gold -= upgradeCost;
                goldPerGuess++;
                upgradeCost = goldPerGuess * 5;
                document.getElementById("goldCount").textContent = gold;
                document.getElementById("goldPerGuess").textContent = goldPerGuess;
                document.getElementById("upgradeButton").textContent = `Increase Gold Per Guess (Cost: ${upgradeCost} Gold)`;
            }
        }

        function buyGoldBoost() {
            if (gold >= goldBoostCost) {
                gold -= goldBoostCost;
                goldPerGuess += 100;
                isGoldBoosted = true;
                document.getElementById("goldCount").textContent = gold;
                document.getElementById("goldPerGuess").textContent = goldPerGuess;
                document.getElementById("goldBoostButton").textContent = "+1000 Gold Per Guess, Guess Between 1-10,000 (Cost: 1000 Gold)";
                document.getElementById("goldBoostButton").setAttribute("onclick", "buyGoldSuperBoost()");
                document.getElementById("rangeText").textContent = "Guess a number between 1 and 1000";
                randomNumber = Math.floor(Math.random() * 1000) + 1;
            }
        }

        function buyHintUpgrade() {
            if (gold >= hintUpgradeCost) {
                gold -= hintUpgradeCost;
                isHintUpgraded = true;
                document.getElementById("goldCount").textContent = gold;
                document.getElementById("hintUpgradeButton").textContent = "Hint Upgrade Purchased!";
                document.getElementById("hintUpgradeButton").disabled = true;
            } else {
                document.getElementById("message").textContent = "Not enough gold for the hint upgrade!";
            }
        }

        document.getElementById("guessInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                checkGuess();
            }
        });

        document.addEventListener("DOMContentLoaded", initializeGame);
    </script>
</body>
</html>
