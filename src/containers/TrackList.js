import React from 'react';
import { connect } from 'react-redux';
import TrackListItem from '../components/TrackListItem';

const TrackList = props => {
  let items = props.trackList.map((track, i) => {
    return <TrackListItem track={track} key={i} />;
  });

  return <div>{items}</div>;
};

const mapStateToProps = state => {
  return { trackList: state.tracks.trackList };
};

export default connect(mapStateToProps)(TrackList);
