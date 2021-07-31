import { Box } from "@material-ui/core";
import logo from "./logo.svg";
import Landing from "./landing/landing";
import AppBar from "./landing/appbar";
import Section1 from "./notes/section1";
import NotesView from "./notes/notesView";
import Footer from "./landing/footer";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageNotFound from "./404";
import ProjectsPage from "./projects/projectsPage";
import Experience from "./experience/expPage";
import AboutMe from "./about-me/about-me";
import firebase from "./firebase";

firebase.firestore().collection("courses").add({
  title: "F20ML",
});

console.log("hey");

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
          {/* <Section1 /> */}
          <NotesView />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/aboutMe">
          <AboutMe />
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
