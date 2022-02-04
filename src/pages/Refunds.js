import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faFileArchive, faFilter, faHome, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { RefundsTable, TransactionsTable } from "../components/Tables";
import PopUpRefunds from '../components/modal/PopUpRefunds';
import { fetchDbGet } from "../backend/backend";
import swal from "sweetalert";

export default () => {
  const token = localStorage.getItem('token')
  const [refunds, setrefunds] = useState([]);
  const [editstatus, setEditStatus] = useState(null);
  const [status, setStatus] = useState('pending');
  const getRefunds = () => {
    fetchDbGet('refunds', token).then((response) => {
      console.log(response)
      setrefunds(response.refunds)
    } )
  }

  useEffect(() =>{
    getRefunds()
  }, [])

  const handleDeclineClick = (refundItem) => {
    setEditStatus(refundItem);
  }

  const handleAccept = () => {
    swal("Are you sure you want to Accept this Refund?", {
      buttons: ["Cancel!", "Yes"],
    })
    .then(handleAcceptclick)
  }


  

  const handleAcceptclick = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
    
    var formdata = new FormData();
    // formdata.append("reason", status.reason);
    formdata.append("status", "approved");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`http://tlts-back.maqware.com/api/admin/change_refund_status/${status.id}`, requestOptions)
      .then(response => response.json())
      .then(result => 
         console.log(result),
        //  setStatus('approved')
      ) 
      .catch(error => console.log('error', error));
  }


  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          
          <h4>Refunds</h4>
          
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
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
                  <FontAwesomeIcon icon={faList} />
                  
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                {/* <Dropdown.Item className="fw-bold text-dark" onClick={()=>setStatus("")}>Show</Dropdown.Item> */}
                <Dropdown.Item className="d-flex fw-bold" onClick={() => setStatus('pending')}>Pending 
                {status === 'pending'?<span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>:null}
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" onClick={() => handleAccept()}>Approved
                {status === 'approved'?<span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>:null}
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold" onClick={() => setStatus('canceled')}>Canceled
                {status === 'canceled'?<span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>:null}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <RefundsTable
      refunds={refunds}
      handleDeclineClick={handleDeclineClick}
      handleAccept={handleAccept}
      setStatus={setStatus}
      status={status} />
      {
        editstatus? 
        <PopUpRefunds 
        editstatus={editstatus}
        setEditStatus={setEditStatus}
        getRefunds = {getRefunds}
        />
        : null
        
      }

      
    </>
  );
};
