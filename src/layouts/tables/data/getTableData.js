/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import React, { useEffect } from "react";
import Axios from "axios";
import DataTable from "examples/Tables/DataTable";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

const MDDatatable = function loadData({ entityPass, monthYear, region }) {
  let tableSearchUrl;
  let monthYearF;
  const [rows, setData] = React.useState([]);
  // const [loadingData, setLoadingData] = React.useState(true);
  const columns = [
    { Header: "Region ID", accessor: "region_id", width: "10%", align: "center" },
    { Header: "Region Name", accessor: "opco_name", align: "left" },
    // { Header: "Opco Type", accessor: "opco_type", align: "left" },
    { Header: "Session Route Limit", accessor: "RN_session_route_limit", align: "center" },
    { Header: "Avg Routes", accessor: "current_average_routes", align: "center" },
    { Header: "Max Routes", accessor: "current_max_routes", align: "center" },
    { Header: "Diff Average", accessor: "current_differ_average", align: "center" },
    { Header: "Diff Max", accessor: "current_differ_max", align: "center" },
  ];
  async function getData() {
    // console.log("entityPass", entityPass, monthYear, region);
    if (monthYear === "" || monthYear === undefined) {
      // console.log("s1");
      tableSearchUrl = `${process.env.REACT_APP_BASEURL}/table/latest/${entityPass}`;
      await Axios.get(tableSearchUrl).then((response) => {
        // Check If The Data Is Populated
        setData(response.data);
        // setLoadingData(false);
        // console.log(response.data);
        // You Tell It That You Had The Result
        // if (data.length > 0) {
        // }
      });
    } else if ((monthYear !== "" || monthYear !== undefined) && region === "") {
      // console.log("s2");
      monthYearF = monthYear.substr(0, 6);
      tableSearchUrl = `${process.env.REACT_APP_BASEURL}/table/${entityPass}_${monthYearF}`;
      await Axios.get(tableSearchUrl).then((response) => {
        // Check If The Data Is Populated
        setData(response.data);
        // setLoadingData(false);
        // console.log(response.data);
        // You Tell It That You Had The Result
        // if (data.length > 0) {
        // }
      });
    } else if (region !== undefined || region !== "Initial") {
      // console.log("s3");
      monthYearF = monthYear.substr(0, 6);
      tableSearchUrl = `${process.env.REACT_APP_BASEURL}/table/region/by?id=${entityPass}_${monthYearF}&dd=${region}`;
      await Axios.get(tableSearchUrl).then((response) => {
        // Check If The Data Is Populated
        setData(response.data);
        // setLoadingData(false);
        // console.log(response.data);
        // You Tell It That You Had The Result
        // if (data.length > 0) {
        // }
      });
    }
  }
  // const [tableRegion, settableRegion] = React.useState([]);
  // console.log(entityPass, monthYearF);
  useEffect(async () => {
    getData();
  }, [entityPass, monthYear, region]);

  // const rows = [{ RegionId: "Test" }];
  // console.log(rows);
  // console.log(rows);

  return (
    <DataTable
      table={{ columns, rows }}
      canSearch
      isSorted
      entriesPerPage
      showTotalEntries
      noEndBorder
    />
  );
};
export default MDDatatable;
