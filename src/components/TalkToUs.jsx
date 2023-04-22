import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ContactUs from "../assets/ContactUs.png";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  /* border: 1px solid; */
  background: radial-gradient(#0998b7, transparent),
    radial-gradient(ellipse 70% 100% at bottom left, #2fc389, transparent),
    linear-gradient(to left, white 10%, transparent);
  background-size: 0% 0%, 100% 100%, 100% 100%;
`;

const ImageContainer = styled.div`
  content: url(${ContactUs});
  width: 400px;
  /* border: 1px solid; */
`;
const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 5rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const CallUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const CallBtn = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :after {
    content: "";
    background-color: #4acb98;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  :hover:after {
    top: 0px;
    left: 0px;
  }
`;
const InfoContainer = styled.p`
  padding: 2rem;
  text-align: center;
  font-weight: 600;
`;

const TalkToUs = () => {
  return (
    <MainContainer>
      <Container>
        <SecondaryContainer>
          <ImageContainer />
          <CallUs>
            <InfoContainer>
              Say goodbye to frustration and delays, and hello to efficiency and
              growth.<br></br> Contact us now and let's get started!
            </InfoContainer>
            <CallBtn>Schedule a call</CallBtn>
            <br></br>
            <CallBtn>Email us</CallBtn>
          </CallUs>
        </SecondaryContainer>
      </Container>
    </MainContainer>
  );
};

export default TalkToUs;
