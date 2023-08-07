// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#007bff",
});

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          style={{ flexGrow: 1, textDecoration: "none" }}
        >
          e-BOOK
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          activeClassName="active"
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/about"
          activeClassName="active"
        >
          About
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/contact"
          activeClassName="active"
        >
          Contact
        </Button>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
