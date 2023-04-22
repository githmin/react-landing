import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HeroIcons from "./HeroIcons";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  min-width: 500px;
  /* border: 1px solid; */
  background: radial-gradient(
      ellipse 70% 100% at top right,
      #2fc389,
      transparent
    ),
    radial-gradient(ellipse 70% 100% at bottom left, #0998b7, transparent),
    linear-gradient(to left, white 10%, transparent);
  background-size: 100% 80%, 100% 80%, 100% 100%;
  background-position: top left, right bottom, top left;
  background-repeat: no-repeat;
  border-bottom-left-radius: 50px;
  /* border-bottom-right-radius: 50px; */
  padding-bottom: 35px;
  box-shadow: 10px 10px 10px grey;
`;

const SpecializeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CenterText = styled.h1`
  min-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  /* background: rgba(255, 205, 5, 0.1);  */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  color: #000000;
  font-size: 5rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    padding: 2.5rem;
    font-size: 4rem;
  }
`;

const Hero = () => {
  return (
    <MainContainer>
      <Container>
        <CenterText>
          Unlocking your business potential with software and marketing mastery
          {" </>"}
        </CenterText>
        <SpecializeDiv>
          <div>WE SPECIALIZE IN</div>
          <HeroIcons />
        </SpecializeDiv>
      </Container>
    </MainContainer>
  );
};

export default Hero;
