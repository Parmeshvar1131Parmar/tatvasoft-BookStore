import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Tab, Tabs, Textfield } from "@material-ui/core";
import { styles } from "./style";
const Profile = () => {
  const classes = styles();
  return (
    <h1 className={classes.wrapper}>
      Profile Components <NavLink to="/user">Users</NavLink>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className="click-btn"
        classes={{}}
      >
        Click me
      </Button>
      <Tabs>
        <Tab classes={{ selected: "selected tab" }}>Hello</Tab>
        <Tab>Hello 2</Tab>
      </Tabs>
    </h1>
  );
};

export default Profile;
