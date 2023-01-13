import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
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
    />
     );
}
 
export default Pagination;