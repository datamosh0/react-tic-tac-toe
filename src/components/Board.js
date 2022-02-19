import React from "react";

const Board = ({ squares, handleClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <div
            className="square"
            key={index}
            onClick={() => handleClick(index)}
          >
            {square}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
