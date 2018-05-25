import React from 'react';
import scButton from '../assets/btn-connect-sc-l.png';

const SCButton = props => {
  return (
    <button
      onClick={props.startSession}
      style={{ border: 'none', backgroundColor: 'white' }}
    >
      <img src={scButton} className="sc-button" alt="Connect with SoundCloud" />
    </button>
  );
};

export default SCButton;
