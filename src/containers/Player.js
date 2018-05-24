import React from 'react';
import { connect } from 'react-redux';
import playerStyle from '../styles/playerStyle';

const Player = props => {
  return (
    <div style={playerStyle()}>
      <h2>Player</h2>
    </div>
  );
};

export default Player;
