import React, { useEffect } from "react";
import Axios from "axios";
// import DataTable from "examples/Tables/DataTable";

// import styled from "styled-components";

function LicenseTable(entityPass) {
  // Here You Set A State To Tell The Component It Need To Wait
  //  Until The Result Is Fetched From The Api
  let tableSearchUrl;
  const [rows, setData] = React.useState([]);
  const [loadingData, setLoadingData] = React.useState(true);
  const columns = [
    { Header: "Region ID", accessor: "region_id", width: "1%", align: "left" },
    { Header: "Region Name", accessor: "opco_name", align: "left" },
    { Header: "Opco Type", accessor: "opco_type", align: "left" },
    { Header: "Session Route Limit", accessor: "RN_session_route_limit", align: "left" },
    { Header: "Avg Routes", accessor: "current_average_routes", align: "left" },
    { Header: "Max Routes", accessor: "current_max_routes", align: "left" },
    { Header: "Diff Average", accessor: "current_differ_average", align: "left" },
    { Header: "Diff Max", accessor: "current_differ_max", align: "left" },
  ];
  async function getData() {
    console.log("entityPass", entityPass);
    tableSearchUrl = `http://localhost:8080/table/${entityPass}_202207`;
    await Axios.get(tableSearchUrl).then((response) => {
      // Check If The Data Is Populated
      setData(response.data);
      setLoadingData(false);
      console.log(response.data);
      // You Tell It That You Had The Result
      // if (data.length > 0) {
      // }
    });
  }
  useEffect(() => {
    if (loadingData) {
      // If The Result Is Not Ready So You Make The Axios Call
      getData();
    }
    // const rows = [{"region_id":999,"opco_name":"Test","RN_session_route_limit":100}];
    // setData(rows);
  }, [entityPass]);
  return {
    columns,
    rows,
  };
}

export default LicenseTable;
