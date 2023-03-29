import React from "react";
import { StyleFooterContainer } from "./Styled.Footer";
import { images } from "../../constants";
const Footer = () => {
  return (
    <StyleFooterContainer>
      <div className="footer__container">
        <div className="footer__segment footer__segment-1">
          <img src={images.Logo} alt="logo-footer" />
          <div className="reach__text">
            Reach out to us on any of our social media networks
          </div>
          <div className="social__icons-container">
            <img src={images.socialIcon1} alt="social-media-icons" />
            <img src={images.socialIcon2} alt="social-media-icons" />
            <img src={images.socialIcon3} alt="social-media-icons" />
            <img src={images.socialIcon4} alt="social-media-icons" />
            <img src={images.socialIcon5} alt="social-media-icons" />
          </div>
        </div>
        <div className="footer__segment footer__segment-2">
          <div>useful links</div>
          <div>Home</div>
          <div>About us</div>
          <div>our courses</div>
          <div>Testimonials</div>
          <div>our community</div>
        </div>
        <div className="footer__segment footer__segment-3">
          <div>community</div>
          <div>Help center</div>
          <div>Partner</div>
          <div>suggestions</div>
          <div>blog</div>
          <div>newsletter</div>
        </div>
        <div className="footer__segment footer__segment-4">
          <div>Subscribe us</div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="@gmail.com"
            />
            <button>send </button>
          </div>
        </div>
      </div>
    </StyleFooterContainer>
  );
};

export default Footer;
