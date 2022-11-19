import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import MDTypography from "components/MDTypography";

const ToggleButton = styled(MuiToggleButton)(({ selectedcolor }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: selectedcolor,
  },
}));

const ToggleButtons = function ToggleButtons({ handleChangeentity, entity, light }) {
  return (
    <ToggleButtonGroup color="success" value={entity} exclusive onChange={handleChangeentity}>
      <ToggleButton
        style={{
          outlineColor: "#21d9b7",
          outlineWidth: "1.5px",
          outlineStyle: "solid",
          margin: "3px",
        }}
        selectedcolor="#49a3f1"
        value="US"
      >
        <MDTypography variant="h4" color={light ? "white" : "dark"}>
          US
        </MDTypography>
      </ToggleButton>
      <ToggleButton
        style={{
          outlineColor: "#21d9b7",
          outlineWidth: "1.5px",
          outlineStyle: "solid",
          margin: "3px",
        }}
        selectedcolor="#49a3f1"
        value="UK"
      >
        <MDTypography variant="h4" color={light ? "white" : "dark"}>
          UK
        </MDTypography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
