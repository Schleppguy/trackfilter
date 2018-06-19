import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import ArtistListItem from './ArtistListItem';

class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogActive: false,
      selectedArtists: []
    };
    this.handleDialogToggle = this.handleDialogToggle.bind(this);
    this.handleDialogApply = this.handleDialogApply.bind(this);
    this.handleDialogClear = this.handleDialogClear.bind(this);
    this.actions = this.actions.bind(this);
    this.updateSelectedArtists = this.updateSelectedArtists.bind(this);
  }

  handleDialogToggle() {
    this.setState({ dialogActive: !this.state.dialogActive });
  }

  handleDialogApply() {
    this.props.setMultipleArtistsFilter(this.state.selectedArtists);
    this.handleDialogToggle();
  }

  handleDialogClear() {
    this.setState({ selectedArtists: [] });
  }

  updateSelectedArtists(artist) {
    this.setState({
      selectedArtists: this.state.selectedArtists.concat([artist])
    });
  }

  actions() {
    return [
      { label: 'Cancel', onClick: this.handleDialogToggle },
      { label: 'Clear Selections', onClick: this.handleDialogClear },
      { label: 'Apply', onClick: this.handleDialogApply }
    ];
  }

  render() {
    return (
      <div>
        <Button
          label="By Artist"
          onClick={this.handleDialogToggle}
          icon="launch"
        />
        <Dialog
          actions={this.actions()}
          active={this.state.dialogActive}
          onEscKeyDown={this.handleDialogToggle}
          onOverlayClick={this.handleDialogToggle}
          title="Select 1 or More Artists"
          type="small"
        >
          <div style={{ maxHeight: '20em', overflow: 'auto' }}>
            <List selectable>
              <ListSubHeader caption="Artists you follow" />
              {this.props.followings.map((artist, idx) => {
                return (
                  <ArtistListItem
                    artist={artist}
                    updateSelectedArtists={this.updateSelectedArtists}
                    key={idx}
                  />
                );
              })}
            </List>
          </div>
        </Dialog>
      </div>
    );
  }
}

ArtistList.propTypes = {
  updateSelectedArtists: PropTypes.func,
  followings: PropTypes.array
};

export default ArtistList;
