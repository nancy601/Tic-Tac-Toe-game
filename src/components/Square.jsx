import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-4xl rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
    >
      {value}
    </button>
  );
};

export default Square;
