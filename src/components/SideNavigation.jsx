import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

function SideNavigation() {
  return (
    <Box sx={{ width: 200 }} bgcolor={"#1876d2"} p={2}>
      <Box>
        <Link to={"/work"} style={{ textDecoration: "none", color: "white" }}>
          Work
        </Link>
        <Grid
          container
          p={1}
          mt={1}
          flexDirection={"column"}
          bgcolor={"#d3dfec"}
          borderRadius={2}
        >
          <Link
            to={"/check_payslip"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Check Payslip
          </Link>
          <Link
            to={"/equipment"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Equipment
          </Link>
          <Link
            to={"/unified_ticketing"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Unified Ticketing
          </Link>
          <Link
            to={"/leaves_and_vacation"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Leaves and Vacation
          </Link>
          <Link
            to={"/learning"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Learning
          </Link>
          <Link
            to={"/task_tracking"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Task Tracking
          </Link>
        </Grid>
      </Box>

      <Box mt={6}>
        <Link
          to={"/personal"}
          style={{ textDecoration: "none", color: "white", paddingTop: 3 }}
        >
          Personal
        </Link>
        <Grid
          container
          p={1}
          mt={1}
          flexDirection={"column"}
          bgcolor={"#d3dfec"}
          borderRadius={2}
        >
          <Link
            to={"/music_playlist"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Music Playlist
          </Link>
          <Link
            to={"/photos"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Photos
          </Link>
          <Link
            to={"/goals"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Goals
          </Link>
          <Link
            to={"/health_tracker"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Health Tracker
          </Link>
          <Link
            to={"/notes"}
            style={{ textDecoration: "none", color: "black", marginBottom: 5 }}
          >
            Notes
          </Link>
        </Grid>
      </Box>
      <Box paddingBottom={19.5} />
    </Box>
  );
}

export default SideNavigation;
