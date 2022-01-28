import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { ReceivedPaymentTable, TransactionsTable } from "../components/Tables";
import SearchItems from "../components/SearchItems";
import transactions from "../data/transactions";

export default () => {

  const token = localStorage.getItem('token')
  const [list, setList] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [paymentsPerPage, setPaymentsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)



  console.log(list);
  const searchHandler = (searchValue) => {
    setSearchValue(searchValue)
  }


  useEffect(() => {
    var myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Authorization", "Bearer ");
    // myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjNEaWlUVlgvRks1OVNjU0R1b09MT1E9PSIsInZhbHVlIjoiemphNkdHVElvajRvNndTRXEwMThZZWRtd2xxbWJwcUtkR1huS1pCdDU2eVZnamRhcmhqVVpIM0Y4aEtSa1FocUpweGlWaEFWeG5LVzdIeEo5WHUvZUZKSVNxbnhva0xOclZWdTA1ditEem9kdHNaM0JTdFlzd2gwdndFUEtFVWkiLCJtYWMiOiIwY2Y2NmFkNmI2NjgwZDM3Njc1MjhiMTNjMzBkZDBiNWNhNDc5YTk2NmNlMzU5NTliZmZmZDE0MWJlODU3YzUxIiwidGFnIjoiIn0%3D; tltm_session=eyJpdiI6IldnTFRQbnpLcVZPTWRrdEp6TUc0dnc9PSIsInZhbHVlIjoiN01XSDVZRXNsOENHdEhPNEsyUEhabzZiQyttU2RhVEdLUURZVDJWR09vS1JTblV0d0ZWbDFEdFgrem5JZ2cxVXFlT29QRmh5YXRDdGRYZDd3NmNYQTNUSkgzZlJ3WVgzWHpFbVBwS3NHRktHNGJSTlBBdnREL3dIL1hSTWdJNjQiLCJtYWMiOiJhYmZlYTVmNTJiZjNmN2E1OTE5ZjZlNmEzZWQ2YmY4ODRkNzkyNzY3YTM4MTExNWU3YjI4NjBmMjU4Zjc5ZjFiIiwidGFnIjoiIn0%3D");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://tlts-back.maqware.com/api/admin/payments", {
      method: 'GET',
      headers:  {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin':"*",
        Authorization: 'Bearer '+ token
      }
    })
      .then(response => response.json())
      .then(result => {console.log(result)
      return setList(result.payments)})
      .catch(error => console.log('error', error));
    
  }, [])

  const searchedList = list ? list.filter(el=>el.transaction_id.toLowerCase().includes(searchValue.toLowerCase())) : []
  const indexedList = searchedList.map((el, idx) => ({...el, idx : idx+1}) )

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }

  const currentPageUsers = paginate(searchedList, paymentsPerPage, currentPage);


  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          
          <h4>Received Payments</h4>
          
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
                  {/* <FontAwesomeIcon icon={faCog} /> */}
                  <Button>Transactions per page</Button>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                {/* <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item> */}
                <Dropdown.Item className="d-flex fw-bold" 
                >
                10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold"
                >
                20</Dropdown.Item>
                <Dropdown.Item className="fw-bold"
                >
                30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <ReceivedPaymentTable
      searchedPayments = {searchedList}
      indexedList = {indexedList}
       />
    </>
  );
};
