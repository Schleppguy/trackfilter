import React from 'react';

import Typography from '@material-ui/core/Typography';
import withTheme from '@material-ui/core/styles/withTheme';
import TextField from '@material-ui/core/TextField';

import FilterByInput from './FilterByInput';
import ArtistList from './ArtistList';
import Duration from './Duration';

const Filters = props => {
  const handleChange = action => event => {
    action(event.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.8rem',
        marginTop: '2.5em',
        marginBottom: '2.5em',
        height: '85%',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant="headline" gutterBottom>
          Filters
        </Typography>
        <div style={{ marginBottom: '1em' }}>
          <ArtistList
            followings={props.followingsList}
            cursor={props.cursor}
            setMultipleArtistsFilter={props.setMultipleArtistsFilter}
            getMyFollowings={props.getMyFollowings}
          />
        </div>
        <Typography variant="subheading">by Track Name</Typography>
        <TextField
          // className={classes.textField}
          placeholder="Track Name"
          value={props.filters.byTrackName}
          onChange={handleChange(props.setTrackNameFilter)}
          margin="normal"
        />

        {/* <FilterByInput
          value={props.filters.byTrackName}
          action={props.setTrackNameFilter}
        /> */}
        <Typography variant="subheading">by Genre</Typography>
        <TextField
          // className={classes.textField}
          placeholder="Genre"
          value={props.filters.byGenre}
          onChange={handleChange(props.setGenreFilter)}
          margin="normal"
        />
        <Duration setDurationFilter={props.setDurationFilter} />
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

export default withTheme()(Filters);
