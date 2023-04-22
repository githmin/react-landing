import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Marketing from "../assets/Marketing.jpg";
import Dev from "../assets/Dev.jpg";

const Main = styled.h1`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
`;

const Header = styled.h1`
  margin-top: 10vh;
  margin-bottom: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Subtext = styled.p`
  font-size: 1rem;
`;
const CardContainer = styled.div`
  /* border: 1px solid; */
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarketingContainer = styled.div`
  content: url(${Marketing});
  width: 400px;
  /* border: 1px solid; */
`;

const DevContainer = styled.div`
  content: url(${Dev});
  width: 400px;
  /* border: 1px solid; */
`;

const CardContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const InfoContainer = styled.p`
  padding: 2rem;
  text-align: center;
  font-weight: 600;
`;
const LeanMore = styled.button`
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

const Expertise = () => {
  return (
    <div>
      <Container>
        <Header>
          <Main>Launch to market with our MVP development program</Main>
          <Subtext>
            Merging marketing and software development expertise
          </Subtext>
        </Header>

        <MainSection>
          <CardContainer>
            <CardContainerMain>
              <MarketingContainer />
              <InfoContainer>
                Get consulted by marketing experts on wide range of products
                to kick-start your project
              </InfoContainer>
              <LeanMore>Learn More</LeanMore>
            </CardContainerMain>
          </CardContainer>
          <CardContainer>
            <CardContainerMain>
              <DevContainer />
              <InfoContainer>
                Turbocharge your business with put world-class dev team for your
                ultimate success!
              </InfoContainer>
              <LeanMore>Learn More</LeanMore>
            </CardContainerMain>
          </CardContainer>
        </MainSection>
      </Container>
    </div>
  );
};

export default Expertise;
