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
          backgroundColor: "#202020",
          color: "#faf8ff",
          textAlign: "center",
          padding: "5px",
        }}
      >
        <Typography
          variant="body2"
          style={{ fontFamily: "open sans, san-serif" }}
        >
          Made with ♥ by <b>Mohit Katta</b>. The source code is licensed{" "}
          <a
            href="https://opensource.org/licenses/MIT"
            rel="noreferrer"
            target="_blank"
            style={{ color: "#faf8ff" }}
          >
            MIT
          </a>
          .
        </Typography>
      </Box>
    );
  }
}

export default Footer;
