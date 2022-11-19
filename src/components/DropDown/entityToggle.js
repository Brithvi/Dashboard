import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MDTypography from "components/MDTypography";

const MDtoggleentity = function ColorToggleButton({ handleChangeentity, entity, light }) {
  return (
    <ToggleButtonGroup
      color="success"
      value={entity}
      exclusive
      onChange={handleChangeentity}
      aria-label="platform"
    >
      <ToggleButton backgroundcolor="#00abc0" color="success" value="US">
        <MDTypography variant="h6" color={light ? "white" : "dark"}>
           US   
        </MDTypography>
      </ToggleButton>
      <ToggleButton backgroundcolor="#00abc0" color="success" value="UK">
        <MDTypography variant="h6" color={light ? "white" : "dark"}>
          UK
        </MDTypography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default MDtoggleentity;
