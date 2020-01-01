import React, { useState, useEffect } from 'react';
import './Main.css';

import Board from '../Board/Board';
import generateWords from '../../Helpers/WordGeneration';

function Main() {
  const [words, setWords] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dimension, setDimension] = useState(400);

  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return () => window.removeEventListener('resize', resizeListener);
  });

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ))
  };

  const handleClick = (id) => {
    setDisabled(true);
    if (selected.length === 0 ) {
      setSelected([id]);
      setDisabled(false);
    } else {
      if (sameWordClicked(id))  {
        resetWords();
        return;
      }
      setSelected([selected[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, selected[0], id]);
        resetWords();
      } else {
        setTimeout(resetWords, 1000);
      }
    }
  };

  const resetWords = () => {
    setSelected([]);
    setDisabled(false);
  };

  const sameWordClicked = (id) => selected.includes(id);

  const isMatch = (id) => {
    const firstWord = words.find((word) => word.id === id);
    const secondWord = words.find((word) => selected[0] === word.id);
    return secondWord.translationId === firstWord.translationId;
  }

  return (
    <div className="Main">
      <h2>Test your German</h2>
      <Board
        dimension={dimension}
        words={words}
        selected={selected}
        solved={solved}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  );
}

export default Main;
