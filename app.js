function getComputerChoice(){
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

let computerChoice = getComputerChoice();
console.log(computerChoice);