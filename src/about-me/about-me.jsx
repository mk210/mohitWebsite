import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "../App.scss";

class AboutMe extends Component {
  state = { name: "Mohit Katta" };
  render() {
    return (
      <Box className="Main" style={{ fontSize: "30px", fontWeight: "600" }}>
        Hey <span id="subtitle">Everyone</span>
        <Box m={2} />
        <Typography
          variant="body1"
          style={{ fontFamily: "open sans, sans-serif", fontWeight: "300" }}
        >
          I am Mohit <span id="subtitle">Katta</span>.
        </Typography>
      </Box>
    );
  }
}

export default AboutMe;
