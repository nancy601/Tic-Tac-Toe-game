import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div className="flex justify-between items-center w-full bg-gradient-to-r from-pink-500 to-yellow-500 p-4 rounded-lg shadow-md">
      <div className="text-xl font-bold">X Score: {scores.X}</div>
      <div className="text-xl font-bold">O Score: {scores.O}</div>
    </div>
  );
};

export default Scoreboard;
