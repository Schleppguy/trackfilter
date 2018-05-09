import React, { Component } from 'react';

import ArtistList from './components/ArtistList';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArtists: new Set()
    };
    this.updateSelectedArtists = this.updateSelectedArtists.bind(this);
  }

  updateSelectedArtists(artist) {
    if (this.state.selectedArtists.has(artist)) {
      const temp = new Set(this.state.selectedArtists);
      temp.delete(artist);
      this.setState({ selectedArtists: temp });
    } else {
      this.setState({
        selectedArtists: this.state.selectedArtists.add(artist)
      });
    }
  }

  render() {
    return (
      <div style={{ paddingLeft: '1em' }}>
        <h4>Filter by Artist</h4>
        <ArtistList
          followings={this.props.followings}
          selectedArtists={this.state.selectedArtists}
          updateSelectedArtists={this.updateSelectedArtists}
        />
      </div>
    );
  }
}

export default Filters;
