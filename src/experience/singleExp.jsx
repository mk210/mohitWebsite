import { Box, createTheme } from "@material-ui/core";
import React, { Component } from "react";
import { Chrono } from "react-chrono";
const items = [
  {
    title: <div style={{ color: "#faf8ff" }}>Timeline title 1</div>,
    cardTitle: "Card Title 1",
    cardSubtitle: <div style={{ color: "#8685ef" }}>Some subtitle</div>,
    // cardDetailedText: "Lorem Ipsum. Lorem Ipsum. Lorem Ipsum",
  },
  {
    title: <div style={{ color: "#faf8ff" }}>Timeline title 1</div>,
    cardTitle: "Card Title 1",
    cardSubtitle: <div style={{ color: "#8685ef" }}>Some subtitle</div>,
    // cardDetailedText: "Lorem Ipsum. Lorem Ipsum. Lorem Ipsum",
  },
];
class SingleExperience extends Component {
  render() {
    return (
      <div style={{ width: "auto", height: "auto" }}>
        <Chrono
          //   items={items}
          mode="HORIZONTAL"
          theme={{
            primary: "#4a4857",
            secondary: "#8685ef",
            cardBgColor: "#202020",
            cardForeColor: "#faf8ff",
            titleColor: "#faf8ff",
          }}
          useReadMore={false}
        >
          <div>
            <b>heyyyo</b>
            <p style={{ color: "#faf8ff" }}>
              Lorem Ipsum. Lorem Ipsum. Lorem Ipsum
            </p>
          </div>
          <div>lmao lmao lmao</div>
        </Chrono>
      </div>
    );
  }
}

export default SingleExperience;
