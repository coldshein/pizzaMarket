import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({onChangePage, currentPage}) => {
    return ( 
        <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={2}
        forcePage={currentPage - 1}
        pageCount={4}
        renderOnZeroPageCount={null}
    />
     );
}
 
export default Pagination;