import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <Box
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "#292929",
          color: "#faf8ff",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <Typography
          variant="body2"
          style={{ fontFamily: "open sans, san-serif" }}
        >
          Made with ♥ by Mohit Katta. This website is licensed under the MIT
          license
        </Typography>
      </Box>
    );
  }
}

export default Footer;
