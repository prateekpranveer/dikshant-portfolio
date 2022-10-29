import React from "react";
import styled from "styled-components";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <LoaderMain>
        <LoaderX>
          <div class="loadingio-spinner-wedges-jbrjzgwme6q">
            <div class="ldio-53d3ofi64km">
              <div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </LoaderX>
      </LoaderMain>
    </>
  );
};

const LoaderMain = styled.div`
  position: fixed;
  background-color: #f1f1f15c;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoaderX = styled.div``;

export default Loader;
