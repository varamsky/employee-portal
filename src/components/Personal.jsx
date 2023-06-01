import React from "react";
import ProjectAppBar from "./ProjectAppBar";
import SideNavigation from "./SideNavigation";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import music from "./../assets/music.png";

function Personal() {
  return (
    <div>
      <ProjectAppBar />
      <Grid container flexWrap={"nowrap"}>
        <SideNavigation />
        <Box p={2} bgcolor={"#b5d2ea"} width={1200}>
          <Box p={1} bgcolor={"#cde4f0"} borderRadius={2} width={70}>
            <Typography>Personal</Typography>
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
              <Typography p={1}>Music Playlist</Typography>
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
              <Typography p={1}>Photos</Typography>
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
              <Typography p={1}>Goals</Typography>
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
              <Typography p={1}>Health Tracker</Typography>
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
              <Typography p={1}>Notes</Typography>
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

export default Personal;
