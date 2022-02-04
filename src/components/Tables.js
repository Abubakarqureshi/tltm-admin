
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faCheck,faDownload, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTicketAlt, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar,Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import { pageVisits, pageTraffic, pageRanking } from "../data/tables";
import transactions from "../data/transactions";
import commands from "../data/commands";
import legalFormsList from "../data/legalFormsList";
import PaginationUser from "../components/Pagination";
import moment from "moment";










const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>${returnValue}</td>
        <td>
          <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Page visits</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">See all</Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Page name</th>
            <th scope="col">Page Views</th>
            <th scope="col">Page Value</th>
            <th scope="col">Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const { id, source, sourceIcon, sourceIconColor, sourceType, category, rank, trafficShare, change } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">{id}</Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon icon={sourceIcon} className={`icon icon-xs text-${sourceIconColor} w-30`} />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar variant="primary" className="progress-lg mb-0" now={trafficShare} min={0} max={100} />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map(pt => <TableRow key={`page-traffic-${pt.id}`} {...pt} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const { country, countryImage, overallRank, overallRankChange, travelRank, travelRankChange, widgetsRank, widgetsRankChange } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image src={countryImage} className="image-small rounded-circle me-2" />
            <div><span className="h6">{country}</span></div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">
          {overallRank ? overallRank : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">
          {travelRank ? travelRank : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">
          {widgetsRank ? widgetsRank : "-"}
        </td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map(r => <TableRow key={`ranking-${r.id}`} {...r} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const TransactionsTable = ({searchedTransaction,setCurrentPage,currentPage, usersPerPage, currentPageUsers}) => {
  const totalTransactions = searchedTransaction.length;

  const TableRow = (props) => {
    const {id, idx, subscription_plan, name, subscription_date, email, phone} = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {idx+1}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {email}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {phone}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {subscription_plan?subscription_plan.title:null}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {subscription_date?subscription_date:null}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Id</th>
              <th className="border-bottom">FullName</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Phone</th>
              <th className="border-bottom">Subscription</th>
              <th className="border-bottom">Subscription Expiry</th>            


            </tr>
          </thead>
          <tbody>
            {currentPageUsers.map(t => <TableRow key={`transaction-${t.id}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          {/* <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav> */}
          <PaginationUser
          usersPerPage={usersPerPage}
          totalTransactions = {totalTransactions}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          // paginate={paginate}
          />
          <small className="fw-bold">
            Showing <b>{usersPerPage}</b> out of <b>{totalTransactions}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: '5%' }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: '5%' }}>
          <ul className="ps-0">
            {usage.map(u => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: '50%' }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: '40%' }}>
          <pre><Card.Link href={link} target="_blank">Read More <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Card.Link></pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table responsive className="table-centered rounded" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: '5%' }}>Name</th>
              <th className="border-0" style={{ width: '5%' }}>Usage</th>
              <th className="border-0" style={{ width: '50%' }}>Description</th>
              <th className="border-0" style={{ width: '40%' }}>Extra</th>
            </tr>
          </thead>
          <tbody>
            {commands.map(c => <TableRow key={`command-${c.id}`} {...c} />)}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const LegalFormsTable = ({forms, handleEditClick}) => {
  const totalLegalForms = forms.length;

  const TableRow = (listItem) => {
    const { id, title, price } = listItem;

    // console.log(forms)
    

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            ${price}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {title}
          </span>
        </td>
        <td  >
          <span className="icon-dark" style={{cursor : 'pointer'}} onClick={()=>handleEditClick(listItem)} >
          <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit 
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">id</th>
              <th className="border-bottom">Price</th>
              <th className="border-bottom">Document Title</th>
              <th className="border-bottom">Actions</th>


              
            </tr>
          </thead>
          <tbody>
            {forms.map(lf => <TableRow key={`legalFormsList-${lf.id}`} {...lf} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <small className="fw-bold">
            Showing <b>{totalLegalForms}</b> out of <b>{totalLegalForms}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const SubscriptionTable = ({handleRemove,handleView,subscription, handleEditFormChange, handleEditFormSubmit, handleEditClick, list}) => {
  const TableRow = ({listItem}) => {
    const { id, subscriptionType,title,membership_cost, fullName,created_at, Amount} = listItem;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {title}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            ${membership_cost}
          </span>
        </td>
        <td>
          <span className="fw-normal editSubscription" onClick={()=>handleEditClick(listItem)} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={faEdit} className="me-2" /> Update Subscription 
          </span>
        </td>
      </tr>
    );
  };

  return (
    <form onSubmit={handleEditFormSubmit} >
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Id</th>
              <th className="border-bottom">Subscription</th>
              <th className="border-bottom">Amount</th>
              <th className="border-bottom">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscription ? subscription.map(listItem => <TableRow key={`transaction-${listItem.id}`}  listItem={listItem} />): null}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <small className="fw-bold">
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
    </form>
  );
};

export const RefundsTable = ({refunds, handleDeclineClick, handleAccept, setStatus, status}) => {
  const totalRefunds = refunds.length;

  const TableRow = (refundItem) => {
    const { id, user_id, user, status, reason, amount} = refundItem;
    // console.log(user)
    return (
      <tr>
        <td>
          <span className="fw-normal">
            {id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {user.name + " " + user.last_name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            ${amount}
          </span>
        </td>
        <td>
          <span className="fw-normal" >
            {status}
          </span>
        </td>
        {status == 'pending' ? 
        null :
        <td>
        <span className="fw-normal">
          {reason}
        </span>
      </td>}
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleAccept()}>
                <FontAwesomeIcon icon={faCheck}  className="me-2" /> Accept
              </Dropdown.Item>
              <Dropdown.Item className="text-danger" onClick={() => handleDeclineClick(refundItem)} >
                <FontAwesomeIcon icon={faTimes} className="me-2" /> Decline
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          {status == 'pending' ?
          <thead>
          <tr>
            <th className="border-bottom">Id</th>
            <th className="border-bottom">UserName</th>
            <th className="border-bottom">Amount</th>
            <th className="border-bottom">Status</th>
            <th className="border-bottom">Action</th>
          </tr>
        </thead> : 
          <thead>
          <tr>
            <th className="border-bottom">Id</th>
            <th className="border-bottom">User Id</th>
            <th className="border-bottom">Amount</th>
            <th className="border-bottom">Status</th>
            <th className="border-bottom">Remarks</th>
            <th className="border-bottom">Action</th>
          </tr>
        </thead> }
          <tbody>
            {refunds.filter(el => (el.status == status)).map(t => <TableRow key={`transaction-${t.id}`} {...t}/>)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalRefunds}</b> out of <b>{totalRefunds}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const CompleteOrdersTable = ({indexedList}) => {
  const totalCompleteOrders = indexedList.length;

  const TableRow = (props) => {
    const { idx, subscriptonType, user_detail ,payment_date, status, title } = props;

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {idx+1}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">
            {/* {JSON.stringify(user_detail)}{" "} */}
            {user_detail !== null ? user_detail.name + ' ' + user_detail.last_name : null}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {title}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {status}
          </span>
        </td>
        <td>
          <span className="fw-normal">
          {moment(payment_date).format('MMMM Do, YYYY')}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Id</th>
              <th className="border-bottom">FullName</th>
              <th className="border-bottom">Title of Document</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Dated</th>

            </tr>
          </thead>
          <tbody>
            {indexedList.map(t => <TableRow key={`transaction-${t.idx}`}  {...t} />)}
          </tbody>

        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalCompleteOrders}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export const ReceivedPaymentTable = ({searchedPayments, indexedList}) => {
  const totalPayments = searchedPayments.length;

  const TableRow = (props) => {
    const { transaction_id, idx, fullName, card_id, created_at,first_name, amount, status , detail} = props;

    return (
      <tr>
        <td>
          <span className="fw-normal">
            {idx}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {transaction_id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {detail.first_name}{" "}
            {detail.last_name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {card_id}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {status}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            ${amount}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {moment(created_at).format('MMMM Do, YYYY')}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
            <th className="border-bottom">id</th>            
              <th className="border-bottom">Transaction Id</th>
              <th className="border-bottom">FullName</th>
              <th className="border-bottom">Card Id</th>
              <th className="border-bottom">Status</th>
              <th className="border-bottom">Amount</th>
              <th className="border-bottom">Date</th>            

            </tr>
          </thead>
          <tbody>
            {indexedList.map(t => <TableRow key={`transaction-${t.idx}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          {/* <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav> */}
          <PaginationUser
          totalPayments = {totalPayments} />
          <small className="fw-bold">
            Showing <b>{totalPayments}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};


//Actions dropdown here...

{/* <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td> */}
