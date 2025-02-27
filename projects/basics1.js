
function fightMonster(attackPower, weapontype) {
    if (weapontype == 'magic_sword'){
        attackPower = attackPower + 5 
    }       
    if (attackPower > 10) {
      console.log("You defeated the monster!");
    } else {
      console.log("The monster is too strong!");
    }
 }
 // Call the function with a test value
 fightMonster(12);
 fightMonster(8, 'magic_sword');
 fightMonster(7);