import React from 'react';
import './GameOver.css';

const GameOver = ({ handlePlayAgainClick }) => (
  <div className="game-over-container">
    <h1>Gut gemacht! Wieder spielen?</h1>

    <button
      className="play-again-button"
      onClick={() => handlePlayAgainClick()}
      >
      Ja
    </button>
  </div>
);

export default GameOver;
