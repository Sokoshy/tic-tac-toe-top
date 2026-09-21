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

  const lastPlayed = () => lastTurn; 

  const actualTurn= (index, player) => {
    if(lastTurn !== player.name) {
      if(gameBoard.placeMark(index, player.mark) === false){
        return "The case is not empty";
      }else{
        lastTurn = player.name;
        return "The placement is correct";
      }
    }else {
      return "the player has already played";
    }
  }

  return {lastPlayed, actualTurn}
})();

console.log(p1.mark, p2.mark);
console.log(p1.name, p2.name);
