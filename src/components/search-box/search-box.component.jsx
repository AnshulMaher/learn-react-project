import { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchText, handleSearchBoxChange } = this.props;
    return <input type="search" name="searchBox" id="searchBox" onChange={handleSearchBoxChange} value={searchText} />;
  }
}

export default SearchBox;
