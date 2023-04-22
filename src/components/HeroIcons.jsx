import React from "react";
import styled from "styled-components";
import js from "../assets/js.png";
import oracle from "../assets/oracle.png";
import meta from "../assets/meta.png";
import react from "../assets/react.png";
import xd from "../assets/xd.png";
import aws from "../assets/aws.png";
import nodejs from "../assets/nodejs.png";

const JsIcon = styled.div`
  content: url(${js});
  height: 70px;
`;

const nodejsIcon = styled.div`
  content: url(${nodejs});
  height: 70px;
`;

const ReactIcon = styled.div`
  content: url(${react});
  height: 70px;
`;
const MetaIcon = styled.div`
  content: url(${meta});
  height: 60px;
`;

const oracleIcon = styled.div`
  content: url(${oracle});
  height: 85px;
`;
const awsIcon = styled.div`
  content: url(${aws});
  height: 65px;
`;
const XdIcon = styled.div`
  content: url(${xd});
  height: 70px;
`;

const icons = [
  XdIcon,
  oracleIcon,
  awsIcon,
  MetaIcon,
  nodejsIcon,
  ReactIcon,
  JsIcon,
];

const MainDiv = styled.div`
  display: flex;
`;

const IconPaddin = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroIcons = () => {
  return (
    <MainDiv>
      {icons.map((Icon, index) => {
        return (
          <IconPaddin>
            <Icon key={index} />
          </IconPaddin>
        );
      })}
    </MainDiv>
  );
};

export default HeroIcons;
