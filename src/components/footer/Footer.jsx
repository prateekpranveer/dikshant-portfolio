import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Main>
        <p>Designed and Developed by @prateekpranveer</p>
      </Main>
    </>
  );
};

const Main = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  p {
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 12px;
    font-family: jost;
    font-weight: 300;
  }
`;

export default Footer;
