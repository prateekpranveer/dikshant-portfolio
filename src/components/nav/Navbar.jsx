import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import ToggleButton from "../sidebar/ToggleButton";

const Navbar = ({ Link, setLink }) => {
  const [Toggle, setToggle] = useState({
    sidebar: "-250px",
    toggle: false,
  });

  return (
    <NavMain>
      <ToggleState>
        <Sidebar link={Link} setLink={setLink} Toggle={Toggle} />
        <ToggleButton Toggle={Toggle} setToggle={setToggle} />
      </ToggleState>
      <NavLinks>
        {Link?.map((t, id) => (
          <>
            <NavLink key={id} onClick={() => setLink(t.name)}>
              {t.name}
            </NavLink>
          </>
        ))}
      </NavLinks>
      <Brand>DIKSHANT.</Brand>
    </NavMain>
  );
};

const ToggleState = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;
const NavMain = styled.div`
  width: 95%;
  height: 6vh;
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

  @media (max-width: 600px) {
    display: none;
  }
`;

const Brand = styled.div`
  letter-spacing: 4px;
  font-family: jost;
  @media (min-width: 600px) {
    display: none;
  }
`;

const NavLink = styled.div`
  cursor: pointer;
`;

export default Navbar;
