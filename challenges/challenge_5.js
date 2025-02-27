const prompt = require('prompt-sync')();
function spawnEnemy(name, level) {
   let enemy = { name: name, level: level };
   console.log("A wild " + enemy.name + " appeared! Level: " + enemy.level);
}
spawnEnemy("Goblin", 6);
spawnEnemy("Goblin", 2);
spawnEnemy("Goblin", 8);
spawnEnemy("Dragon", 10);