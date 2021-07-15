import { Box } from "@material-ui/core";
import logo from "./logo.svg";
import Landing from "./landing/landing";
import AppBar from "./landing/appbar";
import Section1 from "./landing/section1";
import Footer from "./landing/footer";
import "./App.scss";
function App() {
  return (
    <>
      <Box className="Main">
        <Landing />
        <Box m={2.5} />
        <AppBar />
      </Box>
      <Footer />
      {/* <Box style={{ margin: "0em 2em 0em 2em" }}><Section1 /></Box> */}
    </>
  );
}

export default App;
