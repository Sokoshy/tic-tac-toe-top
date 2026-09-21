console.log("setup ok")

const gameBoard = (() => {
  let board = new Array(9).fill("");
  const getGameBoard = () => board;
  return {getGameBoard};
})();

function createPlayer(name, mark) {
  return {name: name, mark: mark};
}

const p1 = createPlayer("jean", "X");
const p2 = createPlayer("marc", "O");

console.log(p1.mark, p2.mark);
console.log(p1.name, p2.name);
