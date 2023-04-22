import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import TalkToUs from "./components/TalkToUs";
import WorkDone from "./components/WorkDone";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <WorkDone />
      <TalkToUs />
      <Footer/>
    </div>
  );
};

export default App;
