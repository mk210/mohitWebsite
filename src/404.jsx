import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.scss";
import NotFound from "./Assets/SVGs/404.svg";
class PageNotFound extends Component {
  render() {
    return (
      <Box
        style={{
          margin: "5px",
          display: "block",
          // position: "relative",
          verticalAlign: "middle",
        }}
      >
        <img
          src={NotFound}
          alt={"Page not found"}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            maxWidth: "20em",
            marginTop: "10%",
          }}
        />
        <br />
        <br />
        <Typography
          variant="h3"
          style={{
            fontFamily: "Montserrat Alternates,sans-serif",
            textAlign: "center",
            color: "#faf8ff",
            // fontSize: "20px",
          }}
        >
          Error!
        </Typography>
        <Box m={1} />
        <Typography
          variant="h3"
          style={{
            fontFamily: "Montserrat Alternates,sans-serif",
            textAlign: "center",
            color: "#faf8ff",
            fontSize: "20px",
            margin: "0px 5px 0px 5px",
          }}
        >
          We can't find the requested page😢
        </Typography>
        <Button
          style={{
            color: "#faf8ff",
            backgroundColor: "#8685ef",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            display: "flex",
            width: "fit-content",
          }}
          variant="contained"
          href="/"
        >
          Back to Home Page!
        </Button>
      </Box>
    );
  }
}

export default PageNotFound;
