import React, { useEffect, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import styled from "styled-components";
import sanityClient from "../../client.js";
import Loader from "../loader/Loader";
import MaxImage from "../maxImage/MaxImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css';


const Portfolio = ({ width, link }) => {
  const [Images, setImages] = useState(null);
  const [BoldImage, setBoldImage] = useState(null)
  const handleClick = (t) => {
    setBoldImage(t)
  }
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
        console.log(res)
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
              {Images?.filter(cat => cat.category===link).map((t) => (
                <>
                  <ImageMain onClick={()=>handleClick(t)}>
                    <LazyLoadImage
                      style={{
                        width: "100%"
                      }}
                      effect ="opacity"
                      key={t.image.asset.id}
                      src={t.image.asset.url}
                      alt={t.title}
                    />
                    {/* <Title>{t.title}</Title> */}
                  </ImageMain>
                </>
              ))}
            </Image>
          </PortfolioMain>
        </>
      ) : (
        <>
          <MaxImage setBoldImage={setBoldImage} Image = {BoldImage}/>
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
  font-family: jost;
  letter-spacing: 1px;
  padding: 2px 12px;
  background-color: white;
`;
const ImageMain = styled.div`
  width: 200px;
  min-width: 200px;
  align-items: center;
  margin: auto;
  flex: 10%;
  cursor: pointer;
`;
const LoadMore = styled.div`
  background-color: black;
  color: white;
  font-family: jost;
  padding: 12px 24px;
  letter-spacing: 4px;
  margin: 40px auto;
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
const Img = styled.img`
  width: 100%;
`;

export default Portfolio;
