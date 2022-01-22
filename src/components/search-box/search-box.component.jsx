import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchText, handleSearchBoxChange } = this.props;
    return <input type="search" className="search" onChange={handleSearchBoxChange} value={searchText} placeholder='Search monsters' />;
  }
}

export default SearchBox;
