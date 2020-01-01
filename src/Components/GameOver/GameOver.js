import React from 'react';

const GameOver = ({ handleGameOverClick }) => (
  <div className="game-over-container">
    <h1>Gut gemacht! Wieder spielen?</h1>
    <button
      className="play-again-button"
      onClick={() => handleGameOverClick()}
      >
      Ja
    </button>
  </div>
);

export default GameOver;
