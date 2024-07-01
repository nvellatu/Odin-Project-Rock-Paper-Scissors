console.log("hello world");

function getComputerChoice(){
    var randInt = Math.floor(Math.random() * 3);
    if (randInt == 0){return "rock";}
    else if (randInt == 1){return "paper";}
    else {return "scissors";}
}

function getHumanChoice(){
    return prompt("Choose (rock/paper/scissors)", "rock");
}

var humanScore = 0
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice){console.log(`This round was a tie!!! You both chose ${humanChoice}`);}
    if (humanChoice == "rock"){
        if (computerChoice =="paper"){
            computerScore++;
            console.log("Computer WINS! PAPER beats rock!!!")
        }
        else if (computerChoice =="scissors"){
            humanScore++;
            console.log("You win I guess... rock beats scissors..")
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice =="scissors"){
            computerScore++;
            console.log("Computer WINS! SCISSORS beats paper!!!")
        }
        else if (computerChoice =="rock"){
            humanScore++;
            console.log("You win I guess... paper beats rock..")
        }
    }
    else if (humanChoice == "scissors"){
        if (computerChoice =="rock"){
            computerScore++;
            console.log("Computer WINS! ROCK SMAAASHES scissors!!!")
        }
        else if (computerChoice =="paper"){
            humanScore++;
            console.log("You win I guess... scissors beats paper..")
        }
    }
}


function playGame(){
    for(let i=0; i <5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore ==computerScore){console.log(`We both scored ${humanScore}, so it's a tie.`);}
    else if (humanScore > computerScore){console.log(`Looks like ya beat me fair and square! You scored ${humanScore} and I got ${computerScore}.`);}
    else {console.log(`I WIIIIIIIIINNNNN!!!!! You scored ${humanScore} and I got ${computerScore}!!`);}
}
playGame();
