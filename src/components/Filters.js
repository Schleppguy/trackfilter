import React from 'react';
import FilterByInput from './FilterByInput';
import ArtistList from './ArtistList';
import Duration from './Duration';

const Filters = props => {
  return (
    <div
      style={{
        flex: 1,
        padding: '1.8rem',
        marginTop: '2.5em'
      }}
    >
      <h3>Filters</h3>
      <ArtistList
        followings={props.followingsList}
        setMultipleArtistsFilter={props.setMultipleArtistsFilter}
      />
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
      <Duration />
    </div>
  );
};

export default Filters;
