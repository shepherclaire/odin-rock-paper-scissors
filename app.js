function getComputerChoice() {
    let num = getRandomArbitrary(1, 4);
    if (num === 1){
        return "Rock";
    }else if (num === 2){
        return "Paper";
    }else if (num === 3){
        return "Scissors";
    }else {
        return "Error in computer choice generation";
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getHumanChoice() {
    let userChoice = prompt("Select rock, paper, or scissors for your turn");

    if (userChoice.toLowerCase() === "rock") {
        return "Rock";
    }else if (userChoice.toLowerCase() === "paper") {
        return "Paper";
    }else {
        return "Scissors";
    }
}

let computerChoice = getHumanChoice();
console.log(computerChoice);