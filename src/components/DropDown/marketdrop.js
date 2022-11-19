import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDTypography from "components/MDTypography";
// import FormHelperText from "@mui/material/FormHelperText";
import colors from "assets/theme-dark/base/colors";
// import rgba from "assets/theme/functions/rgba";
// import outlined from "assets/theme/components/button/outlined";
// import { withStyles } from "@material-ui/core/styles";
// import MDDropentity from "./entitydrop";
const MDDropmarket = function BasicSelect({ handleChangeMarket, disableMarket, market, light }) {
  // const styles = {
  //   .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline:{
  //     borderColor: light ? "white" : "black",
  //   }
  // }
  const { white, dark } = colors;
  return (
    <Box
      sx={{
        minWidth: 100,
        height: 30,
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "neutral.muted",
          opacity: [5, 5, 5],
        },
      }}
    >
      <FormControl
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: light ? white.main : dark.main,
          },
        }}
      >
        <InputLabel id="market-simple-select-label" size="small">
          <MDTypography variant="button" fontWeight="bold">
            Market
          </MDTypography>
        </InputLabel>
        <Select
          labelId="market-simple-select-label"
          id="market-simple-select"
          name="market-simple-select"
          value={market}
          label="Market"
          defaultValue=" "
          onChange={handleChangeMarket}
          style={{ width: "90%", height: 40, color: "#fff", align: "center" }}
          disabled={disableMarket}
          sx={{
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: light ? "white" : "dark",
              borderColor: light ? "white" : "dark",
              align: "center",
            },
            "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
              borderColor: "red",
              align: "center",
            },
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="North">North</MenuItem>
          <MenuItem value="West">West</MenuItem>
          <MenuItem value="South">South</MenuItem>
          <MenuItem value="Central">Central</MenuItem>
          <MenuItem style={{ display: "none" }} value="UK">
            <MDTypography variant="button" color={light ? "white" : "dark"}>
              UK
            </MDTypography>
          </MenuItem>
        </Select>
        {/* {disableMarket && <FormHelperText error>disabled</FormHelperText>} */}
      </FormControl>
    </Box>
  );
};

export default MDDropmarket;
