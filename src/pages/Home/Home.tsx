import React from "react";

import Partners from "../Partners/Partners";
import { images } from "../../constants";
import {
  StyleHome,
  StyleHomeCtaContainer,
  StyleHeroImage,
} from "./styled.Home";
const Home = () => {
  return (
    <StyleHome id="home">
      <StyleHomeCtaContainer>
        <div className="cta__text-main">
          Grow your skills to advance your career path
        </div>
        <div className="cta__text-sub">
          build your future with our quality education. the best and largest
          all-in-one online tutoring platform in the world
        </div>

        <div className="action__buttons">
          <button>
            {" "}
            Get Started Now{" "}
            <img src={images.ArrowOutward} alt="arrow-outward-tiny-asset" />
          </button>
          <button> Enroll Now</button>
        </div>

        <div className="previews__container">
          <div className="preview__img-container">
            <div className="positionRelative">
              <img src={images.Avartar1} alt="avatar-image-1" />
              <img src={images.Avartar2} alt="avatar-image-2" />
              <img src={images.Avartar3} alt="avatar-image-3" />
              <img src={images.Avartar4} alt="avatar-image-4" />
              <img src={images.Avartar5} alt="avatar-image-5" />
            </div>
          </div>
          <div className="preview__text-container">
            <div>255k+</div>
            <div>Previews</div>
          </div>
        </div>
      </StyleHomeCtaContainer>

      <StyleHeroImage>
        <img src={images.heroImage} alt="hero-asset" />
        <img src={images.stackImage1} alt="tech-stack-asset" />
        <img src={images.stackImage2} alt="tech-stack-asset" />
        <img src={images.stackImage3} alt="tech-stack-asset" />
        <img src={images.stackImage4} alt="tech-stack-asset" />
        <img src={images.stackImage5} alt="tech-stack-asset" />
      </StyleHeroImage>
      <Partners />
      <img
        className="twist"
        src={images.stackImage6}
        alt="svg-asset-decoration"
      />
      <img
        src={images.genDecor3}
        alt="svg-asset-decoration"
        width={"10px"}
        height={"auto"}
      />
      <img
        src={images.genDecor4}
        alt="svg-asset-decoration"
        width={"10px"}
        height={"auto"}
      />
      <img
        src={images.genDecor3}
        alt="svg-asset-decoration"
        width={"10px"}
        height={"auto"}
      />
      <img src={images.genDecor4} alt="svg-asset-decoration" />
      <img src={images.spiralDecor} alt="svg-asset-decoration" />
    </StyleHome>
  );
};

export default Home;
