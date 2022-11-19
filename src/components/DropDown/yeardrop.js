import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MDTypography from "components/MDTypography";

const MDDropyear = function BasicSelect({ handleChangeYear, yearRequired, year }) {
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">
          <MDTypography variant="button" fontWeight="bold">
            Year
          </MDTypography>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          defaultValue=""
          onChange={handleChangeYear}
          style={{ width: "80%", height: 40 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2025">2025</MenuItem>
        </Select>
        {yearRequired && <FormHelperText error>Required</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default MDDropyear;
