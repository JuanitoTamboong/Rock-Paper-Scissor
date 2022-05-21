const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let Result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))
function generateComputerChoice(){
    const randomNUmber = Math.floor(Math.random() * 3) + 1//you can use PossibeChoice.Lenght
    
    if(randomNUmber === 1){
        computerChoice = 'rock'
    }
    if(randomNUmber === 2){
        computerChoice = 'scissors'
    }
    if(randomNUmber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if (computerChoice === userChoice){
        result = 'its  a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors"){
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scisorrs"){
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock"){
        result = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock"){
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper"){
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}