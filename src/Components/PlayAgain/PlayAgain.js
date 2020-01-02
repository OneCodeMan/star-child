import React from 'react';
import './PlayAgain.css';

const PlayAgain = ({ handlePlayAgainClick, disablePlayButton }) => (
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

export default PlayAgain;
