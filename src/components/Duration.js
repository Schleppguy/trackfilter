import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Typography } from '@material-ui/core';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Duration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vals: [0, 360]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(vals) {
    this.props.setDurationFilter(vals);
    this.setState({ vals });
  }

  render() {
    return (
      <div>
        <Range
          max={360}
          defaultValue={[0, 360]}
          onChange={this.handleChange}
          style={{ marginTop: '1em' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em'
          }}
        >
          <Typography variant="body2">> {this.state.vals[0]} mins</Typography>
          <Typography variant="body2">{`< ${
            this.state.vals[1]
          } mins`}</Typography>
        </div>
      </div>
    );
  }
}

export default Duration;
