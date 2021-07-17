import { Accordion, Box, Grid, Paper, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "../App.scss";

class SingleProject extends Component {
  render() {
    return (
      <Box>
        <Typography
          variant="body1"
          style={{
            fontFamily: "open sans,sans-serif",
            color: "#faf8ff",
          }}
        >
          <Grid container direction="row">
            <Grid item>
              <Paper
                elevation={3}
                variant="elevation"
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  minWidth: "10em",
                  maxHeight: "10em",
                  //   marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                dvn
              </Paper>
            </Grid>
            <Box width={5} />
            <Grid item>
              <Paper
                elevation={3}
                variant="elevation"
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  maxWidth: "50em",
                  maxHeight: "10em",
                  //   marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                dvn
              </Paper>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    );
  }
}
export default SingleProject;
