import React from "react";
import Navbar from "./Navbar";
import HeaderSection from "./HeaderSection";
import BodySection from "./BodySection";
import UpcomingEventsSection from "./UpcomingEventsSection";
import Footer from "./Footer";
import SidebarMenu from "./SidebarMenu";
import "../styles/sidemenu.css";

function App() {
  return (
    <React.Fragment>
      <div id="App">
        <SidebarMenu />
        <div id="page-wrapper">
          <Navbar />
          <HeaderSection />
          <BodySection />
          <UpcomingEventsSection />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
