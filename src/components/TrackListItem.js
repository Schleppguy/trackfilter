import React from 'react';
import PlayLoad from '../containers/PlayLoad';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';

// TODO - Maybe move this to a formatting util when tracks are received from api
const formatArtwork = url => {
  const temp = url.split('-');
  return temp.slice(0, temp.length - 1).join('-') + '-t500x500.jpg';
};

const TrackListItem = ({ track }) => {
  const artwork = track.artwork_url ? track.artwork_url : track.user.avatar_url;

  return (
    <Card style={{ margin: '1em', width: '90%' }}>
      <CardTitle
        avatar={track.user.avatar_url}
        title={track.title}
        subtitle={track.user.username}
      />
      <div style={{ display: 'flex' }}>
        <img
          src={formatArtwork(artwork)}
          style={{ height: '12em', width: '12em' }}
          alt={`${track.user.username}: ${track.title}`}
        />
        <PlayLoad track={track} context='feed' />
      </div>
    </Card>
  );
};

export default TrackListItem;
