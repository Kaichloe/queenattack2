function queensAttack(boardSize, k, queenX, queenY, obstacles){
  const board = Array.from(Array(boardSize), () => Array(boardSize).fill(0));
  let counter = 0;
  for (const [x, y] of obstacles){board[x - 1][y - 1] = 1};
  board[--queenX][--queenY] = "Q";
  counter += checkUp(board, queenX, queenY)
  counter += checkDown(board, queenX, queenY)
  counter += checkLeft(board, queenX, queenY)
  counter += checkRight(board, queenX, queenY)
  counter += checkUpRight(board, queenX, queenY)
  counter += checkUpLeft(board, queenX, queenY)
  counter += checkBottomRight(board, queenX, queenY)
  counter += checkBottomLeft(board, queenX, queenY)

  return counter;
}

function checkUp(board, queenX, queenY){
  let counter = 0;
  queenY++;
  while (queenY < board.length && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenY++;
  }
  return counter;
}

function checkDown(board, queenX, queenY){
  queenY--;
  let counter = 0;
  while (queenY >= 0 && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenY--;
  }
  return counter;
}

function checkLeft(board, queenX, queenY){
  let counter = 0;
  queenX--;
  while (queenX >= 0 && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenX--;
  }
  return counter;
}

function checkRight(board, queenX, queenY){
  let counter = 0;
  queenX++;
  while (queenX < board.length && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenX++;
  }
  return counter;
}

function checkUpLeft(board, queenX, queenY){
  let counter = 0;
  queenX--;
  queenY++;
  while (queenX >= 0 && queenY < board.length && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenX--;
    queenY++;
  }
  return counter;
}

function checkUpRight(board, queenX, queenY){
  let counter = 0;
  queenX++;
  queenY++;
  while (queenX < board.length && queenY >= 0 && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenX++;
    queenY++;
  }
  return counter;
}

function checkBottomRight(board, queenX, queenY){
  let counter = 0;
  queenX++;
  queenY--;
  while (queenX < board.length && queenY >= 0 && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenX++;
    queenY--;
  }
  return counter;
}

function checkBottomLeft(board, queenX, queenY){
  let counter = 0;
  queenX--;
  queenY--;
  while (queenX >= 0 && queenY >= 0 && board[queenX][queenY] === 0){
    board[queenX][queenY] = "X"
    counter++;
    queenX--;
    queenY--;
  }
  return counter;
}