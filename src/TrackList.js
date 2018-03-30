import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import TrackListItem from './TrackListItem';

class TrackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      hasMoreItems: true,
    };
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems(page) {
    const end = page * 10;
    const tracks = this.props.tracks.slice(0, end);
    tracks.length < this.props.tracks.length ?
      this.setState({ tracks }) :
      this.setState({ tracks, hasMoreItems: false });
  }

  render() {

    let items = this.state.tracks.map((track, i) => {
      return <TrackListItem track={track} key={i} />
    });

    return (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={this.state.hasMoreItems}
        >
          <div className="tracks">
              {items}
          </div>
        </InfiniteScroll>
    );
  }
}

export default TrackList;
