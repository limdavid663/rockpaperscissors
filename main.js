let choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

function computerChoice(){
    random =  Math.floor(Math.random() * 3);
    return choice[random];
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        return `Game Tie Player and Computer are choose ${computerSelection}`;
    }else if(computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore++;
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }else{
        playerScore++;
        return `You Win!  ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
    }
}

function playGame(){
    for(i=0; i<5; i++){
        const playerSelection = prompt("Enter: Rock / Paper / Scissors").toLowerCase();
        const computerSelection = computerChoice().toLowerCase();
        console.log(game(computerSelection, playerSelection));
        console.log(`Player Score: ${playerScore}     Computer Score: ${computerScore}`);
    }
    if(playerScore >= computerScore){
        return `You are a genius`;
    }else{
        return `You lose! See you next time!`
    }
}

console.log(playGame());