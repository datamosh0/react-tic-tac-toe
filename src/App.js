import Message from "./components/Message";
import Board from "./components/Board";
import Restart from "./components/Restart";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);
  const [message, setMessage] = useState("Player X's Turn");
  const [gameover, setGameover] = useState(false);

  const resetGame = () => {
    setXTurn(true);
    setSquares(Array(9).fill(""));
    setMessage("Player X's turn");
    setGameover(false);
  };

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let turnHolder = xTurn ? "X" : "O";

    let resultArr = [];
    winConditions.forEach((combination) => {
      let row = [
        board[combination[0]],
        board[combination[1]],
        board[combination[2]],
      ];
      let results = row.every((currentValue) => currentValue === turnHolder);
      resultArr.push(results);
    });
    if (resultArr.includes(true)) return true;
  };

  const handleClick = (index) => {
    let boardTemp = [...squares];

    if (!gameover) {
      if (boardTemp[index] !== "") return;
      boardTemp[index] = xTurn ? "X" : "O";
      setXTurn(!xTurn);
      setSquares(boardTemp);
      setMessage(xTurn ? "Player O's turn" : "Player X's turn");
    }
    //if a player wins
    if (checkWinner(boardTemp)) {
      setMessage(xTurn ? "Player X Wins!" : "Player O Wins!");
      setGameover(true);
    }
    //if board is full show a tie
    if (
      boardTemp.every((i) => i === "X" || i === "O") &&
      !checkWinner(boardTemp)
    ) {
      setMessage("Tie");
      setGameover(true);
    }
  };
  return (
    <>
      <div className="title">Tic-Tac-Toe</div>
      <main>
        <Message msg={message} />
        <Board squares={squares} handleClick={handleClick} />
        <Restart resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
