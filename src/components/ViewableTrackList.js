import React from 'react';
import TrackListItem from './TrackListItem';
import SCButton from './SCButton';

const ViewableTrackList = props => {
  const { trackList, startSession, loading } = props;
  const items = trackList.map((track, i) => {
    return <TrackListItem track={track} key={i} />;
  });

  return (
    <div>
      <SCButton startSession={startSession} />
      {items}
    </div>
  );
};

export default ViewableTrackList;
