import React, { useState } from 'react';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';

function App() {
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const handleGameEnd = (winner) => {
    setScores({
      ...scores,
      [winner]: scores[winner] + 1,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-purple-300">
      <h1 className="text-5xl font-bold mb-8 text-yellow-500 drop-shadow-lg">Tic-Tac-Toe Game</h1>
      <Scoreboard scores={scores} />
      <div className="mt-6">
        <Board onGameEnd={handleGameEnd} />
      </div>
      <button
        onClick={() => setScores({ X: 0, O: 0 })}
        className="mt-6 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
      >
        Reset Scores
      </button>
    </div>
  );
}

export default App;
