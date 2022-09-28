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
      

function askPlayer(){
    let answer = prompt("Choose Rock, Paper, or Sissors");
    let upAnswer = answer.toUpperCase();
    return upAnswer

}


function playRound(){
    const playerSelect = askPlayer();
    const computerSelect = getComputerChoice();
    console.log("computer choice: " + computerSelect + " type: " + typeof(computerSelect));
    console.log("player choice: " + playerSelect + " type: " + typeof(playerSelect));
    if (computerSelect === playerSelect){
        return 'Tie'
    }

    if (
        playerSelect === 'ROCK' && computerSelect === 'SCISSORS' ||
        playerSelect === 'SCISSORS' && computerSelect === 'PAPER' ||
        playerSelect === 'PAPER' && computerSelect === 'ROCK'
    ){
        return 'winner!'
    }
    else {
        return 'loser'
    }


}

function game() {


    let score = 0
    for (i=0; i<5; i++){
        let result = playRound()
        console.log(result)
        if (result === 'winner!'){
            score += 1
        }


    }
    console.log("final score: " + score)
}

game()