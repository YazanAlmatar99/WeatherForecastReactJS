import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onChangeHandler = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className = 'ui centered  grid '>
        <form onSubmit={this.onFormSubmit}>
        <div className = 'ui massive icon input'>
          <input placeholder='City, Country, Zip Code...'
            type="text"
            value={this.state.term}
            onChange={this.onChangeHandler}
          />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
