import React, { Component } from 'react';
import TrackListItem from './TrackListItem';
import SCButton from './SCButton';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';

class ViewableTrackList extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.trackList.length < 250 &&
      this.props.cursor !== prevProps.cursor &&
      this.props.cursor !== null
    ) {
      this.props.getNewTracks(this.props.cursor);
    }
  }
  render() {
    const { viewableTrackList, startSession, loading } = this.props;
    const items = viewableTrackList.map((track, i) => {
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
  }
}

export default ViewableTrackList;
