import { Box } from "@material-ui/core";
import logo from "./logo.svg";
import Landing from "./landing/landing";
import AppBar from "./landing/appbar";
import Section1 from "./landing/section1";
import Footer from "./landing/footer";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageNotFound from "./404";
import ProjectsPage from "./projects/projectsPage";
import Experience from "./experience/expPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Box className="Main">
            <Landing />
            <Box m={2.5} />
            <AppBar />
            <Footer />
          </Box>
        </Route>
        <Route exact path="/notes">
          <Section1 />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      {/* <Box style={{ margin: "0em 2em 0em 2em" }}><Section1 /></Box> */}
    </Router>
  );
}

export default App;
