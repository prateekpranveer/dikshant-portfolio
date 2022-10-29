import React from "react";
import styled from "styled-components";
import Loader from "../loader/Loader";

const MaxImage = ({ Image, setBoldImage }) => {
  if (!Image) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <Main>
      <img src={Image.image.asset.url} alt="" />
      <Button onClick={() => setBoldImage(null)}>
        <div>
          <Span props="left"></Span>
          <Span props="right"></Span>
        </div>
      </Button>
    </Main>
  );
};

const Main = styled.div`
  transition: 1s ease;
  width: 100%;
  position: relative;
  background-color: pink;
  img {
    width: 100%;
  }
`;
const Button = styled.button`
  position: fixed;
  right: 40px;
  top: 200px;
  width: 100px;
  height: 100px;
  border: none;
  background-color: white;
  cursor: pointer;

  div {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Span = styled.span`
  background-color: black;
  width: 50px;
  height: 2px;
  transform: rotate(${(props) => (props.props == "right" ? "43" : "-43")}deg);
`;

export default MaxImage;
