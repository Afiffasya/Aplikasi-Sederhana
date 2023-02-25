import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get(`http://159.223.57.121:8090/barang/find-all?page=${currentPage}`)
      .then(response => {
        setTotalPages(response.data.totalPages);
      })
      .catch(error => {
        console.log(error);
      });
  }, [currentPage]);

  function handlePrevPage() {
    setCurrentPage(prevPage => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={handlePrevPage}>Prev</button>
      <p>{`Page ${currentPage} of ${totalPages}`}</p>
      <button disabled={currentPage === totalPages} onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Pagination;
