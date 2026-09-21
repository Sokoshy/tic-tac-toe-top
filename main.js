console.log("setup ok")

const gameBoard = (() => {
  let board = new Array(9).fill("");
  const getGameBoard = () => board;
  return {getGameBoard};
})();

