import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

function ProjectAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            SAP
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, ml: 30 }}>
            Enhanced Employee Portal
          </Typography>
          <Button color="inherit">
            <PersonIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ProjectAppBar;
