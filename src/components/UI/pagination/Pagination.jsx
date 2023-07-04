import React from "react";

import './Pagination.scss'

const Pagination = ({handleNextPage, handlePreviousPage, currentPage, indexOfLastUser, customers}) => {
    return (
        <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastUser >= customers.length}
        >
          Next
        </button>
      </div>
    )
}

export default Pagination