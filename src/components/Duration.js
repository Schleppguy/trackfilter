import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Duration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vals: [0, 120]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(vals) {
    this.setState({ vals });
  }

  render() {
    return (
      <div style={{ marginTop: '1em' }}>
        By Track Duration
        <Range
          min={0}
          max={120}
          defaultValue={[0, 120]}
          onChange={this.handleChange}
          style={{ marginTop: '1em' }}
        />
        <p>Greater than: {this.state.vals[0]} minutes</p>
        <p>Less than: {this.state.vals[1]} minutes</p>
      </div>
    );
  }
}

export default Duration;
