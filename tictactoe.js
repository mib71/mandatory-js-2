// gameBoard = [
//  [" 1 ", " 2 ", " 3 "],
//  [" 4 ", " 5 ", " 6 "],
//  [" 7 ", " 8 ", " 9 "]
//];
(function(d, w) {
  w.startNewGame = function() {
    document.getElementById("hideMe").style.display = "none";
    for (let i = 1; i <= 9; i++) {
      gameIni(i);
    }
    d.turn = "X";
    d.winner = null;
    displyText(d.turn + " starts!");
  };

  w.displyText = function(msg) {
    d.getElementById("msg").innerText = msg;
  };

  w.nextMove = function(box) {
    if (box.innerText === "" && d.winner === null) {
      box.innerText = d.turn;
      switchTurn();
    } else {
      if (d.winner === null) {
        displyText("Already taken!");
      }
    }
  };

  w.switchTurn = function() {
    if (checkForWinner(d.turn)) {
      displyText(d.turn + " is WINNER!!");
      d.winner = d.turn;
      document.getElementById("hideMe").style.display = "block";
    } else if (checkForTie()) {
      displyText("It's a TIE!!");
      d.winner = "TIE";
      document.getElementById("hideMe").style.display = "block";
    } else if (d.turn === "X") {
      d.turn = "O";
      displyText("It's " + d.turn + " 's turn!");
    } else {
      d.turn = "X";
      displyText("It's " + d.turn + " 's turn!");
    }
  };

  w.checkForWinner = function(move) {
    let result = false;
    if (
      checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(7, 5, 3, move)
    ) {
      result = true;
    }
    return result;
  };

  w.checkForTie = function() {
    var tie = false;

    for (let i = 1; i <= 9; i++) {
      if (getBox(i) === "") {
        tie = false;
        break;
      } else {
        tie = true;
      }
    }
    return tie;
  };

  w.checkRow = function(a, b, c, move) {
    let result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
      result = true;
    }
    return result;
  };

  w.getBox = function(n) {
    return d.getElementById("b" + n).innerText;
  };

  w.gameIni = function(n) {
    d.getElementById("b" + n).innerText = "";
  };
})(document, window);
