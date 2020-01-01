import React from 'react';
import PropTypes from 'prop-types';

import Word from '../Word/Word';
import './Board.css';

const Board = ({
  dimension,
  words,
  handleClick,
  disabled,
  selected,
  wrongPairAnim,
  solved,
  solvedAnim
}) => (
  <div className="board">
    {
      words.map(word =>
        <Word
          key={word.id}
          id={word.id}
          translationId={word.translationId}
          value={word.value}
          width={dimension / 4.5}
          height={dimension / 5}
          selected={selected.includes(word.id)}
          wrongPairAnim={wrongPairAnim.includes(word.id)}
          solved={solved.includes(word.id)}
          solvedAnim={solvedAnim.includes(word.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(word.id)}
        />
      )
    }
  </div>
);

Board.propTypes = {
  dimension: PropTypes.number.isRequired,
  words: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Board;
