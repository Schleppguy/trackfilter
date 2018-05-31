import React from 'react';
import FilterByInput from './FilterByInput';

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
    </div>
  );
};

export default Filters;
