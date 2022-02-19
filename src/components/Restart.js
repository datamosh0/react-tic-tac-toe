import React from "react";

const Restart = ({ resetGame }) => {
  return (
    <button className="restart" onClick={resetGame}>
      Restart
    </button>
  );
};

export default Restart;
