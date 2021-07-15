import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";

function NavBarButton(props) {
  return (
    <Grid item>
      <Button
        style={{
          color: "#faf8ff",
          margin: "0px 2px 0px 2px",
        }}
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
      <Grid
        container
        direction="row"
        style={{
          color: "#faf8ff",
          background: "#292929",
          padding: "10px",
          maxWidth: "fit-content",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
        }}
      >
        <NavBarButton name="Projects" />
        <NavBarButton name="Experience" />
        <NavBarButton name="Blog" />
      </Grid>
    );
  }
}

export default AppBar;
