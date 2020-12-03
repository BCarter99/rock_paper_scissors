let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;

const buttons = document.querySelector('.btn-group');
const rbtn = document.querySelector('#rock');
const pbtn = document.querySelector('#paper');
const sbtn = document.querySelector('#scissors');
const body = document.querySelector('body');
const container = document.querySelector('#container');
const scoreboard = document.querySelector('#scoreboard');
const endgame = document.querySelector('#endgame');
const again = document.querySelector('#reset');

const div = document.createElement('div');

rbtn.addEventListener('click', function(e) {
    let playerChoice = 'rock';
    playRound(playerChoice, computerPlay());
    
    if (playerScore === 5 || compScore === 5) {
        declareWinner();
    }
});

pbtn.addEventListener('click', function(e) {
    let playerChoice = 'paper';
    playRound(playerChoice, computerPlay());

    if (playerScore === 5 || compScore === 5) {
        declareWinner();
    }
});

sbtn.addEventListener('click', function(e) {
    let playerChoice = 'scissors';
    playRound(playerChoice, computerPlay());

    if (playerScore === 5 || compScore === 5) {
        declareWinner();
    }
});

function computerPlay() {
    arr = ['Rock', 'Paper', 'Scissors']
    randIndex = Math.floor(Math.random() * arr.length);
    compChoice = arr[randIndex];
    return compChoice
}

function playRound(playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();
    compChoice = computerPlay().toLowerCase();

    if (playerChoice === compChoice) {
        displayResults('Tie!');
        }
    else if (
        (compChoice == 'rock' && playerChoice == 'scissors') ||
        (compChoice == 'scissors' && playerChoice == 'paper') ||
        (compChoice == 'paper' && playerChoice == 'rock')
    ) {
        compScore++;
        displayResults(`You lost. ${capitalize(compChoice)} beats ${playerChoice}`);
    }
    else {
        playerScore++;
        displayResults(`You win! ${capitalize(playerChoice)} beats ${compChoice}`);
    }
        
    }

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
    div.textContent = str;
    scoreboard.appendChild(div);
}

function declareWinner() {
    if (playerScore > compScore) {
        div.textContent = `You win! ${playerScore} to ${compScore}!`;
        scoreboard.appendChild(div);
    }
    else {
        div.textContent = `You lose... ${compScore} to ${playerScore}`;
        scoreboard.appendChild(div);
    }

    buttons.classList.add('disappear');
    reset();
    
}

function reset() {
    endgame.classList.remove('disappear');
    again.classList.remove('disappear');
    again.addEventListener('click', function(e) {
        location.reload();
    });
}

