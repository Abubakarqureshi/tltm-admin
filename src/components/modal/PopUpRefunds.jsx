import { Form } from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ editstatus, setEditStatus, getRefunds }) => {
const [status , setStatus]=useState(editstatus);

console.log(status)

const handleChange =(e) => {
  setStatus({...status, [e.target.name]: e.target.value})
  
}

const handleSubmit = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
  
  var formdata = new FormData();
  formdata.append("reason", status.reason);
  formdata.append("status", "canceled");
  
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
      setTimeout(() => {
        getRefunds()
      }, 500),
      setEditStatus(false)
      )
    .catch(error => console.log('error', error));
}

  return (
    <Form>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEditStatus(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Are You Sure You Want to Reject this Approval Request?</h2>
        </div>
        <div className="body">
          <label className="align-body">
          <label className="align-items"> Reason: 
        <input type='text' name={'reason'} onChange={handleChange} value={status.reason} />
        </label><br/>
        </label>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setEditStatus(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
          onClick={() => {
            handleSubmit();
          }}
          type='button'
          >Decline</button>
        </div>
      </div>
    </div>
    </Form>
  );
}
export default Modal;



/*
import { Form } from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import "./Modal.scss";


const Modal = ({ editstatus, setEditStatus }) => {
  const [status , setStatus]=useState(editstatus);
  const [reason , setReason]=useState('');

console.log(status)

const handleChange =(e) => {
  setReason(e.target.value)
  // const value = e.target.value;
  
}

const handleSubmit = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
  
  var formdata = new Array();
  // formdata.append["reason"] = status.reason;
  // formdata["status"] = status.status;

  // formdata.append("membership_description", status.membership_description);
  // formdata.append("title", status.title);
  
  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: {status: 'canceledd'},
  //   redirect: 'follow'
  // };
  
  fetch(`http://tlts-back.maqware.com/api/admin/change_refund_status/${status.id}`, { 
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({status: 'canceled'}),
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    setEditStatus(null);
}

  return (
    <Form>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEditStatus(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Are You Sure You Want to Reject this Approval Request?</h2>
        </div>
        <div className="body">
          <label className="align-body">
          <label className="align-items"> Reason: 
        <input type='text' name={'reason'} onChange={handleChange} value={reason} />
        </label><br/>
        {/* <label className="align-items"> Amount:
        <input type='text' name={'membership_cost'} onChange={handleChange} value={status.membership_cost}/>
        
        </label><br/>
        <label className="align-items"> Membership Description:
        <input type='text' name={'membership_description'}  onChange={handleChange} value={status.membership_description}/>
        
        </label><br/> 
        </label>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setEditStatus(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          {/* // call update subscription api here on onSubmit function 
          <button
          onClick={() => {
            handleSubmit();
          }}
          type='button'
          >Decline</button>
        </div>
      </div>
    </div>
    </Form>
  );
}
export default Modal;
*/