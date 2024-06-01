let currentPlayer = "X";
let array = Array(9).fill(null);

function checkWinner() {
  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5]) ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[1] !== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[5]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6])
  ) {
    document.write(`The Winner is ${currentPlayer}`);
    return;
  }
  if (!array.some((nullSpace) => nullSpace === null)) {
    document.write(`Its Draw`);
    return;
  }
}

function handleClick(index) {
  const id = Number(index.id);
  if (array[id] !== null) return;
  array[id] = currentPlayer;
  index.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  console.log(array);
}
