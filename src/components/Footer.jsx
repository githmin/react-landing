import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import themeSettings from "../themeSettings.js";

const Sections = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5rem;
  gap: 15px;
  @media (max-width: ${themeSettings.breakpoint}) {
    padding: 2.5rem;
  }
`;
const MainContainer = styled.div`
  color: white;
  background-color: #0f072c;
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${themeSettings.breakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Topic = styled.h3``;

const Link = styled.p``;

const CopyrightContainer = styled.div`
  padding: 1rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Footer = () => {
  return (
    <div>
      <MainContainer>
        <Container>
          <SecondaryContainer>
            <Sections>
              <Topic>COMPANY</Topic>
              <Link>Clients</Link>
              <Link>About us</Link>
              <Link>Affilates</Link>
            </Sections>
            <Sections>
              <Topic>CAREERS</Topic>
              <Link>Careers</Link>
              <Link>Internships</Link>
            </Sections>
            <Sections>
              <Topic>CONTACT</Topic>
              <Link>Schedule a call</Link>
            </Sections>
          </SecondaryContainer>
          <hr></hr>
          <CopyrightContainer>
            <p>
              © Copyright {new Date().getFullYear()} {document.title}.
            </p>
          </CopyrightContainer>
        </Container>
      </MainContainer>
    </div>
  );
};

export default Footer;
