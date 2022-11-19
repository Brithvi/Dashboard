import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const MDDropentity = function BasicSelect({ handleChangeentity, entity }) {
  // const [entity, setentity] = React.useState("");

  /* const handleChangeentity = (event) => {
    setentity(event.target.value);
    const entityNew = event.target.value;
    console.log(entityNew);
    // const dropDownMkt = document.getElementsByName("market-simple-select");
    if (entityNew === "UK") {
      //  .setAttribute("disabled", "disabled");
      document.getElementsByName("entity-simple-select").disabled = true;
    } else {
      // dropDownMkt.removeAttribute("disabled");
      document.getElementsByName("entity-simple-select").disabled = false;
    }
  }; */

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
        <InputLabel id="entity-simple-select-label" size="small">
          Entity
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="entity-simple-select"
          name="entity-simple-select"
          value={entity}
          defaultValue=""
          label="Entity"
          onChange={handleChangeentity}
          style={{ width: "70%", height: 40 }}
        >
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
        </Select>
        <FormHelperText error>Required</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MDDropentity;
