import React from 'react';
import './GameOver.css';

const GameOver = ({ handlePlayAgainClick, disablePlayButton }) => (
  <div className="game-over-container">
    <button
      className="play-again-button"
      onClick={() => handlePlayAgainClick()}
      disabled={disablePlayButton}
      >
      Gehen wir!
    </button>
  </div>
);

export default GameOver;
