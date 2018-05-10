import React from 'react';
import PropTypes from 'prop-types';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ArtistListItem from '../ArtistListItem';

const ArtistList = props => {
  return (
    <div>
      {props.followings.length > 0 && (
        <List selectable>
          <ListSubHeader caption="Artists you follow" />
          {props.followings.map((artist, idx) => {
            return (
              <ArtistListItem
                artist={artist}
                updateSelectedArtists={props.updateSelectedArtists}
                key={idx}
              />
            );
          })}
        </List>
      )}
    </div>
  );
};

ArtistList.propTypes = {
  updateSelectedArtists: PropTypes.func,
  followings: PropTypes.array
};

export default ArtistList;
