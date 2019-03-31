// Make clear button/reset button (clearInterval or removeClass)
//style.backgroundColor etc for X and O when played ???


let buttonClear = document.querySelector('.buttonClear');

function resetGame() {
	document.getElementById("gridBox").reset();
}

function startGame() {
	document.turn = "X";
	displayPrompt(document.turn + " goes first");
}

function displayPrompt(prompt) {
document.getElementById('prompt').innerText = prompt;
}

function nextTurn(gridBox) {
	if(gridBox.innerText == "") {
	gridBox.innerText = document.turn;
	switchPlayers();
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

	// let gameBoard = document.querySelector('.gameboard');
	// gameBoard = Array.from(Array(9).keys());
	// for(let i = 1; i < grid-box.length; i++) {
	// 	grid-box[i].innerText = '';
// 	// 	grid-box[i].addEventListener('click', playerTurn, false);
// 	}

// }

//list winning combos in array, one for each color
// let result = false;

const winningArray = [
[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]
];


//display which player's turn it is

//track winner by checking for winning array
// let player1Array = ;
// let player2Array = ;

//alert window for winner
const checkForWinner = () => {
    if(playerXArray == winningArray.filter) {
      alert('PLAYER X IS THE WINNER!!');
    } else if (playerOArray == winningArray.filter) {
    	alert('PLAYER O IS THE WINNER!!');
    } else {
    	alert('IT\'S A TIE!?!');
    }
  };
// startGame();
//make function for onclick x and o
// let a = 1;
// 
// function startGame(){
// if(a = 1){
//    document.getElementById('').innerHTML='X';
// }else{
//    document.getElementById('').innerHTML='O';
// }
// a=0;
// }