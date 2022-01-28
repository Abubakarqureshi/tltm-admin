import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  AcquisitionWidget,
} from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import DashGraph from "../../components/Graphs/dashgraph";
import { contextType } from "react-copy-to-clipboard";

export default (indexedList) => {
  const [HomeData, sethomeData] = useState([]);
  console.log(indexedList);
  const closeOrders = indexedList.length;


  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    const token = localStorage.getItem('token')
    myHeaders.append(
      "Authorization", "Bearer"+ " " + token );
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IjNEaWlUVlgvRks1OVNjU0R1b09MT1E9PSIsInZhbHVlIjoiemphNkdHVElvajRvNndTRXEwMThZZWRtd2xxbWJwcUtkR1huS1pCdDU2eVZnamRhcmhqVVpIM0Y4aEtSa1FocUpweGlWaEFWeG5LVzdIeEo5WHUvZUZKSVNxbnhva0xOclZWdTA1ditEem9kdHNaM0JTdFlzd2gwdndFUEtFVWkiLCJtYWMiOiIwY2Y2NmFkNmI2NjgwZDM3Njc1MjhiMTNjMzBkZDBiNWNhNDc5YTk2NmNlMzU5NTliZmZmZDE0MWJlODU3YzUxIiwidGFnIjoiIn0%3D; tltm_session=eyJpdiI6IldnTFRQbnpLcVZPTWRrdEp6TUc0dnc9PSIsInZhbHVlIjoiN01XSDVZRXNsOENHdEhPNEsyUEhabzZiQyttU2RhVEdLUURZVDJWR09vS1JTblV0d0ZWbDFEdFgrem5JZ2cxVXFlT29QRmh5YXRDdGRYZDd3NmNYQTNUSkgzZlJ3WVgzWHpFbVBwS3NHRktHNGJSTlBBdnREL3dIL1hSTWdJNjQiLCJtYWMiOiJhYmZlYTVmNTJiZjNmN2E1OTE5ZjZlNmEzZWQ2YmY4ODRkNzkyNzY3YTM4MTExNWU3YjI4NjBmMjU4Zjc5ZjFiIiwidGFnIjoiIn0%3D"
    );
    myHeaders.append(
    "Content-Type", "application/json"
    )

    var requestOptions = {

      method: "GET",
      headers: myHeaders,
      redirect: "follow",

    };

    fetch("http://tlts-back.maqware.com/api/admin/dashboard", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          console.log(result);
          return sethomeData(result.data);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div>
        <br />
      </div>


      <Row className="justify-content-md-center ">
        <Col xs={12} className="mb-4 d-none d-sm-block bg-success-alt">
          <SalesValueWidget
            title="Gross Profit"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Register Users"
            title={HomeData.register_users}
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Revenue"
            title={HomeData.revenew}
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            dollar={true}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            category="Complete Orders"
            title={HomeData.single_payment_count}
            data={trafficShares}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <ProgressTrackWidget
                  HomeData = {HomeData} />
                </Col>

                {/* <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col> */}
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={HomeData.payment_count}
                    percentage={18.2}
                    data={totalOrders}
                    closeOreders={closeOrders}
                  />
                </Col>

                {/* <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col>

                <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
