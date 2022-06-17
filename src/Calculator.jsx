import React from "react";
import TemperatureInput from "./TemperatureInput.jsx";
import BoilingVerdict from "./BoilingVerdict.jsx";

class Calculator extends React.Component {
  state = {
    scaleNames: {
      c: 'Celsius',
      f: 'Farenheit'
    },
    temperature: '',
    scale: 'c',
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      scale: 'c',
      temperature,
    });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({
      scale: 'f',
      temperature,
    });
  }

  toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
  tryConvert = (temperature, callback) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';

    const output = callback(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString(); 
  }


  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = 
      scale === 'f' 
        ? this.tryConvert(temperature, this.toCelsius) 
        : temperature;
    const fahrenheit = 
      scale === 'c' 
        ? this.tryConvert(temperature, this.toFahrenheit) 
        : temperature;

    return (
      <div>
        <TemperatureInput 
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    )
  } 
}

export default Calculator;
