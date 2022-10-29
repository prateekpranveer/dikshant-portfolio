import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar = ({ Link, link, setLink }) => {
  console.log(link);
  return (
    <NavMain>
      <SidebarToggle>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </SidebarToggle>
      <NavLinks>
        {Link?.map((t) => (
          <NavLink onClick={() => setLink(t.name)}>{t.name}</NavLink>
        ))}
      </NavLinks>
    </NavMain>
  );
};

const SidebarToggle = styled.div`
  div {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    span {
      width: 30px;
      height: 2px;
      background-color: black;
      border-radius: 2px;
    }
  }
`;

const NavMain = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const NavLinks = styled.div`
  width: 100%;
  height: 6vh;
  font-family: Jost;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const NavLink = styled.div`
  cursor: pointer;
`;

export default Navbar;
