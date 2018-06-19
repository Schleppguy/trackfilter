import React from 'react';
import FilterByInput from './FilterByInput';
import { Input } from 'react-materialize';

const Filters = props => {
  return (
    <div style={{ flex: 1, padding: '1.8rem', marginTop: '2em' }}>
      <h3>Filters</h3>
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
      <Input
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
      </Input>
    </div>
  );
};

export default Filters;
