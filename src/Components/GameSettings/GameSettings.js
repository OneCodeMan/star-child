import React from 'react';

const SettingHeading = ({ text }) => (
  <div className="settings-heading">
    <h1>{text}</h1>
  </div>
);

const SizeSettings = ({ handleSizeSelection }) => (
  <div className="size-settings">
    <SettingHeading
      text='Choose game size'
    />
    <input
      type="radio"
      name="size"
      defaultChecked
      value="small"
      onChange={() => handleSizeSelection('small')}
    /> Small
    <input
      type="radio"
      name="size"
      value="medium"
      onChange={() => handleSizeSelection('medium')}
    /> Medium
    <input
      type="radio"
      name="size"
      value="large"
      onChange={() => handleSizeSelection('large')}
    /> Large
  </div>
);

// for the future.
// es-lint-disable-next-line
const TypeSettings = ({ handleTypeSelection }) => (
  <div className="type-settings">
    <SettingHeading
      text='Choose word types'
    />
    <input
      type="checkbox"
      name="type"
      value="adjectives"
      onChange={() => handleTypeSelection('adjectives')}
      defaultChecked
    /> Adjectives
    <input
      type="checkbox"
      name="type"
      value="nouns"
      onChange={() => handleTypeSelection('nouns')}
      defaultChecked
    /> Nouns
    <input
      type="checkbox"
      name="type"
      value="verbs"
      onChange={() => handleTypeSelection('verbs')}
      defaultChecked
    /> Verbs
  </div>
);

const GameSettings = ({ handleSizeSelection, handleTypeSelection }) => {
  return (
    <div>
      <SizeSettings
        handleSizeSelection={handleSizeSelection}
      />
    </div>
  );
};

export default GameSettings;
