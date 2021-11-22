import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { TransactionsTable } from "../components/Tables";
import SearchItems from "../components/SearchItems";
import transactions from "../data/transactions";


export default () => {

  const [list, setList] = useState(transactions);
  const [searchValue, setSearchValue] = useState("");
  // console.log(list)
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
  const searchedList = list.filter(el=>el.fullName.toLowerCase().includes(searchValue.toLowerCase()))
// console.log(searchedList)
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
            </InputGroup> */}
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <TransactionsTable searchedTransaction={searchedList} />
    </>
  );
};
