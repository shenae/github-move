
//list winning combos in array
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

const winningArray = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

function startGame() {
	document.turn = "X";
	displayPrompt(document.turn + " goes first");
}
//display who is playing
function displayPrompt(prompt) {
document.getElementById('prompt').innerText = prompt;
}

//display which player's turn it is
//track clicks
function nextTurn(gridBox) {
	console.log(gridBox.id)
	if(gridBox.innerText == "") {
		board[gridBox.id] = document.turn;
		console.log(board);
		gridBox.innerText = document.turn;
		switchPlayers();
		checkForWinner();
	} else {
		displayPrompt("Pick another square");
	}	
}

function switchPlayers() {
	if(document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";
	}
	displayPrompt("Play on Player " + document.turn);
}

//check for winner by seeing if winning array matched board index placement
const checkForWinner = () => 
		winningArray.map(e => {
			if(
				(board[e[0]] === 'X' && board[e[1]] === 'X' && board[e[2]]=== 'X')|| 
				(board[e[0]] === 'O' && board[e[1]] === 'O' && board[e[2]]=== 'O')
				)
			{
				displayPrompt(`Player ${board[e[0]]} is the winner!`);
			}	
			if (!board.includes(' ') && board.length === 9) {
				displayPrompt(`It's a tie!!`);
			}

		});
	//for loop of to clear the gridbox array	
const resetGame = () => {
	let gridBoxes = document.querySelectorAll(".gridBox")
	for(i=0;i<gridBoxes.length;i++){
		gridBoxes[i].innerText = "";
	}
};
