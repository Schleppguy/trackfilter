import React from 'react';
import { displayTime } from '../displayUtils';
import PlayLoad from '../containers/PlayLoad';
import Card from 'react-toolbox/lib/card/Card';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Chip from 'react-toolbox/lib/chip/Chip';
import Button from 'react-toolbox/lib/button/Button';
import moment from 'moment';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
    this.formatArtwork = this.formatArtwork.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  formatArtwork(url) {
    const temp = url.split('-');
    return temp.slice(0, temp.length - 1).join('-') + '-t500x500.jpg';
  }

  toggleDescription() {
    this.setState({ showDescription: !this.state.showDescription });
  }

  render() {
    const { track } = this.props;
    const artwork = track.artwork_url
      ? track.artwork_url
      : track.user.avatar_url;
    return (
      <Card style={{ marginTop: '0.5em', width: '90%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              margin: '0.5em'
            }}
          >
            <Avatar
              style={{ marginRight: '0.5em' }}
              title={track.user.username}
              image={track.user.avatar_url}
            />
            <p style={{ marginLeft: '0.5em', fontSize: 'small' }}>
              <strong>{track.user.username}</strong> posted this track{' '}
              {moment(Date.parse(track.created_at)).from(moment())}
            </p>
          </div>
          {track.genre && (
            <Chip style={{ margin: '1em', maxHeight: '2em' }}>
              <strong>{track.genre}</strong>
            </Chip>
          )}
        </div>
        <div style={{ display: 'flex', width: '100%' }}>
          <img
            src={this.formatArtwork(artwork)}
            style={{ height: '8em', width: '8em' }}
            alt={`${track.user.username}: ${track.title}`}
          />
          <div style={{ width: '5em', marginTop: '0.5em' }}>
            <PlayLoad track={track} context="feed" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '1em',
              marginRight: '1em'
            }}
          >
            <div style={{ fontSize: 'small' }}>
              <a
                href={track.user.permalink_url}
                target="_blank"
                rel="noopener"
                style={{ textDecoration: 'none', color: 'gray' }}
              >
                {track.user.username}
              </a>
            </div>
            <div style={{ marginTop: '0.3em', fontSize: 'medium' }}>
              <a
                href={track.permalink_url}
                target="_blank"
                rel="noopener"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <strong>{track.title}</strong>
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: '2em',
                alignItems: 'center'
              }}
            >
              <div>Duration: {displayTime(track.duration / 1000)}</div>
            </div>
          </div>
        </div>
        {this.state.showDescription && (
          <CardText>
            {track.description
              ? track.description
                  .split('\n')
                  .map((line, i) => <p key={i}>{line}</p>)
              : ''}
          </CardText>
        )}
        <CardActions>
          <Button
            icon={this.state.showDescription ? 'remove' : 'add'}
            label={
              this.state.showDescription
                ? 'Hide Description'
                : 'Show Description'
            }
            onClick={this.toggleDescription}
          />
        </CardActions>
      </Card>
    );
  }
}

export default TrackListItem;
