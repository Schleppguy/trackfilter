import React from 'react';
import TrackListItem from './TrackListItem';
import SCButton from './SCButton';
// import exampleTracks from '../exampleTracks.json';

const TrackListView = props => {
  console.log(props);
  const items = props.trackList.map((track, i) => {
    return <TrackListItem track={track} key={i} />;
  });

  return (
    <div>
      <SCButton startSession={props.startSession} />
      {items}
    </div>
  );
};

export default TrackListView;
