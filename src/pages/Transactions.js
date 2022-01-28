import React, {useState, useEffect} from "react";
import { Multiselect } from 'multiselect-react-dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Pagination } from '@themesberg/react-bootstrap';

import { fetchDbGet, fetchDbPost } from "../backend/backend";
import { TransactionsTable } from "../components/Tables";
import SearchItems from "../components/SearchItems";


export default () => {

  const token = localStorage.getItem('token')
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {

    fetchDbGet('users', token).then((result) => {
      console.log(result) 
      setList(result.data)
    })
  
    
  }, [])

  const searchHandler = (searchValue) => {
    setSearchValue(searchValue)
  }
  const searchedList = list.filter(el=>el.name.toLowerCase().includes(searchValue.toLowerCase()))
  console.log(searchedList)
  let count = 1;
  const indexedList = searchedList.map((el, idx) =>  ({...el, idx: idx, count: count++}) )
console.log(indexedList)


  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }

  const currentPageUsers = paginate(indexedList, usersPerPage, currentPage)

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          
          <h4>Registered Users List</h4>
          
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={3}>
          <SearchItems
          term= {searchValue}
          searchKeyword = {searchHandler} />

          </Col>
          <Col xs={4} md={2} xl={2} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  {/* <FontAwesomeIcon icon={faCog} /> */}
                  <Button>Users per page</Button>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                {/* <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item> */}
                <Dropdown.Item className="d-flex fw-bold" onClick={() => setUsersPerPage(10) } >
                  10
                  {usersPerPage === 10 ? <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span> : null } 
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold d-flex" onClick={()=>setUsersPerPage(20)} >
                  20
                  {usersPerPage === 20 ? <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span> : null } 
                
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold d-flex" onClick={() => setUsersPerPage(30)} >
                  30
                  {usersPerPage === 30 ? <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span> : null } 

                  </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
      

      <TransactionsTable 
      setCurrentPage={setCurrentPage}
      searchedTransaction={searchedList}  
      usersPerPage={usersPerPage} 
      currentPageUsers={currentPageUsers}
      currentPage={currentPage}  />
       

    </>
  );
};
