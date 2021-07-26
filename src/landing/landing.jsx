import React, { Component } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import ResumePic from "./my-resume-pic-small.jpg";
import "../App.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
class Landing extends Component {
  render() {
    function handleAboutMe() {
      console.log("heyyo");
    }
    return (
      <>
        <Box
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Grid direction={"row"}>
            <Grid item>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <Button
                    style={{
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "30px",
                    }}
                    onClick={handleAboutMe}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        backgroundColor: "#202020",
                        padding: "10px",
                        borderRadius: "30px",
                        fontFamily: "open sans, sans-serif",
                        color: "#8685ef",
                      }}
                    >
                      👋
                    </Typography>
                  </Button>
                }
              >
                <Avatar
                  style={{
                    width: "8em",
                    height: "8em",
                    //   filter: "grayscale(80%)",
                    margin: "10px",
                  }}
                  src={ResumePic}
                ></Avatar>
              </Badge>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Montserrat Alternates,sans-serif",
            fontWeight: "600",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Mohit
          <span id="subtitle">Katta</span>
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontFamily: "Montserrat Alternates,sans-serif",
            fontWeight: "300",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          Computer Science, Year 4
        </Typography>
        <Box m={-1} />
        {/* <Typography
          variant="body2"
          style={{
            fontFamily: "open sans,sans-serif",
            fontWeight: "300",
            fontSize: "12px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          HERIOT WATT UNIVERSITY
        </Typography> */}
        <Box m={2} />
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton target="_blank" href="https://www.github.com/mk210">
            <GitHubIcon fontSize="small" style={{ color: "#faf8ff" }} />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.linkedin.com/in/mohit-katta"
          >
            <LinkedInIcon fontSize="small" style={{ color: "#faf8ff" }} />
          </IconButton>
          <IconButton target="_blank" href="mailto:mohit.kvs1@gmail.com">
            <AlternateEmailRoundedIcon
              fontSize="small"
              style={{ color: "#faf8ff" }}
            />
          </IconButton>
        </div>
      </>
    );
  }
}

export default Landing;
