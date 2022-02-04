import React, { useState, useEffect } from "react";

import { fetchDbGet } from "../backend/backend";
import { LegalFormsTable, TransactionsTable } from "../components/Tables";
import OurServices from "../components/OurServices/OurServices";
import legalFormsList from "../data/legalFormsList";
import PopUpLegalForm from "../components/modal/PopUpLegalForm";

export default () => {
  const token = localStorage.getItem('token')
  const [forms, setForms] = useState([]);
  const [editLegalForm, setEditLegalForm] = useState(null);

  const getLegalForms = () => {
    fetchDbGet('legal_forms', token).then((result) => {
      console.log(result);
      setForms(result.legal_forms)
    })
  }

  useEffect (() =>{
  getLegalForms()
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
      getLegalForms = {getLegalForms}
      setEditLegalForm={setEditLegalForm} /> : null}
    </>
  );
}
