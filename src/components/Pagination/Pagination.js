import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = (props) => {
  const {handlePageClick,pageCount,pageRangeDisplayed=5}=props;
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next>>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<<Previous"
        renderOnZeroPageCount={null}
        className="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName="active"
      />
    </div>
  )
}

export default Pagination