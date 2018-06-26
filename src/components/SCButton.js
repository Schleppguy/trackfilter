import React from 'react';
import scButton from '../assets/btn-connect-sc-l.png';

const SCButton = props => {
  return (
    <div>
      <button onClick={props.startSession} style={{ border: 'none' }}>
        <img src={scButton} alt="Connect with SoundCloud" />
      </button>
    </div>
  );
};

export default SCButton;
