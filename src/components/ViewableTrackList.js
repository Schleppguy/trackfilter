import React, { Component } from 'react';
import TrackListItem from './TrackListItem';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const { viewableTrackList, loading } = this.props;
    const items = viewableTrackList.map((track, i) => {
      return <TrackListItem track={track} key={i} />;
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {loading ? (
          <div style={{ marginTop: '20%', marginLeft: '40%' }}>
            <CircularProgress size={100} />
          </div>
        ) : (
          items
        )}
      </div>
    );
  }
}

export default ViewableTrackList;
