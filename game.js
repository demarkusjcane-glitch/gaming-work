const prompt = require("prompt-sync")();


let hasSword = false;
let hasPotion = false;
let playerHealth = 20;

function checkHealth () {
    if (playerHealth <=0) {
        alert ("you lost and died. reset game.");
        resetGame ();
    }
}

console.log("You are walking through a dark forest...");


let enterCave = prompt("You see a cave. Enter? (yes/no): ");


if (enterCave === "yes") {


    let takeSword = prompt("You find a sword. Take it? (yes/no): ");


    if (takeSword === "yes") {
        hasSword = true;
        console.log("You picked up the sword!");
    }


    console.log("A monster jumps out!");


    let fight = prompt("Fight the monster? (yes/no): ");


    if (fight === "yes") {


        if (hasSword === true) {
            console.log("You defeated the monster!");
            playerHealth = playerHealth + 2;
        } else {
            console.log("You got hurt!");
            playerHealth = playerHealth - 5;
            }
        checkHealth(); 
        }
        console.log("Your health is now: " + playerHealth);
    // } compare code on local with github
    }
    {
        let takeCharm = prompt("You find a charm. Take it? (yes/no): ");
        if (takeCharm === "yes") {
        hasCharm = true;
        console.log("You picked up the charm!");
        } else {
            console.log("you lost the charm")        
    }


}

let hasDoor = prompt("You find a strange door. Try to open it? (yes/no): ");


if (hasDoor === "yes") {


    console.log("Door doesn't open. You see a sign on the door. You must solve a riddle first.");


    let riddleAnswer = prompt("What goes up but never down? ");


    if (riddleAnswer === "age") {
        console.log("The door opens! the room is full of armor stands.");
    } else {
        console.log("Wrong answer. a pit opens below you. game over.");
         console.log("you lost the charm")
    }


    console.log("You walk away and you see the exit of the cave.");

let exitCave = prompt ("exit the cave? (yes/no) ");

if (exitCave === "yes") {
    console.log ("you walk out of the cave and find yourself in a fairy forest.");
} else {
    console.log ("you step outside anyway and find yourself in a fairy forest.");
}


console.log("you see a lit stand at the end of the dark room. The item on top seems to be rare and valuable.");
let takeArmor = prompt("However, the armor stands seem to twitch with life. do you go after it? (yes/no)");
   if (takeArmor === "yes") {
    console.log("you walk in but the walls have massive spider webs on them.");
   } else {
    console.log("you run out of the room.");
   }


function getDamage () {
    return Math.floor(Math.random()*5)+1;
}


let bossHealth = 30;


let fightBoss = prompt ("a giant spider jumps at you. fight the spider? (yes/no)");
if (fightBoss === "yes") {
    while (playerHealth > 0&& bossHealth > 0) {
        let attack = prompt("attack boss?(yes/no):");
        if (attack === "yes") {
        let playerDamage = getDamage();
            bossHealth -= playerDamage;
            console.log ("you attacked boss for " + playerDamage + " damage.");
            console.log ("boss health:" + bossHealth);
            if(bossHealth <= 0) {
                break;
            }
          } else if (action === "run") {
            console.log ("you escaped!");
        } else {
            console.log ("invaild action");
        }
        let bossDamage = getDamage();
        playerHealth -= bossDamage;
        console.log ("the giant spider attacked you for " + bossDamage + " damage.");
        console.log ("your health" + playerHealth);
    }
     
        } else if (action === "run") {
            console.log ("you escaped!");
        } else {
            console.log ("invaild action");
        }
    } else {
    console.log ("you did not take the rare item or fight the boss.");


if(bossHealth <= 0) {
    console.log ("you win");
}

else checkHealth();

if (action === "run") {
        console.log ("you ran away from the room.");
        break;

 }

let takePotion = prompt("Do you want to take the potion? (yes/no):");
if (takePotion === "yes")
    hasPotion = true;
    console.log ("You pick up the potion...");

function usePotion () {
    let effect = Math.random();
} 
    if (effect<0.5 ) {
        let heal= Math.floor(Math.random()*6)+3;
        playerHealth += heal;
        console.log ("You gained " + heal + "lives");
    } else {
        let damage= Math.floor(Math.random()*6)+3;
        playerHealth -= damage;
        console.log ("You lost " + damage + " Lives");
        checkHealth();
    }
    usePotion(); 
}


// After cave with fighting the boss leads to same place as leading out back of cave. 
// Leads to forest staying in forest for duration, fighting 3 bandits. 
// ?Add in meet people? Beat bandits and gain 5 health points, add in narration to move story. 