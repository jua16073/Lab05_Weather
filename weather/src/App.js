import React, { Component } from 'react';
import './App.css';
import  WeatherApp from './Components/WeatherApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>
    );
  }
}

export default App;
