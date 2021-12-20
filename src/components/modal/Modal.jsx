import { Form } from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import "./Modal.scss";


const Modal = ({ editFormData, setEditFormData }) => {
const [editRow , setEditRow]=useState(editFormData);

console.log(editRow)

const handleChange =(e) => {
  setEditRow({value: e.target.value});
  // const value = e.target.value;
  
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
          <h1>Are You Sure You Want to Edit?</h1>
        </div>
        <div className="body">
          <label>
          <label> Subscription: 
        <input type='text'  value={editFormData.subscriptionType} onChange={handleChange}/>
        </label><br/>
        <label> Amount:
        <input type='text'  value={editFormData.Amount} onChange={handleChange}/>
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
          <button>Continue</button>
        </div>
      </div>
    </div>
    </Form>
  );
}


export default Modal;