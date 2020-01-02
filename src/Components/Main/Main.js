import React, { useState, useEffect } from 'react';
import './Main.css';

import Board from '../Board/Board';
import GameOver from '../GameOver/GameOver';
import GameSettings from '../GameSettings/GameSettings';
import generateWords from '../../Helpers/WordGeneration';

const numWordsMap = {
  'debug': 1,
  'small': 5,
  'medium': 8,
  'large': 12
};

function Main() {
  const [words, setWords] = useState([]);
  const [numWords, setNumWords] = useState(numWordsMap.debug);
  const [wordTypes, setWordTypes] = useState(['adjectives', 'nouns', 'verbs']); // future
  const [selected, setSelected] = useState([]);
  const [dimension, setDimension] = useState(400);

  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [solvedAnim, setSolvedAnim] = useState([]);
  const [wrongPairAnim, setWrongPairAnim] = useState([]);

  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setWords(generateWords(numWords));
  }, []);

  // useEffect(() => {
  //   const resizeListener = window.addEventListener('resize', resizeBoard);
  //
  //   return () => window.removeEventListener('resize', resizeListener);
  // });
  //
  // const resizeBoard = () => {
  //   setDimension(Math.min(
  //     document.documentElement.clientWidth,
  //     document.documentElement.clientHeight,
  //   ))
  // };

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
        setSolvedAnim([selected[0], id]);
        setTimeout(solveAnimation, 1000);
        resetWords();
        setTimeout(checkGameOver, 1500);
      } else {
        setWrongPairAnim([selected[0], id]);
        setTimeout(wrongPairAnimation, 1000);
        setTimeout(resetWords, 1000);
      }
    }
  };

  const resetWords = () => {
    setSelected([]);
    setDisabled(false);
  };

  const solveAnimation = () => {
    setSolvedAnim([]);
  };

  const wrongPairAnimation = () => {
    setWrongPairAnim([]);
  };

  const sameWordClicked = (id) => selected.includes(id);

  const isMatch = (id) => {
    const firstWord = words.find((word) => word.id === id);
    const secondWord = words.find((word) => selected[0] === word.id);
    return secondWord.translationId === firstWord.translationId;
  };

  const checkGameOver = () => {
    // for some reason, solved's length isn't equal to words when you check.
    // is it bc of hooks asynchronicity?
    if (solved.length === (words.length - 2)) {
      setGameOver(true);
      setTimeout(resetGame, 1200);
    };
  };

  const resetGame = () => {
    setSolved([]);
  };

  const handlePlayAgainClick = () => {
    setGameOver(false);
    setWords(generateWords(numWords));
  };

  const handleSizeSelection = (value) => {
    setNumWords(numWordsMap[value]);
  };

  // for the future!
  const handleTypeSelection = (value) => {
    alert(value);
  };

  return (
    <div className="Main">
      <h2>Test Your German</h2>
      {
        !gameOver ?
        <Board
          dimension={dimension}
          words={words}
          selected={selected}
          wrongPairAnim={wrongPairAnim}
          solved={solved}
          solvedAnim={solvedAnim}
          handleClick={handleClick}
          disabled={disabled}
        /> :
        <div>
          <GameOver
            handlePlayAgainClick={handlePlayAgainClick}
          />
          <GameSettings
            handleSizeSelection={handleSizeSelection}
            handleTypeSelection={handleTypeSelection}
          />
        </div>
      }
    </div>
  );
}

export default Main;
