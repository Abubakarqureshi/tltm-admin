import React from 'react';
import {Pagination} from '@themesberg/react-bootstrap';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';


const PaginationUser = ({ usersPerPage, totalTransactions, setCurrentPage,currentPage, list, totalPayments }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTransactions / usersPerPage); i++){
        pageNumbers.push(i);
    }
// console.log(pageNumbers.length)
  //   const paginate = (array, page_size, page_number) => {
  //     return array.slice((page_number - 1) * page_size, page_number * page_size)
  //   }

  //   const currentPageUsers = paginate(list, 10, 2)
  // console.log(currentPageUsers)


    // const paginatePage = (array, page_size, page_number) => {
    //   return array.slice((page_number-1) * page_size, page_number * page_size)
    // }

    // const currentPageUsers = paginatePage(list, 10, 2)

    // console.log(list);

    return (
        <nav>
          
          <ul className='pagination'>
          <Pagination.Prev onClick={() => currentPage>1 ? setCurrentPage(currentPage-1) : currentPage }>
                Prev
              </Pagination.Prev>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <a onClick={() =>setCurrentPage(number)}  className='page-link' style={currentPage == number? {background: 'black', color:'white'}:null}>
                  {number}
                </a>
              </li>
            ))}
            <Pagination.Next onClick={() => currentPage < pageNumbers.length ? setCurrentPage(currentPage+1) : currentPage}>
                Next
              </Pagination.Next>
          </ul>
        </nav>
      );
    };

export default PaginationUser;
