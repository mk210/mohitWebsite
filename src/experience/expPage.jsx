import { Box, Button, Grid, IconButton, Typography } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import React, { Component } from "react";
import SingleExperience from "./singleExp";
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

class Experience extends Component {
  render() {
    return (
      <Box style={{ margin: "20px" }}>
        <Grid container direction={"row"}>
          <IconButton
            variant="contained"
            style={{
              color: "#faf8ff",
              backgroundColor: "#202020",
              borderRadius: "10px",
              width: "fit-content",
              marginRight: "5px",
            }}
            href="/"
          >
            <HomeRoundedIcon />
          </IconButton>
          <div className="AppBarOther">
            <NavBarButton name="Projects" href="/projects" />
            <NavBarButton name="Blog" />
          </div>
        </Grid>
        <Box m={3} />
        <Typography
          variant="h3"
          style={{
            fontFamily: "Montserrat Alternates, sans-serif",
            fontSize: "30px",
            color: "#faf8ff",
          }}
        >
          my
          <span id="subtitle">
            <b>Experience</b>
          </span>
        </Typography>
        <Box m={3} />
        <SingleExperience />
      </Box>
    );
  }
}

export default Experience;
