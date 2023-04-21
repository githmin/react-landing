import React from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import logo from "../assets/2-nobg.png";
import { Button } from "@mui/material";

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
`;

const Navbar = () => {
  return (
    <Container>
      <MainContainer>
        <LogoContainer />
        <CenterColumn>
          <li>Product</li>
          <li>Marketing</li>
          <li>Support & Services</li>
        </CenterColumn>
        <Button variant="outlined">Contact Us</Button>
      </MainContainer>
    </Container>
  );
};

export default Navbar;
