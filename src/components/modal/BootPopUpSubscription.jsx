import { Form } from "@themesberg/react-bootstrap";
import React, { useState } from "react";


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
    {/* <div className="modalBackground">
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
          <button
          onClick={() => {
            handleSubmit();
          }}
          type='button'
          >Update</button>
        </div>
      </div>
    </div> */}

    <div className="modal fade" id="updateSubscriptionModal">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Update Subscription</h5>

                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
					<div className="form-group">
						<label> Subscription: </label>
						<input type="text" className="form-control" name={'title'} onChange={handleChange} value={plan.title} />
					</div>

					<div className="form-group">
						<label> Amount: </label>
						<input type="text" className="form-control" name={'membership_cost'} onChange={handleChange} value={plan.membership_cost} />
					</div>

					<div className="form-group">
						<label>  Membership Description: </label>
						<input type="text" className="form-control" name={'membership_description'} onChange={handleChange} value={plan.membership_description}/>
					</div>
				</div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => {handleSubmit();}}>Save changes</button>

                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
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