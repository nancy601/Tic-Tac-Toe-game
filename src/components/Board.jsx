import React, { useState } from 'react';
import Square from './Square';
import { checkWinner } from '../utils';

const Board = ({ onGameEnd }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (newSquares[index] || checkWinner(newSquares)) return;

    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    const winner = checkWinner(newSquares);
    if (winner) {
      onGameEnd(winner);
    }
  };

  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {Array(9)
        .fill(null)
        .map((_, index) => renderSquare(index))}
    </div>
  );
};

export default Board;
