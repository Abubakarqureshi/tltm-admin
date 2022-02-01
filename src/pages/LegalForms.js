import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";

import { fetchDbGet } from "../backend/backend";
import { LegalFormsTable, TransactionsTable } from "../components/Tables";
import OurServices from "../components/OurServices/OurServices";
import legalFormsList from "../data/legalFormsList";
import PopUpLegalForm from "../components/modal/PopUpLegalForm";

export default () => {
  const token = localStorage.getItem('token')
  const [forms, setForms] = useState([]);
  const [editLegalForm, setEditLegalForm] = useState(null);

  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer 636|w6OFiBh6OiC31geQKYAiniYZkcWmdXOZ4JY98HSg"
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch("http://tlts-back.maqware.com/api/admin/legal_forms", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       if (result.status) {
  //         return setForms(result.legal_forms);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);

  useEffect (() =>{
    fetchDbGet('legal_forms', token).then((result) => {
      console.log(result);
      setForms(result.legal_forms)
    } )
  }, [])


  const handleEditClick = (listItem) => {
    setEditLegalForm(listItem);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Legal Forms List</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>

      <LegalFormsTable forms={forms} handleEditClick={handleEditClick} />
      {editLegalForm ? <PopUpLegalForm 
      editLegalForm={editLegalForm}
      setEditLegalForm={setEditLegalForm} /> : null}
    </>
  );
}
