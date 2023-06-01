import React from "react";
import ProjectAppBar from "./ProjectAppBar";
import SideNavigation from "./SideNavigation";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Item() {
  return (
    <div>
      <ProjectAppBar />
      <Grid container flexWrap={"nowrap"}>
        <SideNavigation />
        <Box p={2} bgcolor={"#b5d2ea"}>
          <Box p={1} bgcolor={"#cde4f0"} borderRadius={2} width={40}>
            <Typography>Work</Typography>
          </Box>
          <Grid container p={2}>
            Check Payslip
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}

export default Item;
