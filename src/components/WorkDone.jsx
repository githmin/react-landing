import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FakeLogo1 from "../assets/FakeLogo1.png";
import FakeLogo2 from "../assets/FakeLogo2.png";
import FakeLogo3 from "../assets/FakeLogo3.png";
import FakeLogo4 from "../assets/FakeLogo4.png";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  min-width: 500px;
  padding: 8rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    padding: 8rem 0rem 8rem 0rem;
    min-width: 0px;
  }
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #cdeaf0;
  padding: 2rem;
  border-radius: 1rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
  }
`;

const FakeLogoOne = styled.div`
  content: url(${FakeLogo1});
  height: 70px;
`;
const FakeLogoTwo = styled.div`
  content: url(${FakeLogo2});
  height: 70px;
`;
const FakeLogoThree = styled.div`
  content: url(${FakeLogo3});
  height: 70px;
`;
const FakeLogoFour = styled.div`
  content: url(${FakeLogo4});
  height: 70px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Logos = [FakeLogoOne, FakeLogoTwo, FakeLogoThree, FakeLogoFour];
const TextContainer = styled.div`
  @media (max-width: ${themeSettings.breakpoint}) {
    text-align: center;
  }
`;

const WorkDone = () => {
  return (
    <MainContainer>
      <Container>
        <SecondaryContainer>
          <TextContainer>
            <h1>Dont take our word for it!</h1>
            <p>Our clients trust in our team</p>
          </TextContainer>

          <LogoContainer>
            {Logos.map((Icon, index) => {
              return <Icon key={index} />;
            })}
          </LogoContainer>
        </SecondaryContainer>
      </Container>
    </MainContainer>
  );
};

export default WorkDone;
