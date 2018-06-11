import React from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';

// TODO - Maybe move this to a formatting util when tracks are received from api
const formatArtwork = url => {
  const temp = url.split('-');
  return temp.slice(0, temp.length - 1).join('-') + '-t500x500.jpg';
};

const TrackListItem = ({ track, volume, loadTrackToPlayer }) => {
  const artwork = track.artwork_url ? track.artwork_url : track.user.avatar_url;

  return (
    <Card style={{ margin: '1em', width: '90%' }}>
      <CardTitle
        avatar={track.user.avatar_url}
        title={track.title}
        subtitle={track.user.username}
      />
      <img
        src={formatArtwork(artwork)}
        style={{ height: '15em', width: '15em' }}
        alt={`${track.user.username}: ${track.title}`}
      />
      <button onClick={() => loadTrackToPlayer(track, volume)}>Load Track to Player</button>
    </Card>
  );
};

export default TrackListItem;
