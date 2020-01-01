import React from 'react';
import PropTypes from 'prop-types';

import './Word.css';

const Word = ({
  handleClick,
  id,
  translationId,
  value,
  selected,
  wrongPairAnim,
  width,
  height,
  solved,
  solvedAnim,
  disabled
}) => (

  <div
    className={`word-container ${selected ? 'selected' : ''} ${solved ? 'solved' : ''}
                               ${solvedAnim ? 'solvedAnim' : ''}
                               ${wrongPairAnim ? 'wrongPairAnim' : ''}`}
    style={{ width, height }}
    onClick={() => disabled ? null : handleClick(id)}
  >
    <p className="value">{value}</p>
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
