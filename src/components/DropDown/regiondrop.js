import React, { useEffect } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDTypography from "components/MDTypography";
// import environment from "../../environments/env.dev.ts";

const MDDropregion = function BasicSelect({
  handleChangeRegion,
  dropDownregion,
  entityPass,
  resetRegionarket,
  marketNew,
}) {
  const [opcoList, setopcoList] = React.useState([]);
  // const [marketNew, setNewMarket] = React.useState("");
  const [isloading, setIsloading] = React.useState(true);
  let dropDownregionF;
  let opcoRequestUrl;
  // const baseURL = process.env.REACT_APP_API_URL;
  dropDownregionF = dropDownregion;
  // console.log(process.env.REACT_APP_BASEURL);
  async function getOpcoData() {
    if (entityPass !== "" && marketNew === "UK") {
      // setEntity(entityPass);
      dropDownregionF = "";
      opcoRequestUrl = `${process.env.REACT_APP_BASEURL}/details/opcolist/${entityPass}`;
    } else if (entityPass === "US" && marketNew !== "") {
      opcoRequestUrl = `${process.env.REACT_APP_BASEURL}/details/opcolist/US/${marketNew}`;
      dropDownregionF = "";
    }
    await Axios.get(opcoRequestUrl).then((responseOpco) => {
      // Check If The Data Is Populated
      setopcoList(responseOpco.data);
    });
    // console.log(opcoRequestUrl);
    setIsloading(false);
  }
  useEffect(() => {
    // If The Result Is Not Ready So You Make The Axios Call
    getOpcoData();
  }, [entityPass, marketNew]);
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
        <InputLabel id="region-simple-select-label" size="small">
          <MDTypography variant="button" fontWeight="bold">
            Region
          </MDTypography>
        </InputLabel>
        <Select
          labelId="region-simple-select-label"
          id="region-simple-select"
          value={dropDownregionF}
          defaultValue={resetRegionarket}
          label="Region"
          onChange={handleChangeRegion}
          style={{ width: "90%", height: 40 }}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {isloading ? (
            <div />
          ) : (
            opcoList.map((val) => (
              <MenuItem key={val.OpcoNum} value={val.OpcoNum}>
                {val.OpcoNum}- {val.OpcoName}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MDDropregion;
