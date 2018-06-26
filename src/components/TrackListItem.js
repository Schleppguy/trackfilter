import React from 'react';
import { displayTime } from '../displayUtils';
import PlayLoad from '../containers/PlayLoad';
import Button from 'react-toolbox/lib/button/Button';
import moment from 'moment';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 800,
    marginTop: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  actionButton: {
    height: 20,
    width: 20
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    height: 30,
    width: 30
  }
  // chip: {
  //   margin: theme.spacing.unit,
  //   maxWidth: 200
  // }
});

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
    const { track, classes } = this.props;
    const artwork = track.artwork_url
      ? track.artwork_url
      : track.user.avatar_url;
    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar src={track.user.avatar_url} alt={track.user.username} />
          }
          // action={
          //   track.genre && <Chip label={track.genre} className={classes.chip} />
          // }
          title={
            <a
              href={track.user.permalink_url}
              target="_blank"
              rel="noopener"
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="subheading" color="textSecondary">
                {track.user.username}
              </Typography>
            </a>
          }
          subheader={
            <Typography variant="caption">{`Posted ${moment(
              Date.parse(track.created_at)
            ).from(moment())}`}</Typography>
          }
        />

        <div style={{ display: 'flex', width: '100%' }}>
          <img
            src={this.formatArtwork(artwork)}
            style={{ height: '6em', width: '6em', marginLeft: '1em' }}
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
            <div>
              <a
                href={track.permalink_url}
                target="_blank"
                rel="noopener"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Typography variant="title">{track.title}</Typography>
              </a>
            </div>

            <Typography variant="body2" color="textSecondary">
              Genre: {track.genre ? track.genre : 'none'}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Duration: {displayTime(track.duration / 1000)}
            </Typography>
          </div>
        </div>
        <CardActions className={classes.actions}>
          <IconButton
            className={classnames(classes.expand, classes.actionButton, {
              [classes.expandOpen]: this.state.showDescription
            })}
            onClick={this.toggleDescription}
            aria-expanded={this.state.showDescription}
            aria-label="Show description"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.showDescription} timeout="auto" unmountOnExit>
          <CardContent>
            {track.description
              ? track.description
                  .split('\n')
                  .map((line, i) => <p key={i}>{line}</p>)
              : 'No description'}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(TrackListItem);
