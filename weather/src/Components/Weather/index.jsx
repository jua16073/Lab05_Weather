import React from 'react';

const Weather = ({
  clima = "halp",
  location = "pls"
}) => (
  <div className = 'weather'>{
    <p>{clima}</p>
  }
  </div>
)

export default Weather;