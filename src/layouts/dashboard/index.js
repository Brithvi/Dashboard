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

// @mui material components
import React, { useEffect } from "react";
import Axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
// import Divider from "@mui/material/Divider";

// Data

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import MDDatatable from "layouts/tables/data/getTableData";
// import LicenseTable from "layouts/tables/data/defaultLicenseTable";
// import getEntity from "../../examples/Navbars/DashboardNavbar";
// import LicenseTable from "layouts/tables/data/finalTry";
// import MatDataTable from "layouts/tables/data/axiosNew"
// import { secondsInDay } from "date-fns";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Dashboard() {
  // const authTableData = authorsTableData();
  // columns ||= [];
  let latestRequetUrl;
  let totalLicenseAvailableDesc;
  let totalLicenseAssignedDesc;
  let totalFreeDesc;
  let totalAverageDesc;
  let totalMaxDesc;
  let totalLicenseAvailableDescValue;
  let totalLicenseAssignedDescValue;
  let totalFreeDescValue;
  let totalAverageDescValue;
  let totalMaxDescValue;
  const [region, setregion] = React.useState("US");
  const [SelectectedRgion, setSelectectedRgion] = React.useState("");
  const [entityPass, setEntity] = React.useState("US");
  const [headData, setheadData] = React.useState(0);
  const [totalLicenseAvailable, setTotalLicenseAvailable] = React.useState(0);
  const [totalLicenseAssigned, setTotalLicenseAssigned] = React.useState(0);
  const [totalFree, setTotalFree] = React.useState(0);
  const [totalAverage, setTotalAverage] = React.useState(0);
  const [totalMax, setTotalMax] = React.useState(0);
  const [totalLicenseAvailablePrev, setTotalLicenseAvailablePrev] = React.useState(0);
  const [totalLicenseAssignedPrev, setTotalLicenseAssignedPrev] = React.useState(0);
  const [totalFreePrev, setTotalFreePrev] = React.useState(0);
  const [totalAveragePrev, setTotalAveragePrev] = React.useState(0);
  const [totalMaxPrev, setTotalMaxPrev] = React.useState(0);
  const [monthYear, setMonthYear] = React.useState("");
  // const head = "";
  if (headData === 0) {
    useEffect(async () => {
      latestRequetUrl = `${process.env.REACT_APP_BASEURL}/headboard/latest/${entityPass}`;
      await Axios.get(latestRequetUrl).then((responseLatestHeadboard) => {
        // console.log(responseLatestHeadboard.data);
        if (typeof responseLatestHeadboard.data[0] !== "undefined") {
          setMonthYear(responseLatestHeadboard.data[0].month_year);
          setTotalLicenseAvailable(responseLatestHeadboard.data[0].total_license_available);
          setTotalLicenseAssigned(responseLatestHeadboard.data[0].total_license_assigned);
          setTotalFree(responseLatestHeadboard.data[0].total_free);
          setTotalAverage(responseLatestHeadboard.data[0].total_average);
          setTotalMax(responseLatestHeadboard.data[0].total_max);
          // head = responseLatestHeadboard.data[0].total_license_available;
          // console.log(responseLatestHeadboard.data[1]);
          setTotalLicenseAvailablePrev(responseLatestHeadboard.data[1].total_license_available);
          setTotalLicenseAssignedPrev(responseLatestHeadboard.data[1].total_license_assigned);
          setTotalFreePrev(responseLatestHeadboard.data[1].total_free);
          setTotalAveragePrev(responseLatestHeadboard.data[1].total_average);
          setTotalMaxPrev(responseLatestHeadboard.data[1].total_max);
        }
      });
    }, [headData, entityPass, monthYear]);
  } else {
    useEffect(async () => {
      // console.log(headData[1]);
      setMonthYear(headData[0].month_year);
      setTotalLicenseAvailable(headData[0].total_license_available);
      setTotalLicenseAssigned(headData[0].total_license_assigned);
      setTotalFree(headData[0].total_free);
      setTotalAverage(headData[0].total_average);
      setTotalMax(headData[0].total_max);
      setTotalLicenseAvailablePrev(headData[1].total_license_available);
      setTotalLicenseAssignedPrev(headData[1].total_license_assigned);
      setTotalFreePrev(headData[1].total_free);
      setTotalAveragePrev(headData[1].total_average);
      setTotalMaxPrev(headData[1].total_max);
    }, [headData, entityPass, monthYear]);
  }
  // console.log("dashboard", entityPass, monthYear);
  // const { columns, rows } = LicenseTable(entityPass);
  if (totalLicenseAvailable === totalLicenseAvailablePrev) {
    totalLicenseAvailableDescValue = 0;
    totalLicenseAvailableDesc = "change than last month";
  } else if (totalLicenseAvailable > totalLicenseAvailablePrev) {
    const increasedValue = totalLicenseAvailable - totalLicenseAvailablePrev;
    totalLicenseAvailableDescValue = `+${increasedValue}`;
    totalLicenseAvailableDesc = ` than last month`;
  } else if (totalLicenseAvailable < totalLicenseAvailablePrev) {
    const increasedValue = totalLicenseAvailablePrev - totalLicenseAvailable;
    totalLicenseAvailableDescValue = `-${increasedValue}`;
    totalLicenseAvailableDesc = ` than last month`;
  }
  if (totalLicenseAssigned === totalLicenseAssignedPrev) {
    totalLicenseAssignedDescValue = 0;
    totalLicenseAssignedDesc = " change than last month";
  } else if (totalLicenseAssigned > totalLicenseAssignedPrev) {
    const increasedValue = totalLicenseAssigned - totalLicenseAssignedPrev;
    totalLicenseAssignedDescValue = `+${increasedValue}`;
    totalLicenseAssignedDesc = ` than last month`;
  } else if (totalLicenseAssigned < totalLicenseAssignedPrev) {
    const increasedValue = totalLicenseAssignedPrev - totalLicenseAssigned;
    totalLicenseAssignedDescValue = `-${increasedValue}`;
    totalLicenseAssignedDesc = ` than last month`;
  }
  if (totalFree === totalFreePrev) {
    totalFreeDescValue = 0;
    totalFreeDesc = " change than last month";
  } else if (totalFree > totalFreePrev) {
    const increasedValue = totalFree - totalFreePrev;
    totalFreeDescValue = `+${increasedValue}`;
    totalFreeDesc = ` than last month`;
  } else if (totalFree < totalFreePrev) {
    const increasedValue = totalFreePrev - totalFree;
    totalFreeDescValue = `-${increasedValue}`;
    totalFreeDesc = ` than last month`;
  }
  if (totalAverage === totalAveragePrev) {
    totalAverageDescValue = 0;
    totalAverageDesc = " change than last month";
  } else if (totalAverage > totalAveragePrev) {
    const increasedValue = totalAverage - totalAveragePrev;
    totalAverageDescValue = `+${increasedValue}`;
    totalAverageDesc = ` than last month`;
  } else if (totalAverage < totalAveragePrev) {
    const increasedValue = totalAveragePrev - totalAverage;
    totalAverageDescValue = `-${increasedValue}`;
    totalAverageDesc = ` than last month`;
  }
  if (totalMax === totalMaxPrev) {
    totalMaxDescValue = 0;
    totalMaxDesc = " change than last month";
  } else if (totalMax > totalMaxPrev) {
    const increasedValue = totalMax - totalMaxPrev;
    totalMaxDescValue = `+${increasedValue}`;
    totalMaxDesc = ` than last month`;
  } else if (totalMax < totalMaxPrev) {
    const increasedValue = totalMaxPrev - totalMax;
    totalMaxDescValue = `-${increasedValue}`;
    totalMaxDesc = ` than last month`;
  }
  return (
    <DashboardLayout>
      <DashboardNavbar
        headData={headData}
        entity={entityPass}
        monthYear={monthYear}
        setheadData={setheadData}
        setEntity={setEntity}
        region={region}
        setregion={setregion}
        SelectectedRgion={SelectectedRgion}
        setSelectectedRgion={setSelectectedRgion}
      />
      <MDBox py={1}>
        <Grid container spacing={2}>
          <Grid item xs={2} md={1} lg={2.7}>
            <MDBox mb={5}>
              <ComplexStatisticsCard
                color="primary"
                icon="note"
                title="Total Licenses Available"
                count={totalLicenseAvailable}
                percentage={{
                  color: "success",
                  amount: totalLicenseAvailableDescValue,
                  label: totalLicenseAvailableDesc,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="pix"
                title="Total License Assigned"
                count={totalLicenseAssigned}
                percentage={{
                  color: "success",
                  amount: totalLicenseAssignedDescValue,
                  label: totalLicenseAssignedDesc,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="circle"
                title="Total Free"
                count={totalFree}
                percentage={{
                  color: "success",
                  amount: totalFreeDescValue,
                  label: totalFreeDesc,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="book"
                title="Total Average"
                count={totalAverage}
                percentage={{
                  color: "success",
                  amount: totalAverageDescValue,
                  label: totalAverageDesc,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="pages"
                title="Total Max"
                count={totalMax}
                percentage={{
                  color: "success",
                  amount: totalMaxDescValue,
                  label: totalMaxDesc,
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={1} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Region Wise ERN Routing Licenses
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns, rows }}
                  canSearch
                  isSorted
                  entriesPerPage
                  showTotalEntries
                  noEndBorder
                /> */}
                <MDDatatable
                  entityPass={entityPass}
                  monthYear={monthYear}
                  region={SelectectedRgion}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
