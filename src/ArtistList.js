import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ArtistListItem from './ArtistListItem';

class ArtistList extends Component {

  render() {
    return (
      <div>
        {this.props.followings.length > 0 && 
          <List selectable >
            <ListSubHeader caption='Artists you follow' />
            {this.props.followings.map((artist, idx) => {
              return <ArtistListItem 
                artist={artist}
                updateSelectedArtists={this.props.updateSelectedArtists}
                key={idx}
              />
            })}
          </List>
        }
      </div>
    );
  }
}

export default ArtistList;
