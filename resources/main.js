let squares = document.querySelectorAll(".square");
let restart = document.querySelector(".restart-btn");

let player = 1;

function squareClick(clickedSquare) {
  const currentSquare = clickedSquare.target;

  if (!boardIsFull()) {
    validMove(currentSquare);
    checkWinner(squares);
  }
  endGame();
}

function validMove(Object) {
  if (Object.innerHTML === "O" || Object.innerHTML === "X") {
    alert("Invalid move");
  } else if (player === 1) {
    Object.innerHTML = "X";
    change_player();
  } else if (player === 2) {
    Object.innerHTML = "O";
    change_player();
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
  let checkSquares = Object.values(squares).every(
    (value) => value.innerHTML != ""
  );
  if (checkSquares == true) {
    isFull = true;
  }
  return isFull;
}

function checkWinner(grid) {
  let gameState = [];

  Object.values(grid).forEach((item) => gameState.push(item.innerHTML));

  let rows = [
    [gameState[0], gameState[1], gameState[2]],
    [gameState[3], gameState[4], gameState[5]],
    [gameState[6], gameState[7], gameState[8]],
  ];

  rows.forEach((row) => {
    if (
      row.every((item) => item === "X") ||
      row.every((item) => item === "O")
    ) {
      alert("Winner");
    }
  });

  let columns = [
    [gameState[0], gameState[3], gameState[6]],
    [gameState[1], gameState[4], gameState[7]],
    [gameState[2], gameState[5], gameState[8]],
  ];

  columns.forEach((col) => {
    if (
      col.every((item) => item === "X") ||
      col.every((item) => item === "O")
    ) {
      alert("Winner");
    }
  });

  let diagonal = [
    [gameState[0], gameState[4], gameState[8]],
    [gameState[2], gameState[4], gameState[6]],
  ];

  diagonal.forEach((diag) => {
    if (
      diag.every((item) => item === "X") ||
      diag.every((item) => item === "O")
    ) {
      alert("Winner");
    }
  });
}

function endGame() {
  if (boardIsFull()) {
    alert("board is full");
  }
}

function refresh() {
  let grid = Object.values(squares);

  grid.forEach((item) => (item.innerHTML = ""));
}

squares.forEach((square) => square.addEventListener("click", squareClick));
restart.addEventListener("click", refresh);
