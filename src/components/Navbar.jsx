import React from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import logo from "../assets/2-nobg.png";
import { Button } from "@mui/material";
import themeSettings from "../themeSettings.js";

const MainContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  content: url(${logo});
  width: 200px;
`;

const CenterColumn = styled.ul`
  display: flex;
  list-style: none;
  gap: 4rem;
  @media (max-width: ${themeSettings.breakpoint}) {
    display: none;
  }
`;

const Navbar = (props) => {
  return (
    <Container>
      <MainContainer>
        <LogoContainer />
        <CenterColumn>
          <li>Product</li>
          <li>Marketing</li>
          <li>Support & Services</li>
        </CenterColumn>
        <Button variant="outlined" onClick={props.scrollToCall}>
          Contact Us
        </Button>
      </MainContainer>
    </Container>
  );
};

export default Navbar;
