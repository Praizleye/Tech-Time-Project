import React from "react";
import {
  StyleTestimonialContainer,
  StyleTestimoniesContainer,
} from "./Styled.Testimonial";
import { images } from "../../constants";

const Testimonial = () => {
  return (
    <StyleTestimonialContainer>
      <div className="testimonies__heading-text">
        what our clients are saying
      </div>
      <div className="testimonies__text--sub-text">
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </div>

      <StyleTestimoniesContainer>
        <div className="testimony__container">
          <div className="testimony__content-text">
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition. high-defination video is
            video of higher resolution and quality than standard definition.
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </div>
          <div className="testifier__bottom-content">
            <img src={images.Avartar1} alt="avartar-images-of-testifiers" />
            <div>
              <div className="testifiers__name">Bella Moon</div>
              <div className="testifiers__tech-stack">Product Designer</div>
            </div>
          </div>
        </div>
        <div className="testimony__container">
          <div className="testimony__content-text">
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition. high-defination video is
            video of higher resolution and quality than standard definition.
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </div>
          <div className="testifier__bottom-content">
            <img src={images.Avartar2} alt="avartar-images-of-testifiers" />
            <div>
              <div className="testifiers__name">Bella Moon</div>
              <div className="testifiers__tech-stack">Product Designer</div>
            </div>
          </div>
        </div>
        <div className="testimony__container">
          <div className="testimony__content-text">
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition. high-defination video is
            video of higher resolution and quality than standard definition.
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </div>
          <div className="testifier__bottom-content">
            <img src={images.Avartar3} alt="avartar-images-of-testifiers" />
            <div>
              <div className="testifiers__name">Bella Moon</div>
              <div className="testifiers__tech-stack">Product Designer</div>
            </div>
          </div>
        </div>
        <div className="testimony__container">
          <div className="testimony__content-text">
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition. high-defination video is
            video of higher resolution and quality than standard definition.
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </div>
          <div className="testifier__bottom-content">
            <img src={images.Avartar4} alt="avartar-images-of-testifiers" />
            <div>
              <div className="testifiers__name">Bella Moon</div>
              <div className="testifiers__tech-stack">Product Designer</div>
            </div>
          </div>
        </div>
        <div className="testimony__container">
          <div className="testimony__content-text">
            high-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition. hbuild your future
            with our quality education. the best and largest all-in-one online
            tutoring platform in the worldd definition. high-defination video is
            video of higher resolution and quality than standard definition.
            build your future with our quality education. the best and largest
            all-in-one online tutoring platform in the world
          </div>
          <div className="testifier__bottom-content">
            <img src={images.Avartar1} alt="avartar-images-of-testifiers" />

            <div>
              <div className="testifiers__name">Bella Moon</div>
              <div className="testifiers__tech-stack">Product Designer</div>
            </div>
          </div>
        </div>
      </StyleTestimoniesContainer>
    </StyleTestimonialContainer>
  );
};

export default Testimonial;
