
function getComputerChoice() {
    const max = 3
    let choice;
    let value = Math.random() * max;
    if (value < 1) {
        choice = 'rock';

    }
    else if (value < 2) {
        choice = 'paper';
    }
    else if (value < 3) {
        choice = 'scissors';
    }
    return choice;

}




function playRound(HumanChoice, ComputerChoice) {
    let choices = ['rock', 'scissors', 'paper'];
    let winner = -1;
    if (ComputerChoice == choices[0] && HumanChoice == choices[1] || ComputerChoice == choices[1] && HumanChoice == choices[2] || ComputerChoice == choices[2] && HumanChoice == choices[0]) {
        winner = 0;
    }
    else if (ComputerChoice == choices[1] && HumanChoice == choices[0] || ComputerChoice == choices[2] && HumanChoice == choices[1] || ComputerChoice == choices[0] && HumanChoice == choices[2]) {
        winner = 1;
    }
    else if (ComputerChoice == HumanChoice) {
        winner = -1;
    }
    return winner;
}




function playGame() {

    let HumanScore = 0;
    let ComputerScore = 0;
    let winner;

    let count = 0;

    while (count <= 5) {
        count++;




        const HumanChoice = prompt('Whats your input?').toLowerCase();
        const ComputerChoice = getComputerChoice();
        winner = playRound(HumanChoice, ComputerChoice);

        if (winner == 0) {
            ComputerScore++;
        }
        else if (winner == 1) {
            HumanScore++;
        }



        if (count === 5) {
            if (HumanScore > ComputerScore) {
                console.log('Human Wins!');
            }
            else if (ComputerScore < HumanScore) {
                console.log('Computer Wins!');

            }
            else {
                console.log('Tie!');

            }
            break;
        }


    }


}