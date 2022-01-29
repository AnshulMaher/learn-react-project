import './search-box.styles.css';

function SearchBox({ searchText, handleSearchBoxChange }) {
  return <input type="search" className="search" onChange={handleSearchBoxChange} value={searchText} placeholder="Search users" />;
}
export default SearchBox;
