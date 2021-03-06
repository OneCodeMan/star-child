import React from 'react';
import './GameSettings.css';

const SettingHeading = ({ text }) => (
  <div className="settings-heading">
    <h3>{text}</h3>
  </div>
);

const SizeSettings = ({ handleSizeSelection }) => (
  <div className="size-settings">
    <SettingHeading
      text='Wähle Spielgröße'
    />
  <label className="size-label">
      <span>Klein</span>
      <input
        type="radio"
        name="size"
        value="small"
        onChange={() => handleSizeSelection('small')}
      />
    </label>
    <label className="size-label">
      <span>Mittel</span>
      <input
        type="radio"
        name="size"
        value="medium"
        onChange={() => handleSizeSelection('medium')}
      />
    </label>
    <label className="size-label">
      <span>Groß</span>
      <input
        type="radio"
        name="size"
        value="large"
        onChange={() => handleSizeSelection('large')}
      />
    </label>
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
