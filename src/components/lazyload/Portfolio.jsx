import React, { useEffect, useState } from "react";
// import { LazyLoadComponent } from "react-lazy-load-image-component";
import styled from "styled-components";
import sanityClient from "../../client.js";
import Loader from "../loader/Loader";
import MaxImage from "../maxImage/MaxImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Portfolio = ({ width, link }) => {
  const [Images, setImages] = useState(null);
  const [BoldImage, setBoldImage] = useState(null);
  const handleClick = (t) => {
    setBoldImage(t);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "photo"]{
        title,
        image {
          asset->{
            _id,
            url
          }
        },
        category
      }`
      )
      .then((res) => {
        setImages(res);
      });
  }, []);

  if (!Images) {
    return <Loader />;
  }

  return (
    <div>
      {!BoldImage ? (
        <>
          <PortfolioMain width={width}>
            <Image>
              {Images?.filter((cat) => cat.category === link).map((t,id) => (
                <>
                  <ImageMain key={id} onClick={() => handleClick(t)}>
                    <LazyLoadImage
                      style={{
                        width: "100%",
                        borderRadius: "6px",
                      }}
                      effect="opacity"
                      src={t.image.asset.url}
                      alt={t.title}
                    />
                    <Title>{t.title}</Title>
                  </ImageMain>
                </>
              ))}
            </Image>
          </PortfolioMain>
        </>
      ) : (
        <>
          <MaxImage setBoldImage={setBoldImage} Image={BoldImage} />
        </>
      )}
    </div>
  );
};

const PortfolioMain = styled.div`
  width: ${(props) => props.width / 1.06}px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.div`
  bottom: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  font-family: jost;
  letter-spacing: 1px;
  padding: 2px 12px;
  background-color: #0000008b;
  border-radius: 8px;
  transition: 0.5s ease;
`;
const ImageMain = styled.div`
  width: 200px;
  position: relative;
  min-width: 200px;
  align-items: center;
  margin: auto;
  flex: 10%;
  cursor: pointer;
  &:hover ${Title} {
    opacity: 1;
  }
`;

const Image = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: auto;
  animation: fadeIn;
  transition: 1s ease;
`;

export default Portfolio;
