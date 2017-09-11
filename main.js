var gameRunning = true;

function rules () {
	var rules = alert('Welcome to the game Rock, Paper, Scissors. \nTo start, you must pick a choice: \n Rock = r \n Paper = p \n Scissors = s');
}

function getInput (playerName) {
	return prompt(playerName + ', please select either \nRock: r \nPaper: p \nScissors: s')
} 

while (gameRunning = true) {
	rules();
	var player1 = getInput('Player 1')
	var player2 = getInput('Player 2')
	break;
}



