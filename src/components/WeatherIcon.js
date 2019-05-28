//this compomemt will show the corrent weather condition and
//it will show some details

import React from "react";

const WeatherIcon = props => {
  if (props.weather) {
    const { weather } = props;
    return (
      <div>
        <div className="ui grid centered">
          <img
            src={props.weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
        </div>

        <div className="ui grid centered card">
          <div className="ui content">
            <p>Tempreture: {weather.current.temp_f}F</p>
            <p>Condition: {weather.current.condition.text}</p>
            <p>Localtime: {weather.location.localtime}</p>
            <p>Wind Speed: {weather.current.wind_mph}mph</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ui floating message">
      Please type the city/coutry or zip code in the box above to show the
      current weather condition.
      <br />
      Note: if you see no results please make sure to type the correct name of
      the city/country or zip code.
    </div>
  );
};

export default WeatherIcon;
