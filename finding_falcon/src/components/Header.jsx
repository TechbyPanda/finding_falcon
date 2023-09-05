import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Home, Refresh } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetDestinations } from "../actions/destinationActions";

function Header() {
  const dispatch = useDispatch();

  function reset(){
    dispatch(resetDestinations());
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Finding Falcon
          </Link>
        </Typography>
        <IconButton color="inherit" onClick={reset}>
          <Refresh />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
