import React from 'react';
import TrackListItem from '../components/TrackListItem';

import { exampleTracks } from '../exampleTracks';

const TrackList = props => {
  let items = exampleTracks.map((track, i) => {
    return <TrackListItem track={track} key={i} />;
  });

  return <div>{items}</div>;
};

export default TrackList;
