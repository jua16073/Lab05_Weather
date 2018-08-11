import React, { Component, Fragment } from 'react';
import Weather from '../Weather'


class WeatherApp extends Component {
  constructor (props){
    super(props);
    this.state = {
      weather: "halp",
      lati: null,
      longi: null,
    } 
  }

  _getlocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this._success.bind(this),this._failed)
    }
    else{
      console.log("halp");
    }
  }

  _success(Position){
    const {
      lati,
      longi
    } = this.state;
    let lat = Position.coords.latitude;
    let long = Position.coords.longitude;
    this.setState({
      lati: lat,
      longi: long,
    });
    console.log(this.state.lati, this.state.longi);
  }

  _failed(){
    console.log("failed Location");
  }

  _getInfo(){
    const info = fetch('http://history.openweathermap.org/data/2.5/history/city?lat={lati}&lon={longi}');
    info.then(resultado => resultado.json())
    .then(result => console.log(result))
    .catch(console.log("sad"));
  }
  
  render(){
    this._getlocation();
    this._getInfo();
    const {
      location,
      weather
    } = this.state;
    return(
      <Fragment>
        <h1>Weather App</h1>
        <h2>{location}</h2>
        <Weather 
          clima= {weather}/>
        <button onClick= {this._getlocation.bind(this)}>Start</button>
      </Fragment>
    )
  }
}

export default WeatherApp;