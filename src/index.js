import "./styles.css";

var count = 0;
var originalBoard;
const Player1 = "X";
const Player2 = "O";
const winningCombos = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

var barTime;

var barElement = document.getElementById("myBar");

var width = 0;


const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
  originalBoard = Array.from(Array(25).keys());
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  var count = 2;
  if (count % 2 === 0) {
    turn(square.target.id, Player1);
    count++;
    time();
    barStop();
    barFunction();
  } else {
    turn(square.target.id, Player2);
  }
}

function turn(squareId, player) {
  originalBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  document.getElementById(squareId).style.backgroundColor = "rgb(124, 252, 0)";
}


function resetSize() {
  width = 0;
  barElement.style.width = width + "%";
  barElement.innerHTML = width + "%";
}
function time() {
  resetSize();
  clearInterval(id);
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      resetSize();
      clearInterval(id);
    } else {
      width++;
      barElement.style.width = width + "%";
      barElement.innerHTML = Math.round(width / 10) + "s";
    }
  }
}
function barFunction() {
  barTime = setTimeout(timeOut, 10000);
}
function barStop() {
  clearTimeout(barTime);
}
function timeOut() {
  alert("TIMEOUT!");
  time();
  count++;
}