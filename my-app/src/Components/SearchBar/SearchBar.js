import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  render() {
    return (
      <div class="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button class="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
