const readline = require("readline-sync");

const name = readline.question("What is your name? ");
console.log("Hello, "+name+"!")

const start = readline.question("Would you like to play Escape room? [Y] or [N] ", {limit: ["y", "N"]});
if (start == "y"){
    console.log(name + " has entered the Escape Room")
} else if (start == "n"){
    console.log("Try again another day, "+name+"!")
        process.exit()
}
isAlive = true

while(isAlive === true){
    // while the game is still active AND the user has not yet found the key
    {
    var playerChoice = readline.question("What would you like to do...\n [1]Put hand in the hole? \n [2]Find the key? \n [3]Open the door? \n ", {limit: ["1", "2", "3"]});
    
    
    if (playerChoice === "1"){
        isAlive = false;
    } else if (playerChoice === "2"){
        isAlive = true;
    } else if (playerChoice === "3"){
        isAlive = true;
    }
    var findKey = readline.question ("You found a mysterious key sitting behind a picture framed on the wall. What would you like to do? \n [1] Use key on the door \n [2] Put your hand in the hole \n", {limit: ["1", "2"]});
            if (findKey === "1"){
                console.log("You insert the key into the door's lock and succesfully escape the room!")
                process.exit()
            } else if (findKey === "2")
                isAlive = false;
}



var gameOver = readline.question("DEAD. Would you like to try again? [Y] or [N] ", {limit: ["y", "n"]})
    if (gameOver === "y"){
        isAlive = true;
    } else if (gameOver === "n")
        process.exit()
    }
