import { Form } from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import "./Modal.scss";


const Modal = ({ editFormData, setEditFormData }) => {
const [plan , setplan]=useState(editFormData);

console.log(plan)

const handleChange =(e) => {
  setplan({...plan, [e.target.name]: e.target.value})
  // const value = e.target.value;
  
}

const handleSubmit = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);
  
  var formdata = new FormData();
  formdata.append("membership_cost", plan.membership_cost);
  formdata.append("membership_description", plan.membership_description);
  formdata.append("title", plan.title);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(`http://tlts-back.maqware.com/api/admin/update_subscription/${plan.id}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


  return (
    <Form>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEditFormData(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Are You Sure You Want to Edit the plan of plan?</h2>
        </div>
        <div className="body">
          <label className="align-body">
          <label className="align-items"> Subscription: 
        <input type='text' name={'title'} onChange={handleChange} value={plan.title} />
        </label><br/>
        <label className="align-items"> Amount:
        <input type='text' name={'membership_cost'}   onChange={handleChange} value={plan.membership_cost}/>
        
        </label><br/>
        <label className="align-items"> Membership Description:
        <input type='text' name={'membership_description'}  onChange={handleChange} value={plan.membership_description}/>
        
        </label><br/>
        </label>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setEditFormData(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          {/* // call update subscription api here on onSubmit function */}
          <button
          onClick={() => {
            handleSubmit();
          }}
          type='button'
          >Update</button>
        </div>
      </div>
    </div>
    </Form>
  );
}


export default Modal;


// const confirm = window.confirm("Are you sure you want to edit?")
//     if(confirm){
//       setEditFormData(listItem)