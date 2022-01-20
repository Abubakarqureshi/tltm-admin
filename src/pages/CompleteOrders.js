import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { CompleteOrdersTable, TransactionsTable } from "../components/Tables";
import SearchItems from "../components/SearchItems";

export default () => {

  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer 636|w6OFiBh6OiC31geQKYAiniYZkcWmdXOZ4JY98HSg");
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IkZtazR1UkgrNHlqVU9HZXFkd2dQRmc9PSIsInZhbHVlIjoieWtQYVJqOFZQWE1CWS91Sm1EaW0zNmx4YzcyeGo0aUFReURoVlRFVE81UXoyNGVkbENINlhtWDFHN2w5bjBvMENmSnE4YllocVlSQ2d3dUJXcnJOOTNDclNQTXBiMXFtVGpQNkVrZkRSQUpiOUhURllES3o0WWdKc3FQZjROSDIiLCJtYWMiOiI0NzQ3MTVhMTQ4MGRhMzQyMjA2MmI2ODczNjBmMDkyMDdiYzY4YWQxMmYyYThiMjFmMjgzN2U3MjRkNmUxNzE1IiwidGFnIjoiIn0%3D; tltm_session=eyJpdiI6IlVtOUNDVWpWQWdrTzJLdmlUSmx4akE9PSIsInZhbHVlIjoiU1plQnkyOUcxb0RjR0xnR0dTaWRMK0NCVnFMRzhjdW5rRVlqQlhQU1gwYlF4aXB1SFZmMEF3SkdoZDA5WVNaSHQ5Tm5UaWJjWVFYTlZYVVZsdzUydzE3cEtRNExWQ1hoZDhQbkZXOHpVTGZMRy9xbjJOUlJhWjRRcDE3NCtqQ1MiLCJtYWMiOiI0NWVmMmJkNTU5MTZlNWJiYTFhNjFhZWM4MTc0MTFjOWE2OGRiYzk5MWZiNTE2YTIxOGYzN2ZiNjQ3MWVhZDEyIiwidGFnIjoiIn0%3D");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://tlts-back.maqware.com/api/admin/complete_orders", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
    if(result.status){
      return setList(result.data)
    }})
  .catch(error => console.log('error', error));
  }, [])

  const searchHandler = (searchValue) => {
    setSearchValue(searchValue)
    
  }

  
  const searchedList = list.filter(el=>el.user_id.toLowerCase().includes(searchValue.toLowerCase()))
  const indexedList = searchedList.map((el, idx) => ({...el, idx: idx}) )

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          
          <h4>Complete Orders</h4>
          
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

      <CompleteOrdersTable
      //  searchedOrders={searchedList}
       indexedList={indexedList}/>
    </>
  );
};
