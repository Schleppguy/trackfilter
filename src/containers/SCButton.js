import React from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../actions';

import scButton from '../assets/btn-connect-sc-l.png';

const SCButton = props => {
  return (
    <button
      onClick={props.getTracks}
      style={{ border: 'none', backgroundColor: 'white' }}
    >
      <img src={scButton} className="sc-button" alt="Connect with SoundCloud" />
    </button>
  );
};

const mapStateToProps = state => {
  return { trackList: state.tracks.trackList };
};

const mapDispatchToProps = dispatch => {
  return { getTracks: () => dispatch(getTracks()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SCButton);
