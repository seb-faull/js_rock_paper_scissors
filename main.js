//Variables
var gameRunning = true;
var player1Wins = false;
var player2Wins = false;
var computerChoice = Math.floor(Math.random() * 3) + 1;


//Functions
function rules () {
	var rules = alert('Rock, Paper, Scissors (aka "Ro-Sham-Bo", janken, "Bato, Bato, Pick" and "Scissors, Paper, Stone") is a simple hand game that is played around the world, with many different names and variations. \n \nIt is commonly used as a way of coming to decisions, and in some cases is even played for sport. The rules require that competing players use one hand to form one of three shapes at an agreed-upon time. The person that plays the strongest object is the winner of the game. It\'s that easy!');
}

function getInput (playerName) {
	return prompt(playerName + ', please select either \nRock: r \nPaper: p \nScissors: s')
} 

function oneWins() {
	player1Wins = true;
	alert('Player 1 wins!');
}

function twoWins() {
	player2Wins = true;
	alert('Player 2 wins!');
}

function computerWins() {
	alert('Computer wins!');
}

//Program Starts
rules();

var playMode = prompt('Would you like to play in Computer mode or 2 player mode? \nComputer mode - \'y\' \n2 player mode - \'n\'');

if (playMode === 'n') {

	while (gameRunning = true) {
	var player1 = getInput('Player 1')
	var player2 = getInput('Player 2')

	if (player1 === player2) {
		alert('It is a draw!');

	} else if (player1 === 'r') {
		if (player2 === 'p') {
			twoWins();
		} else {
			oneWins();
		}
	}	else if (player1 === 'p') {
			if (player2 === 's') {
				twoWins();
			} else {
				oneWins();
				}
			} else if (player1 === 's') {
			if (player2 === 'r') {
					twoWins();
			} else {
				oneWins();
			}
		}
	}
}

if (playMode === 'y') {

	if (computerChoice === 1) {
		computerChoice = 'r';
	} else if (computerChoice === 2) {
		computerChoice = 'p';
	} else if (computerChoice === 3) {
		computerChoice = 's';
	} else {
		alert('Computer bugged out!');
	} 

	while (gameRunning = true) {
	var player1 = getInput('Player 1')
	var computerChoice;

	if (player1 === computerChoice) {
		alert('It is a draw!');

	} else if (player1 === 'r') {
		if (computerChoice === 2) {
			computerWins();
		} else {
			oneWins();
		}
	}	else if (player1 === 'p') {
			if (computerChoice === 3) {
				computerWins();
			} else {
				oneWins();
				}
			} else if (player1 === 's') {
			if (computerChoice === 1) {
					computerWins();
			} else {
				oneWins();
			}
		}
	}
}





