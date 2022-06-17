import React from 'react';

class TemperatureInput extends React.Component {
  state = {
    scaleNames: {
      c: 'Celsius',
      f: 'Farenheit'
    }
  }

  handleChange = (event) => {
    this.props.onTemperatureChange(
      event.target.value
    );
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>
          Enter temperature in {this.state.scaleNames[scale]}:
        </legend>
        < input 
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;