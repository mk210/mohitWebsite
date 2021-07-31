import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  Divider,
} from "@material-ui/core";
import React, { Component } from "react";

function ButtonSpecial(props) {
  return (
    <Grid item>
      <Button id="courseButton" variant="contained" onClick={props.onClick}>
        <Typography
          variant="button"
          style={{
            fontFamily: "Open Sans,sans-serif",
            fontWeight: "500",
          }}
        >
          {props.name}
        </Typography>
      </Button>
    </Grid>
  );
}
const F20PA = () => {
  alert("you have entered F20PA");
};
const F20BC = () => {
  alert("you have entered F20BC");
};
const F20DL = () => {
  alert("you have entered F20DL");
};
const F20CN = () => {
  alert("you have entered F20CN");
};

function SingleLecture(props) {
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
              color: "#faf8ff",
              fontSize: "12px",
              fontFamily: "Montserrat Alternates, sans-serif",
            }}
          >
            {props.date}
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
          href={props.notes}
          // startIcon={<GitHub />}
        >
          <Typography
            variant="body1"
            style={{
              color: "#faf8ff",
              fontSize: "12px",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            View notes
          </Typography>
        </Button>
        {/* </CardActions> */}
      </Card>
    </Grid>
  );
}
class NotesView extends Component {
  state = {};
  render() {
    return (
      <Box
        style={{
          padding: "20px",
          border: "5px solid #333333",
          marginBottom: "20px",
        }}
        className="myNotes"
      >
        <Typography
          variant="h5"
          style={{
            fontFamily: "montserrat alternates,sans-serif",
            fontWeight: "500",
          }}
        >
          my
          <span id="subtitle" style={{ marginBottom: "20px" }}>
            Notes
          </span>
        </Typography>
        <Box m={2} />
        <Grid container direction={"row"}>
          <ButtonSpecial name="F20PA" onClick={F20PA} />
          <ButtonSpecial name="F20BC" onClick={F20BC} />
          <ButtonSpecial name="F20DL" onClick={F20DL} />
          <ButtonSpecial name="F20CN" onClick={F20CN} />
        </Grid>
        <Grid container direction="row">
          <SingleLecture
            date={"27/31/2021"}
            title="Introduction"
            desc="This is just the introduction to the whole thing"
            notes="/notes/lect1"
          />
        </Grid>
      </Box>
    );
  }
}

export default NotesView;
