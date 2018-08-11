import React, { Component, Fragment } from 'react';
import Weather from '../Weather'


class WeatherApp extends Component {
  constructor (props){
    super(props);
    this.state = {
      lati: null,
      longi: null,
      location: "Buscando",
      temp: 0,
      vez: 0,
    } 
  }

  _getlocation(){
    const {
      vez
    } = this.state;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this._success.bind(this),this._failed)
    }
    else{
      console.log("halp");
    }
    this.setState({
      vez: vez+1,
    })

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
  }

  _failed(){
    console.log("failed Location");
  }

  set(result){
    this.setState({
      location: result,
    })  
    console.log(this.state.weather);
  }

  setTemp(result){
    this.setState({
      temp: result,
    })
    console.log(this.state.temp);
  }

  _getInfo(){
    const info = fetch('http://api.openweathermap.org/data/2.5/weather?lat='+this.state.lati+'&lon='+this.state.longi+'&appid=7711357f304510f520accc3b290a183b');
    info.then(resultado => resultado.json())
    .then(result => console.log(result))
    .then(result => this.set(result.name).bind(this))
    .catch(console.log("sad"));
  }
  
  render(){
    if (this.state.vez <= 1){
      this._getlocation();
      this._getInfo();
    }
    const {
      location,
    } = this.state;
    return(
      <Fragment>
        <h1>Weather App</h1>
        <h2> {location} </h2>
      </Fragment>
    )
  }
}

export default WeatherApp;