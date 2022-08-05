let choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
let winner = [];


function computerChoice(){
    random =  Math.floor(Math.random() * 3);
    return choice[random];
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Check Who win each round then return winner name or tie and plus the winner or tie score
function checkWinner(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        tieScore++;
        return 'tie';
    }else if(computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore++;
        return 'computer';
    }else{
        playerScore++;
        return 'player';
    }
}

// Display Score and Text about who win or tie each round
function displayRound(win, playerSelection, computerSelection){
    if (win === 'tie'){
        document.querySelector('#display-score-tie').textContent = `Tie: ${tieScore}`
        document.querySelector('#display-round').textContent = `Game Tie`;
    }else if(win === 'player'){
        document.querySelector('#display-score-player').textContent = `Player: ${playerScore}`
        document.querySelector('#display-round').textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        document.querySelector('#display-round').style.backgroundColor = 'green';
    }else{
        document.querySelector('#display-score-computer').textContent = `Computer: ${computerScore}`
        document.querySelector('#display-round').textContent = `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        document.querySelector('#display-round').style.backgroundColor = 'red';
    }
}

//Display End Game
function displayEndGame(){
    document.querySelector('#display-end-game').style.display = 'block';
    if(playerScore === 5){
        document.querySelector('#display-end-game').textContent = 'You Win! You beat the computer and save the humanity';
    }else if(computerScore === 5){
        document.querySelector('#display-end-game').textContent = 'You Lose! the computer beat you and the world has die';
    }
}

// endGame Function
function endGame(){
    document.querySelector('#display-end-game').style.display = 'none';
    document.querySelector('#display-round').style.display = 'none';
    computerScore = 0;
    playerScore = 0;
    tieScore = 0;
    document.querySelector('#display-score-tie').textContent = `Tie: ${tieScore}`
    document.querySelector('#display-score-player').textContent = `Player: ${playerScore}`
    document.querySelector('#display-score-computer').textContent = `Computer: ${computerScore}`
}

// Reset Button
function reset(){
    resetButton = document.querySelector('#reset');
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', endGame); 
}


// Enable Playround Function when click the buttons.
function startGame(){
    const buttons = document.querySelectorAll('[data-selection]')
    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            playRound(button.dataset.selection);
        })
    })
}

// Main Function to make the game work
function playRound(playerSelection){
    if(playerScore === 5 || computerScore === 5 || tieScore === 5){
        return;
    }
    document.querySelector('#display-round').style.display = 'block';
    const computerSelection = computerChoice();
    const win = checkWinner(computerSelection, playerSelection);
    displayRound(win, playerSelection, computerSelection);
    if(playerScore >= 5 || computerScore >= 5 || tieScore >= 5){
        displayEndGame()
        reset();
    }
}

startGame()














