import './pagination.styles.css';

function Pagination({ currentPage, totalPages, handlePageChange }) {
  return (
    <ul className="pagination-container">
      {currentPage > 1 && (
        <li className="pagination-item" onClick={() => handlePageChange(currentPage - 1)}>
          <div className="arrow left" />
        </li>
      )}

      {totalPages > currentPage && (
        <li className="pagination-item" onClick={() => handlePageChange(currentPage + 1)}>
          <div className="arrow right" />
        </li>
      )}
    </ul>
  );
}
export default Pagination;
