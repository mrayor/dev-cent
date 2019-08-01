import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/sidemenu.css";
import SidebarMenu from "./SidebarMenu";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AllCourses from "./pages/AllCourses";
import Enroll from "./pages/Enroll";
import Course from "./pages/Course";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div id="App">
        <SidebarMenu />
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/courses" component={AllCourses} />
            <Route exact path="/courses/:id/enroll" component={Enroll} />
            <Route exact path="/courses/:id" component={Course} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
