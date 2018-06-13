import React from 'react';
import { displayTime } from '../displayUtils';
import PlayLoad from '../containers/PlayLoad';
import Card from 'react-toolbox/lib/card/Card';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Chip from 'react-toolbox/lib/chip/Chip';
import DescriptionModal from './DescriptionModal';
import moment from 'moment';

// TODO - Maybe move this to a formatting util when tracks are received from api
const formatArtwork = url => {
  const temp = url.split('-');
  return temp.slice(0, temp.length - 1).join('-') + '-t500x500.jpg';
};

const TrackListItem = ({ track }) => {
  const artwork = track.artwork_url ? track.artwork_url : track.user.avatar_url;

  return (
    <Card style={{ marginTop: '0.5em', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', margin: '0.5em' }}>
          <Avatar title={track.user.username} image={track.user.avatar_url} />
          <p style={{ marginLeft: '0.5em', fontSize: 'small' }}>
            <strong>{track.user.username}</strong> posted this track {moment(track.created_at).from(moment())}
          </p>
        </div>
        <Chip style={{ margin: '1em' }}><strong>{track.genre}</strong></Chip>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <img
          src={formatArtwork(artwork)}
          style={{ height: '8em', width: '8em' }}
          alt={`${track.user.username}: ${track.title}`}
        />
        <div style={{ width: '5em', marginTop: '0.5em' }}>
          <PlayLoad track={track} context='feed' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1em', marginRight: '1em' }}>
          <div style={{ fontSize: 'small' }}>{track.user.username}</div>
          <div style={{ marginTop: '0.3em', fontSize: 'medium' }}><strong>{track.title}</strong></div>
          <div style={{ display: 'flex', marginTop: '2em', alignItems: 'center' }}>
            <div>Duration: {displayTime(track.duration / 1000)}</div>
            <DescriptionModal track={track} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrackListItem;
