import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MDTypography from "components/MDTypography";

const MDDropmonth = function BasicSelect({ handleChangemonth, month, monthRequired }) {
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
            Month
          </MDTypography>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="month-simple-select"
          value={month}
          label="Month"
          onChange={handleChangemonth}
          style={{ width: "90%", height: 40 }}
          variant="outlined"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Jan</MenuItem>
          <MenuItem value={2}>Feb</MenuItem>
          <MenuItem value={3}>Mar</MenuItem>
          <MenuItem value={4}>Apr</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>Jun</MenuItem>
          <MenuItem value={7}>Jul</MenuItem>
          <MenuItem value={8}>Aug</MenuItem>
          <MenuItem value={9}>Sep</MenuItem>
          <MenuItem value={10}>Oct</MenuItem>
          <MenuItem value={11}>Nov</MenuItem>
          <MenuItem value={12}>Dec</MenuItem>
        </Select>
        {monthRequired && <FormHelperText error>Required</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default MDDropmonth;
