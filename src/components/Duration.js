import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
      <div style={{ marginTop: '2em' }}>
        By Track Duration
        <Range
          max={360}
          defaultValue={[0, 360]}
          onChange={this.handleChange}
          style={{ marginTop: '1em' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>> {this.state.vals[0]} mins</p>
          <p>{`< ${this.state.vals[1]} mins`}</p>
        </div>
      </div>
    );
  }
}

export default Duration;
