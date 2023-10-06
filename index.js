function checkWinner(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function markWinningCells(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      markCellAsWinning(i, 0);
      markCellAsWinning(i, 1);
      markCellAsWinning(i, 2);
      return;
    }
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      markCellAsWinning(0, i);
      markCellAsWinning(1, i);
      markCellAsWinning(2, i);
      return;
    }
  }
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    markCellAsWinning(0, 0);
    markCellAsWinning(1, 1);
    markCellAsWinning(2, 2);
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    markCellAsWinning(0, 2);
    markCellAsWinning(1, 1);
    markCellAsWinning(2, 0);
  }
}

function markCellAsWinning(row, col) {
  const cell = document.getElementById("board").children[row * 3 + col];
  cell.classList.add("winning-cell");
}

function resetGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("message").innerHTML = "";
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].classList.remove("winning-cell"); // Remove winning effect
  }
}
