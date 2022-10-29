import React from "react";
import styled from "styled-components";
import "./Sidebar.css";

const Sidebar = ({ Toggle, link, setLink }) => {
  return (
    <>
      <div
        style={{
          left: `${Toggle.sidebar}`,
        }}
        className="sidebar"
      >
        <div className="inside">
          {link?.map((t,id) => (
            <li key={id} onClick={() => setLink(t.name)}>{t.name}</li>
          ))}

          <About>About Me</About>
        </div>
      </div>
    </>
  );
};

const About = styled.button`
  margin-top: 30px;
  margin-left: 30px;
  padding: 16px 0px;
  width: 100px;
  border-radius: 25px;
  background-color: white;
  border: none;
  font-family: jost;
  letter-spacing: 1px;
  cursor: pointer;
  border: 2px solid black;
  transition: 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
    border: 2px solid white;
  }
`;

export default Sidebar;
