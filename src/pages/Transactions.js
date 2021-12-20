import React, {useState, useEffect} from "react";
import { Multiselect } from 'multiselect-react-dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Pagination } from '@themesberg/react-bootstrap';

import { TransactionsTable } from "../components/Tables";
import SearchItems from "../components/SearchItems";
import transactions from "../data/transactions";
import { faContao } from "@fortawesome/free-brands-svg-icons";
import PaginationUser from "../components/Pagination";
import Calendar from "react-calendar";


export default () => {

  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  // const [options] = useState(transactions)
  useEffect(() => {
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 323|WcCXPruQFrE9R9B2g3KSMJhUfQ6nph9HkJS0cJvU");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://tlts-back.maqware.com/api/admin/users", requestOptions)
  
  .then(response => response.json())
  .then(result => {console.log(result) 
    return setList(result.data)})
  .catch(error => console.log('error', error));

    
  }, [])

    console.log(list)
  const searchHandler = (searchValue) => {
    setSearchValue(searchValue)
    // if (searchValue !== "") {
    //   const newTransactions = transactions.filter((transaction) => {
    //     return Object.values(transaction)
    //     .join("")
    //     .toLowerCase()
    //     .includes(searchValue.toLowerCase());
    //   });
    //   setList(newTransactions);
    // } else {
    //   setList(transactions);
    // }
  }
  const searchedList = list.filter(el=>el.email.toLowerCase().includes(searchValue.toLowerCase()))
  // Get current posts 
  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = list.slice(indexOfLastUser, indexOfFirstUser);

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }
  const currentPageUsers = paginate(searchedList, usersPerPage, currentPage)
  console.log(currentPageUsers)

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
          <Col xs={8} md={6} lg={3} xl={4}>
          <SearchItems
          term= {searchValue}
          searchKeyword = {searchHandler} />

            {/* <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>  */}
          </Col>
          <Col xs={4} md={2} xl={2} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  {/* <FontAwesomeIcon icon={faCog} /> */}
                  <Button>Per Page 10</Button>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold" onClick={() => setUsersPerPage(10) } >
                  10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" onClick={()=>setUsersPerPage(20)} >20</Dropdown.Item>
                <Dropdown.Item className="fw-bold" onClick={() => setUsersPerPage(30)} >30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>


           {/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Multiselect options={options} displayValue="subscriptionType" placeholder="Customised"/>
          </Col> */}
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
