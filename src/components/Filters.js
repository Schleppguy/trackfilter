import React from 'react';
import FilterByInput from './FilterByInput';
import ArtistList from './ArtistList';

const Filters = props => {
  return (
    <div
      style={{
        flex: 1,
        padding: '1.8rem',
        marginTop: '2.5em'
      }}
    >
      <h5>Filters</h5>
      <FilterByInput
        value={props.filters.byTrackName}
        action={props.setTrackNameFilter}
        label="By Track Name"
      />
      <FilterByInput
        value={props.filters.byArtistName}
        action={props.setArtistNameFilter}
        label="By Artist Name"
      />
      <FilterByInput
        value={props.filters.byGenre}
        action={props.setGenreFilter}
        label="By Genre"
      />
      <ArtistList
        followings={props.followingsList}
        setMultipleArtistsFilter={props.setMultipleArtistsFilter}
      />
      {/* <Input
        className="multiselect"
        type="select"
        multiple
        placeholder="Select Multiple Artists"
        onChange={e => console.log(e.target.value)}
      >
        {props.followingsList.map((item, idx) => (
          <option key={idx} value={item.username}>
            {item.username}
          </option>
        ))}
      </Input> */}
    </div>
  );
};

export default Filters;
