var readlineSync = require('readline-sync');

let enemies = [
    'Slime Ball',
    'Skeleton Pawn',
    'Skeleton Warrior',
    'Witch',
    'Skeleton Brute'
];

let inventoryItems = [
    'hands',
    'dagger',
    'sword',
    'bow'
];

function playGame(){
    console.log("\n \n \n LET THE GAMES BEGIN!!! \n")
    let level = 0;
    let inventory = [];
    let health = 100;

    while (health > 0){
        level ++;
        console.log(`Level: ${level}`);
        let newEnemy = Math.floor(Math.random() * 10);
        if (newEnemy < 8){
            console.log("This level seems clear");
    } else {
        const newHealth = fight(health);
        if (newHealth > health)
            inventory.push(inventoryItems[Math.floor(Math.random() * inventoryItems.length)]);
        health = newHealth;
        console.log(`Your current inventory is: ${inventory}`)
    }
    console.log (`\nGood job! You made it to level ${level}, and finished with: ${inventory}`);
}

function fight(health){
    const enemy = enemies[Math.floor(Math.random() * 5)];
    const enemyLives = Math.random() >= 0.5 ? true : false;
    console.log(`\n\n You have been ambushed by ${enemy}! Your current health is ${health}%\n`);
    let move = readlineSync.question('What would you like to do? \n Attack[A] \n Run[R] \n');
    if (move === "a" && enemyLives){
        console.log(`${enemy} dodged your attack and countered with their own!`);;
        health -= Math.floor(Math.random() * 20);
    } else if (move === "a"){
        console.log(`You have slain the ${enemy}!`);
        health += 10;
    } else if (move === "r") {
        console.log("You choose to run...");
        health = enemyLives ? 0 : health;
        console.log(`The ${enemy} manages to hit you before you flee...`);
    }
    console.log(`You survived this fight with ${health}% health`);
    return health - Math.floor(Math.random() * 10)
}
}

console.log ("Hello stranger! Welcome to this little adventure!");

let name = readlineSync.question('What is your name? ');

let choice = readlineSync.question(`Nice to meet you ${name}, let\'s get started...press 'w' to begin continue: `);
if (choice === 'w') playGame()
