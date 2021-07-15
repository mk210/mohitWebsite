import { Box, Button, Typography, TextField, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Autocomplete } from "@material-ui/lab";
import "../App.scss";
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
function DataTable() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  const data = [
    {
      id: 1,
      lec_name: "Something 101",
      desc: "Based on something i guess",
      date_mod: dd + "/" + mm + "/" + yyyy,
    },
    {
      id: 2,
      lec_name: "Something 102",
      desc: "Based on something 102",
      date_mod: dd - 4 + "/" + mm + "/" + yyyy,
    },
  ];

  const columns = [
    {
      field: "editNotes",
      headerName: "Notes",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          console.log(`${params.getValue("lec_name")}`);
        };

        return (
          <Typography
            variant="button"
            style={{ fontFamily: "open sans, sans-serif" }}
          >
            <Button
              onClick={onClick}
              variant="outlined"
              style={{
                // backgroundColor: "#faf8ff",
                color: "#333333",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              Edit
            </Button>
          </Typography>
        );
      },
    },
    { field: "lec_name", headerName: "Lecture name", width: 300 },
    { field: "desc", headerName: "Description", width: 800 },
    { field: "date_mod", headerName: "Date modified", width: 200 },
  ];
  return (
    <div style={{ height: 400, width: "auto", overflow: "hidden" }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  );
}
class Section1 extends Component {
  render() {
    return (
      <Box
        style={{
          padding: "20px",
          border: "5px solid #333333",
          marginBottom: "20px",
        }}
      >
        {/* <ButtonSpecial name="Projects" />
        <ButtonSpecial name="Experience" />
        <ButtonSpecial name="Skills" /> */}
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
          <Grid container direction={"row"}>
            {/* <Autocomplete
              id="combo-box-demo"
              options={subjects}
              getOptionLabel={(option) => option.title}
              style={{ width: "15em" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select course..."
                  variant="outlined"
                />
              )}
            /> */}

            <ButtonSpecial name="F20PA" />
            <ButtonSpecial name="F20BC" />
            <ButtonSpecial name="F20DL" />
            <ButtonSpecial name="F20CN" />
          </Grid>
          <Grid item>
            <DataTable />
          </Grid>
        </Typography>
      </Box>
    );
  }
}

export default Section1;
