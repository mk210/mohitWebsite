import {
  Accordion,
  Box,
  Grid,
  Card,
  Typography,
  Divider,
  CardActions,
  Button,
  IconButton,
} from "@material-ui/core";
import { GitHub, ShareRounded } from "@material-ui/icons";
import React, { Component } from "react";
import "../App.scss";
import ProjectsPage from "./projectsPage";
import { projects } from "../content";

function SingleElement(props) {
  return (
    <Grid item>
      <Card
        elevation={3}
        variant="elevation"
        style={{
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "15em",
          maxHeight: "15em",
          marginTop: "10px",
          marginRight: "15px",
          marginLeft: "auto",
          backgroundColor: "#202020",
        }}
      >
        <div
          style={{
            padding: "2px 5px 2px 5px",
            backgroundColor: "#4a4857",
            borderRadius: "20px",
            width: "fit-content",
          }}
        >
          <Typography
            variant="body2"
            style={{
              color: "#8685ef",
              fontSize: "12px",
              fontFamily: "Montserrat Alternates, sans-serif",
            }}
          >
            {props.language}
          </Typography>
        </div>
        <Box m={0.5} />
        <Typography
          variant="h4"
          style={{
            color: "#faf8ff",
            // fontSize: "20px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {props.title}
        </Typography>
        <Box m={1} />
        <Divider light style={{ backgroundColor: "#4a4857" }} />
        <Box m={1} />
        <Typography
          variant="body1"
          style={{
            color: "#faf8ff",
            // fontSize: "15px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {props.desc}
          {/* A Max of 84 characters are allowed in the project synopsis */}
        </Typography>

        <Box m={1} />

        {/* <CardActions> */}
        <Button
          style={{
            color: "#faf8ff",
            marginLeft: "-5px",
            borderRadius: "10px",
            paddingLeft: "12px",
            border: "1px solid #faf8ff",
          }}
          target="_blank"
          href={props.github}
          startIcon={<GitHub />}
        >
          <Typography
            variant="body1"
            style={{
              color: "#faf8ff",
              fontSize: "12px",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            View code
          </Typography>
        </Button>
        <IconButton>
          <ShareRounded fontSize="small" style={{ color: "#faf8ff" }} />
        </IconButton>
        {/* </CardActions> */}
      </Card>
    </Grid>
  );
}

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
            {projects.map((project) => {
              return (
                <SingleElement
                  language={project.language}
                  title={project.title}
                  desc={project.desc}
                  github={project.github}
                />
              );
            })}
          </Grid>
        </Typography>
      </Box>
    );
  }
}
export default SingleProject;
