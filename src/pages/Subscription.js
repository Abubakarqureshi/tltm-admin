import React , {useState}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { SubscriptionTable, TransactionsTable } from "../components/Tables";
import transactions from "../data/transactions";
import Modal  from "../components/modal/Modal";

export default () => {

  const [list, setList] = useState(transactions);
  const [editFormData, setEditFormData] = useState(null);
  const [editSubsId, setEditSubsId] = useState(null);



  const handleEditClick = ( listItem) => {
    // event.preventDefault();
    const confirm = window.confirm("Are you sure you want to Edit?")
    if(confirm){
      setEditFormData(listItem)
      // console.log(listItem)

      // setEditSubsId(listItem.invoiceNumber);
      // console.log(listItem.invoiceNumber);
      // const formValues = {
      //   fullName: listItem.fullName,
      //   subscriptionType : listItem.subscriptionType,
      // }
      // setEditFormData(formValues);
      

    }

  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData }
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedSubs = {
      fullName : editFormData.fullName,
      subscriptionType : editFormData.subscriptionType
    }
    const newList = [...list]

    const index = list.findIndex((listItem) => listItem.invoiceNumber === editSubsId);
    
    newList[index] = editedSubs;
    setList(newList);
    setEditSubsId(null)
  }

  const handleRemove = (listItem) => {
    const newList = list.filter((ls) => ls.invoiceNumber !== listItem.invoiceNumber);
    console.log(newList)
    setList(newList);
  }

  // const handleEdit = (listItem) => {
  //   console.log(listItem);
  // }
  
  // const handleDeleteClick = (invoiceNumber) => {
  //   alert( invoiceNumber)
  //   // const newTransactions = [...transactions]
  //   // newTransactions.splice(invoiceNumber, 1)
  //   // setList(newTransactions);
  //   // console.log(setList)
  // }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          
          <h4>Subscription List</h4>
          
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
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

      <SubscriptionTable
        handleRemove={handleRemove} 
        list={list} 
        handleEditClick ={handleEditClick}
        />
{
  editFormData?
  <form style={{background:'red', position:"absolute", top:'0'}} onSubmit={(e)=>{
    e.preventDefault()
    // console.log(editFormData)
    setEditFormData(null)
  }}>
  {/* <label>
  <input type='text' value={editFormData.subscriptionType}/>
  <input type='text' value={editFormData.Amount}/>
  </label>

  <input type='submit' value='Submit'/> */}
  <Modal editFormData={editFormData} setEditFormData={setEditFormData} />
</form>
: null
}
    </>
  );
};
