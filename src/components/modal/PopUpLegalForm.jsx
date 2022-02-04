import { Form } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ editLegalForm, setEditLegalForm, getLegalForms }) => {
  const [legalForm, setlegalForm] = useState(editLegalForm);

  console.log(legalForm);

  const handleChange = (e) => {
    setlegalForm({ ...legalForm, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //     setlegalForm(false)
  // }, [])

  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    var formdata = new FormData();
    formdata.append("price", legalForm.price);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `http://tlts-back.maqware.com/api/admin/update_form/${legalForm.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => 
      console.log(result),
      setTimeout(() => {
        getLegalForms()
      }, 500),
      setEditLegalForm(false)
    )
      .catch((error) => console.log("error", error));
  };
  
  return (
    <Form>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setEditLegalForm(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h2>Are You Sure You Want to Edit the legalForm?</h2>
          </div>
          <div className="body">
            <label className="align-body">
              <label className="align-items">
                {" "}
                Subscription:
                <input
                  type="text"
                  name={"title"}
                  onChange={handleChange}
                  value={legalForm?legalForm.title: null}
                  disabled
                />
              </label>
              <br />
              <label className="align-items">
                {" "}
                Amount:
                <input
                  type="text"
                  name={"price"}
                  onChange={handleChange}
                  value={legalForm?legalForm.price : 0}
                />$
              </label>
              <br />
            </label>
          </div>
          <div className="footer">
          <button
              onClick={() => {
                handleSubmit();
              }}
              
              id="cancelBtn"
            >
              Update
            </button>
            <button
              onClick={() => {
                setEditLegalForm(false);
              }}
              type="button"
            >
              Cancel
            </button>
            {/* // call update subscription api here on onSubmit function */}
            
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Modal;
