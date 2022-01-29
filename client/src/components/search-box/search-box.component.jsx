import './search-box.styles.css';

function SearchBox({ searchText, handleSearchBoxChange }) {
  return <input type="search" className="search-bar" onChange={handleSearchBoxChange} value={searchText} placeholder="Ex: John Doe" />;
}
export default SearchBox;
