import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "../App.scss";
function NavBarButton(props) {
  return (
    <Grid item>
      <Button
        style={{
          color: "#faf8ff",
          margin: "0px 2px 0px 2px",
        }}
        href={props.href}
      >
        <Typography
          variant="button"
          style={{ fontFamily: "open sans, san-serif" }}
        >
          {props.name}
        </Typography>
      </Button>
    </Grid>
  );
}
class AppBar extends Component {
  render() {
    return (
      <Grid container direction="row" className="AppBar">
        <NavBarButton name="Projects" href="/projects" />
        <NavBarButton name="Experience" />
        <NavBarButton name="Blog" />
      </Grid>
    );
  }
}

export default AppBar;
