import React from "react";
import ProjectAppBar from "./ProjectAppBar";
import SideNavigation from "./SideNavigation";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import music from "./../assets/music.png";

function Work() {
  return (
    <div>
      <ProjectAppBar />
      <Grid container flexWrap={"nowrap"}>
        <SideNavigation />
        <Box p={2} bgcolor={"#b5d2ea"}>
          <Box p={1} bgcolor={"#cde4f0"} borderRadius={2} width={40} >
            <Typography>Work</Typography>
          </Box>
          <Grid container p={2}>
            <Grid
              item
              p={2}
              m={3}
              borderRadius={2}
              flexBasis={250}
              bgcolor={"#cde4f0"}
              textAlign={"center"}
            >
              <Typography p={1}>Check Payslip</Typography>
              <img
                src={music}
                alt="music"
                width={60}
                style={{ float: "right" }}
              />
            </Grid>
            <Grid
              item
              p={2}
              m={3}
              flexBasis={250}
              borderRadius={2}
              bgcolor={"#cde4f0"}
              textAlign={"center"}
            >
              <Typography p={1}>Equipment</Typography>
              <img
                src={music}
                alt="music"
                width={60}
                style={{ float: "right" }}
              />
            </Grid>
            <Grid
              item
              p={2}
              m={3}
              flexBasis={250}
              borderRadius={2}
              bgcolor={"#cde4f0"}
              textAlign={"center"}
            >
              <Typography p={1}>Unified Ticketing</Typography>
              <img
                src={music}
                alt="music"
                width={60}
                style={{ float: "right" }}
              />
            </Grid>
            <Grid
              item
              p={2}
              m={3}
              flexBasis={250}
              borderRadius={2}
              bgcolor={"#cde4f0"}
              textAlign={"center"}
            >
              <Typography p={1}>Leaves and Vacation</Typography>
              <img
                src={music}
                alt="music"
                width={60}
                style={{ float: "right" }}
              />
            </Grid>
            <Grid
              item
              p={2}
              m={3}
              flexBasis={250}
              borderRadius={2}
              bgcolor={"#cde4f0"}
              textAlign={"center"}
            >
              <Typography p={1}>Learning</Typography>
              <img
                src={music}
                alt="music"
                width={60}
                style={{ float: "right" }}
              />
            </Grid>
            <Grid
              item
              p={2}
              m={3}
              flexBasis={250}
              borderRadius={2}
              bgcolor={"#cde4f0"}
              textAlign={"center"}
            >
              <Typography p={1}>Task Tracking</Typography>
              <img
                src={music}
                alt="music"
                width={60}
                style={{ float: "right" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}

export default Work;
