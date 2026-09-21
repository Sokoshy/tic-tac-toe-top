console.log("setup ok")

const gameBoard = (() => {
  let board = new Array(9).fill("");

  const placeMark = (mark, index) => {
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

console.log(p1.mark, p2.mark);
console.log(p1.name, p2.name);
