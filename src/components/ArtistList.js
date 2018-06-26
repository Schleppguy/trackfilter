import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2em'
  },
  input: {
    width: '11.5em'
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300
  }
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArtists: [],
      name: []
    };
    this.updateSelectedArtists = this.updateSelectedArtists.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.cursor !== prevProps.cursor && this.props.cursor !== null) {
      this.props.getMyFollowings(this.props.cursor);
    }
  }

  updateSelectedArtists(event) {
    this.setState({ selectedArtists: event.target.value });
    this.props.setMultipleArtistsFilter(event.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox">
            Select Multiple
          </InputLabel>
          <Select
            multiple
            value={this.state.selectedArtists}
            onChange={this.updateSelectedArtists}
            input={
              <Input id="select-multiple-checkbox" className={classes.input} />
            }
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {this.props.followings.map(artist => (
              <MenuItem key={artist.username} value={artist.username}>
                <Checkbox
                  checked={
                    this.state.selectedArtists.indexOf(artist.username) > -1
                  }
                />
                <ListItemText primary={artist.username} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

ArtistList.propTypes = {
  updateSelectedArtists: PropTypes.func,
  followings: PropTypes.array
};

export default withStyles(styles)(ArtistList);
