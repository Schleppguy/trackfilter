import React from 'react';
import FilterByInput from './FilterByInput';
import ArtistList from './ArtistList';
import Duration from './Duration';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

const Filters = props => {
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
        <h3>Filters</h3>
        <div style={{ marginBottom: '1em' }}>
          <ArtistList
            followings={props.followingsList}
            cursor={props.cursor}
            setMultipleArtistsFilter={props.setMultipleArtistsFilter}
            getMyFollowings={props.getMyFollowings}
          />
          <ListDivider />
        </div>
        <FilterByInput
          value={props.filters.byTrackName}
          action={props.setTrackNameFilter}
          label="By Track Name"
        />
        {/* <FilterByInput
        value={props.filters.byArtistName}
        action={props.setArtistNameFilter}
        label="By Artist Name"
      /> */}
        <FilterByInput
          value={props.filters.byGenre}
          action={props.setGenreFilter}
          label="By Genre"
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

export default Filters;
