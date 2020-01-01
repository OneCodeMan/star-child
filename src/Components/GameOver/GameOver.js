import React from 'react';

const GameOver = ({ handlePlayAgainClick, handleSelection }) => (
  <div className="game-over-container">
    <h1>Gut gemacht! Wieder spielen?</h1>
    <input
      type="radio"
      name="size"
      value="small"
      onChange={() => handleSelection('small')}
    /> Small
    <input
      type="radio"
      name="size"
      value="medium"
      onChange={() => handleSelection('medium')}
    /> Medium
    <input
      type="radio"
      name="size"
      value="large"
      onChange={() => handleSelection('large')}
    /> Large

    <button
      className="play-again-button"
      onClick={() => handlePlayAgainClick()}
      >
      Ja
    </button>
  </div>
);

export default GameOver;
