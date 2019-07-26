import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/sidemenu.css";
import SidebarMenu from "./SidebarMenu";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div id="App">
          <SidebarMenu />
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/enroll" component={Enroll} />
              <Route exact path="/courses/course" component={Course} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
