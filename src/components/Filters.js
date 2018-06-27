import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import ArtistList from './ArtistList';
import Duration from './Duration';

import filtersStyles from '../styles/filtersStyles';

const Filters = props => {
  const { classes } = props;
  const handleChange = action => event => {
    action(event.target.value);
  };
  return (
    <div className={classes.main}>
      <div className={classes.list}>
        <Typography variant="headline" color="textSecondary" gutterBottom>
          Filters
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subheading" gutterBottom>
          by Artist
        </Typography>
        <ArtistList
          followings={props.followingsList}
          cursor={props.cursor}
          setMultipleArtistsFilter={props.setMultipleArtistsFilter}
          getMyFollowings={props.getMyFollowings}
        />
        <Typography variant="subheading" gutterBottom>
          by Duration
        </Typography>
        <Duration setDurationFilter={props.setDurationFilter} />
        <Divider className={classes.divider} />
        <Typography variant="subheading" gutterBottom>
          Text Filters
        </Typography>
        <TextField
          placeholder="by Track Name"
          value={props.filters.byTrackName}
          onChange={handleChange(props.setTrackNameFilter)}
          margin="normal"
        />
        <TextField
          placeholder="by Genre"
          value={props.filters.byGenre}
          onChange={handleChange(props.setGenreFilter)}
          margin="normal"
        />
      </div>
      <a
        href="https://www.soundcloud.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://developers.soundcloud.com/assets/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png"
          alt="Powered by SoundCloud"
        />
      </a>
    </div>
  );
};

export default withStyles(filtersStyles)(Filters);
