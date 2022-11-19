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

import React, { useState, useEffect } from "react";
// react-router components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
// import MDButton from "components/MDButton";
import MDDropmarket from "components/DropDown/marketdrop";
import MDDropyear from "components/DropDown/yeardrop";
import MDDropmonth from "components/DropDown/monthdrop";
// import MDDropentity from "components/DropDown/entitydrop";
import MDDropregion from "components/DropDown/regiondrop";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
// import getHeadboard from "../../../layouts/dashboard/data/apiCall";
// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import MDTypography from "components/MDTypography";
import Alert from "@mui/material/Alert";
// import MDtoggleentity from "components/DropDown/entityToggle";
import ToggleButtons from "components/DropDown/toggle2";
// import dashboard from "../../../layouts/dashboard/index";
import Axios from "axios";

function DashboardNavbar({
  absolute,
  light,
  isMini,
  headData,
  setheadData,
  entityPass,
  setEntity,
  SelectectedRgion,
  setSelectectedRgion,
}) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  // const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  // let requestUrlHeadboard;
  let requestUrlTable;
  let defaultRequestUrlTable;
  let entityNew;
  let yearNew;
  let monthNew;
  let regionNew;
  let marketNew;
  let monthPrev;
  let tmpMonth;
  const UK = "UK";
  const handleCloseMenu = () => setOpenMenu(false);
  const [entity, setentity] = React.useState("US");
  // const [region, setregion] = React.useState("");
  const [market, setmarket] = React.useState("All");
  const [month, setMonth] = React.useState("");
  const [monthDisplay, setMonthDisplay] = React.useState("");
  const [monthYear, setmonthYear] = React.useState("");
  const [year, setYear] = React.useState("");
  const [isloading, setisloading] = React.useState(true);
  const [alertText, setAlertText] = React.useState(true);
  const [yearRequired, setyearRequired] = React.useState(false);
  const [monthRequired, setmonthRequired] = React.useState(false);
  const SearchDrop = async function (searchEntity, searchYear, searchMonth, prevMonth) {
    if (searchEntity !== "" && searchYear !== "" && searchMonth !== "") {
      setisloading(true);
      // requestUrlHeadboard = `http://localhost:8080/headboard/${entity}_${year}${modifiedMonth}`;
      requestUrlTable = `${process.env.REACT_APP_BASEURL}/headboard?search=${searchYear}${searchMonth}_${searchEntity}&previous=${searchYear}${prevMonth}_${searchEntity}`;
      // requestUrlRows = `http://localhost:8080/table/${searchEntity}_${searchYear}${searchMonth}`;
      await Axios.get(requestUrlTable).then((responseIdTable) => {
        // console.log(responseIdTable.data);
        setheadData(responseIdTable.data);
        setmonthYear(responseIdTable.data[0].month_year);
        setMonthDisplay(responseIdTable.data[0].month);
        setmonthRequired(false);
        setyearRequired(false);
      });
      console.log(headData);
    } else if (searchEntity === null) {
      setisloading(false);
      setAlertText("Mandatory fields can not be empty");
    } else if (searchYear !== "" && searchMonth === "") {
      setisloading(false);
      setyearRequired(true);
      setmonthRequired(true);
      setAlertText("Mandatory fields can not be empty");
    } else if (searchYear === "" && searchMonth !== "") {
      setisloading(false);
      setyearRequired(true);
      setmonthRequired(true);
      setAlertText("Mandatory fields can not be empty");
    } else {
      // console.log("NOT matched");
    }
  };
  const [modifiedMonth, setModifiedMonth] = React.useState("");
  const [modifiedMonthPrev, setModifiedMonthPrev] = React.useState("");
  // const head = "";
  const defaultSearch = async function (searchEntity) {
    if (monthDisplay === "") {
      defaultRequestUrlTable = `${process.env.REACT_APP_BASEURL}/headboard/latest/${searchEntity}`;
      await Axios.get(defaultRequestUrlTable).then((responseLatestHeadboardT) => {
        // console.log(responseLatestHeadboardT.data);
        if (typeof responseLatestHeadboardT.data[0] !== "undefined") {
          setmonthYear(responseLatestHeadboardT.data[0].month_year);
          setMonthDisplay(responseLatestHeadboardT.data[0].month);
        }
      });
    } else if (monthDisplay !== "") {
      defaultRequestUrlTable = `${process.env.REACT_APP_BASEURL}/headboard/latest/${searchEntity}`;
      await Axios.get(defaultRequestUrlTable).then((responseLatestHeadboardT) => {
        // console.log(responseLatestHeadboardT.data);
        if (typeof responseLatestHeadboardT.data[0] !== "undefined") {
          setmonthYear(responseLatestHeadboardT.data[0].month_year);
        }
      });
    }
  };

  useEffect(async () => {
    await defaultSearch(entity);
    setEntity(entity);
    console.log(entityPass);
  }, [entity]);

  const yearDisplay = monthYear.substr(0, 4);
  const enttiyDisplay = monthYear.substr(7, 2);
  // console.log(yearDisplay, enttiyDisplay, monthDisplay);

  // ..................................................................................
  const handleChangemonth = async (event) => {
    // console.log("Running Handle CHange MONTH");
    setMonth(event.target.value);
    // console.log(month);
    if (event.target.value < 10) {
      tmpMonth = event.target.value - 1;
      setModifiedMonthPrev(`0${tmpMonth}`);
      setModifiedMonth(`0${event.target.value}`);
      monthNew = `0${event.target.value}`;
      monthPrev = `0${tmpMonth}`;
    } else {
      setModifiedMonth(event.target.value);
      setModifiedMonthPrev(tmpMonth);
      monthNew = event.target.value;
      monthPrev = tmpMonth;
    }
    SearchDrop(entity, year, monthNew, monthPrev);
  };
  const [disableMarket, setDisableMarket] = React.useState(false);
  const [resetRegionarket, setrestRegionarket] = React.useState("");
  const handleChangeMarket = (event) => {
    setmarket(event.target.value);
    marketNew = event.target.value;
    console.log(marketNew);
  };

  const handleChangeentity = (event, newEntity) => {
    setentity(newEntity);
    setisloading(true);
    setrestRegionarket("");
    regionNew = "";
    entityNew = newEntity;
    if (entityNew === "UK") {
      setDisableMarket(true);
      setmarket(UK);
    } else {
      setDisableMarket(false);
      setmarket("All");
    }
    // console.log(entityNew);
    SearchDrop(entityNew, year, modifiedMonth, modifiedMonthPrev);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
    yearNew = event.target.value;
    setisloading(true);
    SearchDrop(entity, yearNew, modifiedMonth, modifiedMonthPrev);
    // console.log(entity, yearNew, modifiedMonth, modifiedMonthPrev);
  };
  const handleChangeRegion = (event) => {
    regionNew = event.target.value;
    setSelectectedRgion(event.target.value);
    setSelectectedRgion(regionNew);
    // console.log(regionNew);
  };
  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="white"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 3 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        <Grid item xs={2} md={10} lg={10} style={{ display: "flex", justifyContent: "flex-start" }}>
          <MDBox mb={2} color={light ? "white" : "inherit"} />
        </Grid>
        <Grid item xs={2} lg={10} style={{ display: "flex", justifyContent: "flex-end" }}>
          <MDBox mb={3} color={light ? "white" : "inherit"}>
            <MDDropmarket
              handleChangeMarket={handleChangeMarket}
              disableMarket={disableMarket}
              market={market}
              light={darkMode}
            />
          </MDBox>
        </Grid>
        <Grid item xs={2} md={2} lg={100} style={{ display: "fix", justifyContent: "flex-start" }}>
          <MDBox mb={3} color={light ? "white" : "inherit"}>
            <MDDropregion
              handleChangeRegion={handleChangeRegion}
              entityPass={entity}
              dropDownregion={SelectectedRgion}
              resetRegionarket={resetRegionarket}
              marketNew={market}
            />
          </MDBox>
        </Grid>
        <Grid item xs={2} md={1} lg={50} style={{ display: "flex", justifyContent: "flex-start" }}>
          <MDBox mb={3} color={light ? "white" : "inherit"}>
            <MDDropyear
              handleChangeYear={handleChangeYear}
              year={year}
              yearRequired={yearRequired}
            />
          </MDBox>
        </Grid>
        <Grid item xs={2} md={10} lg={99} style={{ display: "flex", justifyContent: "flex-start" }}>
          <MDBox mb={3} color={light ? "white" : "inherit"}>
            <MDDropmonth
              handleChangemonth={handleChangemonth}
              month={month}
              monthRequired={monthRequired}
            />
          </MDBox>
        </Grid>
        <Grid
          item
          xs={20}
          md={10}
          lg={10}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          {isMini ? null : (
            <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
              <MDBox color={light ? "white" : "inherit"}>
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={navbarMobileMenu}
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle} fontSize="medium">
                    {miniSidenav ? "menu_open" : "menu"}
                  </Icon>
                </IconButton>
                {renderMenu()}
              </MDBox>
              <MDBox color={light ? "white" : "inherit"}>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarMobileMenu}
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle} fontSize="medium">
                    {miniSidenav ? "menu_open" : "menu"}
                  </Icon>
                </IconButton>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarIconButton}
                  onClick={handleConfiguratorOpen}
                >
                  <Icon sx={iconsStyle}>|</Icon>
                </IconButton>
                {renderMenu()}
              </MDBox>
              <MDBox color={light ? "white" : "inherit"}>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarMobileMenu}
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle} fontSize="medium">
                    {miniSidenav ? "menu_open" : "menu"}
                  </Icon>
                </IconButton>
                <IconButton
                  size="large"
                  disableRipple
                  color="inherit"
                  sx={navbarIconButton}
                  onClick={handleConfiguratorOpen}
                >
                  <Icon sx={iconsStyle}>settings</Icon>
                </IconButton>
                {renderMenu()}
              </MDBox>
            </MDBox>
          )}
          <MDBox mb={0.5} color={light ? "white" : "inherit"}>
            <ToggleButtons
              light={darkMode}
              handleChangeentity={handleChangeentity}
              entity={entity}
            />
          </MDBox>
        </Grid>
      </Toolbar>
      <Divider />
      <Toolbar>
        <Grid style={{ display: "flex", justifyContent: "flex-start", height: "1%" }}>
          <MDBox mb={{ xs: 5, md: 0 }} color={light ? "white" : "inherit"}>
            {isloading ? (
              <div />
            ) : (
              <Alert variant="filled" severity="warning">
                {alertText}
              </Alert>
            )}
          </MDBox>
        </Grid>
      </Toolbar>
      <Toolbar>
        <MDBox mb={{ xs: 5, md: 0 }} color={darkMode ? "white" : "inherit"}>
          <MDTypography variant="h6" fontWeight="bold">
            Displaying information for the month of {monthDisplay} {yearDisplay} - {enttiyDisplay}
          </MDTypography>
        </MDBox>
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
