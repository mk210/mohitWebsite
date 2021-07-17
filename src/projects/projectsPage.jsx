import { Box, Button, IconButton, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import "../App.scss";
import SingleProject from "./singleProject";

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
class ProjectsPage extends Component {
  render() {
    return (
      <Box style={{ margin: "20px" }}>
        <Grid container direction={"row"}>
          <IconButton
            variant="contained"
            style={{
              color: "#faf8ff",
              backgroundColor: "#292929",
              borderRadius: "10px",
              width: "fit-content",
              marginRight: "5px",
            }}
            href="/"
          >
            <HomeRoundedIcon />
          </IconButton>
          <div className="AppBarOther">
            <NavBarButton name="Experience" />
            <NavBarButton name="Blog" />
          </div>
        </Grid>
        {/* Everything else comes here! */}
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
            <b>Projects</b>
          </span>
        </Typography>
        <Box m={3} />
        <SingleProject />
      </Box>
    );
  }
}

export default ProjectsPage;
