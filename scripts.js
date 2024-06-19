// Returns the computer's "choice" between rock paper and scissors as a string, randomly generated

function getComputerChoice() {
    const randomizer = Math.floor(Math.random() * 100);

    if (randomizer < 33) {
        return "Rock";
    }
    else if (randomizer >= 33 && randomizer <= 66) {
        return "Paper";
    }
    else if (randomizer > 66) {
        return "Scissors";
    }

}

//  Returns the player's choice as a string, depending on user input

function getHumanChoice() {
    let choice = prompt("Type your choice : Rock, Paper or Scissors");
    choice = choice.toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        console.log("Your input is incorrect, check your spelling!");
        return getHumanChoice();
    }
    else {
        return choice[0].toUpperCase() + choice.slice(1);
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        console.log("Computer chose : " + computerChoice);
        console.log("You chose : " + humanChoice);
        
        if (computerChoice == "Rock") {
            if (humanChoice == "Rock") {
                console.log("Rock vs Rock, that's a draw!");
            }
    
            else if (humanChoice == "Paper") {
                console.log("Paper beats Rock, you win this round!");
                humanScore += 1;
            }
    
            else {
                console.log("Scissors loses to Rock, the computer wins this round!");
                computerScore += 1;
            }
        }
    
        else if(computerChoice == "Paper") {
            if (humanChoice == "Paper") {
                console.log("Paper vs Paper, that's a draw!");
            }
    
            else if (humanChoice == "Scissors") {
                console.log("Scissors beat Paper, you win this round!");
                humanScore += 1;
            }
    
            else {
                console.log("Scissors loses to Rock, the computer wins this round!");
                computerScore += 1;
            }
        }
    
        else {
            if (humanChoice == "Scissors") {
                console.log("Scissors vs Scissors, that's a draw!");
            }
    
            else if (humanChoice == "Rock") {
                console.log("Rock beats Scissors, you win this round!");
                humanScore += 1;
            }
    
            else {
                console.log("Paper loses to Scissors, the computer wins this round!");
                computerScore += 1;
            }
        }
    
    }

    while (computerScore <= 5 && humanScore <= 5) {
        playRound(getComputerChoice(), getHumanChoice());
        console.log("Current score :\n" + "Computer score : " + computerScore + "\n" + "Your score: " + humanScore);
        if (humanScore == 5) {
            console.log("Congratulations! You won the game with a score of " + humanScore + " to " + computerScore);
            return;
        }
        else if (computerScore == 5) {
            console.log("Dang it, you lost the game with a score of " + humanScore + " to " + computerScore);
            return;
        }
    }

}

playGame();