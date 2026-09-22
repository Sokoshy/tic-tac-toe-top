console.log("setup ok")

const gameBoard = (() => {
  let board = new Array(9).fill("");

  const placeMark = (index, mark) => {
    if(board[index] === ""){
      board[index] = mark;
      return true;
    }else {
      return false;
    }
  }
  const getGameBoard = () => board;
  return {getGameBoard, placeMark};
})();

function createPlayer(name, mark) {
  return {name: name, mark: mark};
}

const p1 = createPlayer("jean", "X");
const p2 = createPlayer("marc", "O");

const gameController = (() => {
  let lastTurn = "";
  let turn = 0;

  const lastPlayed = () => lastTurn; 

  const actualTurn= (index, player) => {
    if(lastTurn !== player.name) {
      if(gameBoard.placeMark(index, player.mark) === false){
        return "The case is not empty";
      }else{
        lastTurn = player.name;
        turn++;
        if(turn >= 5) {
          const win = checkWin();
          if(win !== null){
            return win;
          }
          if( turn === 9 && win === null){
            return "Tie";
          }
        }
        return "The placement is correct";
      }
    }else {
      return "the player has already played";
    }
  }

  const checkWin = () => {
    const board = gameBoard.getGameBoard();
    const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    
    for (const [a, b, c] of winCombo) {
      if(board[a] !== "" && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
    }
    return null;
  }

  return {lastPlayed, actualTurn, checkWin}
})();

const displayController = (() => {
  const displayDiv = document.querySelector(".container");
  
  const render = () => {
    displayDiv.textContent = "";
    
    const board = gameBoard.getGameBoard();
    
    for(const square of board) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("square");
      newDiv.textContent = square;

      displayDiv.append(newDiv);
    }
  }
   return {render};
})();

console.log(p1.mark, p2.mark);
console.log(p1.name, p2.name);
displayController.render();
