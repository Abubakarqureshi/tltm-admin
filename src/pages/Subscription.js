import React, { useEffect, useState } from "react";
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

import { SubscriptionTable, TransactionsTable } from "../components/Tables";
import Modal from "../components/modal/PopUpSubscription";
import { fetchDbGet } from "../backend/backend";
// import $ from 'jquery';

export default () => {

  const token = localStorage.getItem('token')
  const [list, setList] = useState([]);
  const [editFormData, setEditFormData] = useState(null);

  const getSubscriptions = () => {
    fetchDbGet('subscriptions', token).then((result) =>{
      console.log(result)
      setList(result.subscriptions)
    })
  }
  useEffect(() => {
    getSubscriptions()
  }, []);

  console.log(list);

  const handleEditClick = (listItem) => {
    setEditFormData(listItem);
    // $('#updateSubscriptionModal').modal('show');
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Subscription List</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>

      <SubscriptionTable
        subscription={list}
        handleEditClick={handleEditClick}
      />
      {editFormData ? (
        <Modal editFormData={editFormData} setEditFormData={setEditFormData} getSubscriptions={getSubscriptions}/>
      ) : null}
    </>
  );
};
