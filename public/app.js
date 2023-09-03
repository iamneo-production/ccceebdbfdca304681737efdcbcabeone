let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(index) {
  if (!gameOver && gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    updateUI(index);
    if (checkWin()) {
      displayResult(`${currentPlayer} wins!`);
      gameOver = true;
    } else if (isBoardFull()) {
      displayResult("It's a draw!");
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateResultDisplay();
    }
  }
}

function checkWin() {
  // Implement your win-checking logic here
}

function isBoardFull() {
  return !gameBoard.includes('');
}

function updateUI(index) {
  const cell = document.getElementsByClassName('cell')[index];
  cell.textContent = currentPlayer;
}

function displayResult(message) {
  const resultContainer = document.getElementById('result');
  resultContainer.textContent = message;
}

function updateResultDisplay() {
  const resultContainer = document.getElementById('result');
  resultContainer.textContent = `Player ${currentPlayer}'s turn`;
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.textContent = '';
  }
  updateResultDisplay();
}

const cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function () {
    makeMove(i);
  });
}

const resetButton = document.getElementsByClassName('reset-button')[0];
resetButton.addEventListener('click', resetGame);
