import React from "react";
import {
  StyleAboutContainer,
  StyleAboutContainerOne,
  StyleAboutTextContentContainer,
  StyleAboutImageContentContainer,
  StyleAboutContainerSubTwo,
  StyleAboutContainerTwo,
  StyleAboutImageContentContainerTwo,
} from "./styled.About";
import { images } from "../../constants";
const About = () => {
  return (
    <StyleAboutContainer id="about">
      <StyleAboutContainerOne>
        <StyleAboutTextContentContainer>
          <div className="about__text-heading">
            High quality video, audio & live classes
            <img src={images.decorIcon4} alt="decor-for-heading" />
          </div>
          <div className="about__text--sub-text">
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </div>
          <button className="btn__view-courses">view courses</button>
          <div className="class__options">
            <button className="class class__option-1">
              <img src={images.buttonIcon1} alt="icon-for-btn" />

              <div>audio classes</div>
            </button>
            <button className="class class__option-2">
              <img src={images.buttonIcon2} alt="icon-for-btn" />
              <div>live classes</div>
            </button>
            <button className="class class__option-3">
              <img src={images.buttonIcon3} alt="icon-for-btn" />
              <div>recorded classes</div>
            </button>
            <button className="class class__option-4">
              <img src={images.buttonIcon4} alt="icon-for-btn" />
              <div>50+ notes</div>
            </button>
          </div>
        </StyleAboutTextContentContainer>
        <StyleAboutImageContentContainer>
          <img src={images.aboutImage1} alt="img-about-section" />
          <img src={images.aboutImage2} alt="img-about-section" />
          <img
            src={images.decorIcon2}
            alt="dotted-decoration-svg-decor-icon"
            width={"45px"}
            height={"auto"}
          />
          <div>
            <div>255k+ Enrolled Students</div>
            <div className="avatar__img-container">
              <img src={images.Avartar1} alt="avatar-image-1" />
              <img src={images.Avartar2} alt="avatar-image-2" />
              <img src={images.Avartar3} alt="avatar-image-3" />
              <img src={images.Avartar4} alt="avatar-image-4" />
              <img src={images.Avartar5} alt="avatar-image-5" />
            </div>
          </div>
        </StyleAboutImageContentContainer>
      </StyleAboutContainerOne>

      <StyleAboutContainerTwo>
        <img src={images.genDecor1} alt="decor-img" />
        <img src={images.genDecor6} alt="decor-img" />
        <StyleAboutContainerSubTwo>
          <div className="about__text-heading">
            This is why we are best from others
          </div>
          <div className="about__text--sub-text">
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </div>
          <div>
            <img src={images.aboutImage3} alt="about-asset-img-2" />
          </div>
        </StyleAboutContainerSubTwo>
        <StyleAboutImageContentContainerTwo>
          <div className="cards__container">
            <div className="card__container">
              <img src={images.aboutIcon1} alt="big-img-descriptive" />
              <div className="card__text-content">
                <div>experienced mentors</div>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </div>
            </div>
            <div className="card__container">
              <img src={images.aboutIcon2} alt="" />
              <div className="card__text-content">
                <div>one-on-one meetings</div>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </div>
            </div>
            <div className="card__container">
              <img src={images.aboutIcon3} alt="" />
              <div className="card__text-content">
                <div>one-On-One meetings</div>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </div>
            </div>
            <div className="card__container">
              <img src={images.aboutIcon4} alt="" />
              <div className="card__text-content">
                <div>one-on-one meetings</div>
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </div>
            </div>
          </div>
        </StyleAboutImageContentContainerTwo>
      </StyleAboutContainerTwo>
    </StyleAboutContainer>
  );
};

export default About;
