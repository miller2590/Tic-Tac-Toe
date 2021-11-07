let game_board = document.body.getElementsByClassName("game-board")[0];
let squares = game_board.getElementsByTagName("div");

let player = 1;
let isWinner = false;


// function validMove() {
//   // Checks if square is available, and player status and it places an X or O
//   for (let i = 0; i < 9; i++) {
//     squares[i].addEventListener("click", () => {
//       if (squares[i].innerHTML === "O" || squares[i].innerHTML === "X") {
//         alert("Invalid move");
//       } else if (player === 1) {
//         squares[i].innerHTML = 'X';
//         change_player()
//       } else if (player === 2) {
//         squares[i].innerHTML = 'O';
//         change_player()
//       }
//     });
//   }
// }


function squareClick(clickedSquare) {

  const currentSquare = clickedSquare.target;

  if (currentSquare.innerHTML === "O" || currentSquare.innerHTML === "X") {
    alert("Invalid move");
  } else if (player === 1) {
    currentSquare.innerHTML = 'X';
    change_player()
  } else if (player === 2) {
    currentSquare.innerHTML = 'O';
    change_player()
  }
}

function change_player() {
  if (player === 1) {
    player++;
  } else {
    player--;
  }
}

function boardIsFull() {
  let isFull = false;
  let checkSquares = Object.values(squares).every(value => value.innerHTML != "");
  if (checkSquares == true) {
    isFull = true;
  }
  return isFull;
}

function endGame() {
  if (boardIsFull()) {
    alert('board is full')
  }
}


document.querySelectorAll('.square').forEach(square => square.addEventListener('click', squareClick));
