import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove) => {};

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>
          {history.map((squares, move) => {
            const description =
              move > 0 ? `Go to move #${move}` : "Go to game start";

            return (
              <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
