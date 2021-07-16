import { Box } from "@material-ui/core";
import React, { Component } from "react";
import "./App.scss";

class PageNotFound extends Component {
  render() {
    return (
      <Box className="main">
        Sorry, the page you are requesting for isn't available😢
      </Box>
    );
  }
}

export default PageNotFound;
