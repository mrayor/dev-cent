import React from "react";
import Navbar from "./Navbar";
import HeaderSection from "./HeaderSection";
import BodySection from "./BodySection";
import UpcomingEventsSection from "./UpcomingEventsSection";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderSection />
      <BodySection />
      <UpcomingEventsSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
