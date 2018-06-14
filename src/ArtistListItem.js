import React, { Component } from 'react';
import ListCheckbox from 'react-toolbox/lib/list/ListCheckbox';

class ArtistListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxActive: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange() {
    this.props.updateSelectedArtists(this.props.artist);
    this.setState({ checkboxActive: !this.state.checkboxActive });
  }

  render() {
    return (
      <ListCheckbox
        checked={this.state.checkboxActive}
        caption={this.props.artist.username}
        onChange={this.handleCheckboxChange}
      />
    );
  }
}

export default ArtistListItem;
