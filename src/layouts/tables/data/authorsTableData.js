// /* eslint-disable react/prop-types */
// /* eslint-disable react/function-component-definition */
// /**
// =========================================================
// * Material Dashboard 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // Material Dashboard 2 React components
// import React, { useEffect } from "react";
// import Axios from "axios";
// // import MDBox from "components/MDBox";
// // import MDTypography from "components/MDTypography";

// export default function data() {
//   const [tableData, setTableData] = React.useState([]);
//   // const [tableRegion, settableRegion] = React.useState([]);
//   useEffect(async () => {
//     await Axios.get("http://localhost:8081/table/latest").then((responseLatestTable) => {
//       console.log(responseLatestTable.data);
//       setTableData(responseLatestTable.data);
//       if (responseLatestTable.data) {
//         console.log(tableData);
//       }
//     });
//   }, []);

//   // console.log(tableData);

//   const columns = [
//     { Header: "Region ID", accessor: "RegionId", width: "1%", align: "left" },
//     { Header: "Region Name", accessor: "Session", align: "left" },
//     { Header: "Opco Type", accessor: "OPCO", align: "left" },
//     { Header: "Session Route Limit", accessor: "Average", align: "left" },
//     { Header: "Avg Routes", accessor: "Routes", align: "left" },
//     { Header: "Max Routes", accessor: "Max", align: "left" },
//     { Header: "Diff Average", accessor: "Diff", align: "left" },
//     { Header: "Diff Max", accessor: "DMax", align: "left" },
//   ];
//   // let rows;
//   // if (tableData) {
//   //   rows = React.useMemo(() => {
//   //     tableData.map((prop) => ({
//   //       RegionId: prop.region_id,
//   //       Session: prop.opco_name,
//   //     }));
//   //   }, [tableData]);
//   // }
//   // const rows = [{ RegionId: "Test" }];
//   // console.log(rows);
//   console.log(columns);
//   return {
//     columns,
//     tableData,
//   };
// }
