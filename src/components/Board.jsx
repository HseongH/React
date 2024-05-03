import Square from "./Square";
import { calculateWinner } from "../util/calculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
  const handleClick = (squareIndex) => {
    if (squares[squareIndex] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[squareIndex] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + squares[winner[0]]
    : squares.includes(null)
    ? "Next player: " + (xIsNext ? "X" : "O")
    : "Draw";

  return (
    <>
      <div className="status">{status}</div>

      {Array.from({ length: 3 }, (v, i) => i).map((i) => (
        <div className="board-row" key={`row-${i}`}>
          {Array.from({ length: 3 }, (v, i) => i).map((j, _, arr) => (
            <Square
              key={`square-${i * arr.length + j}`}
              value={squares[i * arr.length + j]}
              isWinner={winner && winner.includes(i * arr.length + j)}
              onSquareClick={() => handleClick(i * arr.length + j)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
