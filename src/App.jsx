import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import TalkToUs from "./components/TalkToUs";
import WorkDone from "./components/WorkDone";
import Footer from "./components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 550px;
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <Expertise />
      <WorkDone />
      <TalkToUs />u
      <Footer />
    </Wrapper>
  );
};

export default App;
