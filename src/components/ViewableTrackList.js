import React from 'react';
import TrackListItem from './TrackListItem';
import SCButton from './SCButton';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';

const ViewableTrackList = props => {
  const { trackList, startSession, loading } = props;
  const items = trackList.map((track, i) => {
    return <TrackListItem track={track} key={i} />;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SCButton startSession={startSession} />
      {loading ? (
        <div style={{ marginTop: '20%', marginLeft: '40%' }}>
          <ProgressBar type="circular" mode="indeterminate" />
        </div>
      ) : (
        items
      )}
    </div>
  );
};

export default ViewableTrackList;
