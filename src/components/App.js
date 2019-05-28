import React from "react";
import SearchBar from "./SearchBar";
import api from "../api/api";
import WeatherIcon from "./WeatherIcon";

// import api from '../api/api'
class App extends React.Component {
  state = { weatherStatus: null };

  onFormSubmit = term => {
    api
      .get(term)
      .then(result => {
        this.setState({ weatherStatus: result.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="ui container  ">
        <div style={{ paddingTop: "20px", paddingBottom: "10px" }}>
          <SearchBar onFormSubmit={this.onFormSubmit} />
        </div>
        <div className="ui divider" />
        <WeatherIcon weather={this.state.weatherStatus} />
      </div>
    );
  }
}
export default App;
