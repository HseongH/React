export default function Square({ value, isWinner, onSquareClick }) {
  return (
    <button
      className={`square${isWinner ? " winner" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
