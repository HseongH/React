import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [orderBy, setOrderBy] = useState("asc");
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handleOrderBy = () => {
    setOrderBy(orderBy === "asc" ? "desc" : "asc");
  };
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <button onClick={handleOrderBy}>{orderBy}</button>

        <ol reversed={orderBy === "desc"}>
          {orderBy === "asc" ? moves : moves.reverse()}
        </ol>

        <div className="status">
          {currentMove > 0
            ? `당신은 ${currentMove}번째 순서에 있습니다…`
            : "Game Start"}
        </div>
      </div>
    </div>
  );
}
