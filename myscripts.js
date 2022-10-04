let playerScore = 0
let computerScore = 0
let roundWinner = ''



function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
        return 'ROCK'
        case 1:
        return 'PAPER'
        case 2:
        return 'SCISSORS'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
      


function playRound(playerSelect, computerSelect){
    console.log("computer choice: " + computerSelect + " type: " + typeof(computerSelect));
    console.log("player choice: " + playerSelect + " type: " + typeof(playerSelect));
    if (computerSelect === playerSelect){
        roundWinner = 'tie'
    }

    if (
        playerSelect === 'ROCK' && computerSelect === 'SCISSORS' ||
        playerSelect === 'SCISSORS' && computerSelect === 'PAPER' ||
        playerSelect === 'PAPER' && computerSelect === 'ROCK'
    ){
        playerScore ++
        roundWinner = 'player'
    }
    else {
        computerScore ++
        roundWinner = 'computer'
    }

    updateScoreMessage(roundWinner, playerSelect, computerSelect)
}

console.log("hello")
// game()

// UI

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelect) {
    if (isGameOver()) {
      openEndgameModal()
      return
    }
  
    const computerSelect = getComputerChoice()
    playRound(playerSelect, computerSelect)
    updateScore()
    updateSelections(playerSelect, computerSelect)
  
    if (isGameOver()) {
      openEndgameModal()
      setFinalMessage()
    }
  }

  function updateScoreMessage(winner, playerSelect, computerSelect) {
    if (winner === 'player') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelect
      )} beats ${computerSelect.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelect
      )} is beaten by ${computerSelect.toLowerCase()}`
      return
    }
  
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelect
    )} ties with ${computerSelect.toLowerCase()}`
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
  }

  function updateSelections(playerSelect, computerSelect){
    playerSign.textContent = `${playerSelect}`
    computerSign.textContent = `${computerSelect}`
  }

  function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  
  function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  
  function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }