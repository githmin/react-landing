import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import TalkToUs from "./components/TalkToUs";
import WorkDone from "./components/WorkDone";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <WorkDone />
      <TalkToUs />
    </div>
  );
};

export default App;
