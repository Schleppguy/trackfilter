import React, { Component } from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';
import axios from 'axios';

class TrackListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iframe: '',
      loaded: false
    };
  }

  componentDidMount() {
    this.getIframe();
  }

  getIframe() {
    let url = process.env.REACT_APP_ENV === 'development' ?
      this.props.track.permalink_url :
      this.props.track.origin.permalink_url
    axios.get('https://soundcloud.com/oembed',
      {
        params: {
          url: url,
          format: 'json',
          maxheight: '166',
          maxwidth: '800'
        }
      }).then( response => {
        this.setState({iframe: response.data, loaded: true});

      }).catch( error => { console.log(error); });
  }

  render () {
    if (this.state.loaded) {
      return (<div dangerouslySetInnerHTML={{__html: this.state.iframe.html}} style={{marginBottom: '1em'}}></div>)
    } else {
      return (
        <div style={{clear: 'both', height: '200px'}}>
          <ProgressBar type="circular" mode="indeterminate" />
        </div>
      )
    }
  }
}

export default TrackListItem;
