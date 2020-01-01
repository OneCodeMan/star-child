import React from 'react';
import PropTypes from 'prop-types';

import './Word.css';

const Word = ({
  handleClick,
  id,
  translationId,
  value,
  selected,
  width,
  height,
  solved,
  disabled
}) => (

  <div
    className={`word-container ${selected ? 'selected' : ''}`}
    style={{ width, height }}
    onClick={() => disabled ? null : handleClick(id)}
  >
    <p className={solved ? 'solved' : ''}>{value}</p>
  </div>

);

Word.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  translationId: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Word;
