import React from "react";
import images from "../../constants/image";
import { StylePartnersContainer } from "./styled.Partners";

const Partners = () => {
  return (
    <StylePartnersContainer>
      <div>
        <img src={images.zoom} alt="zoom-logo-for-partner-section" />
      </div>
      <div>
        {" "}
        <img src={images.stripe} alt="stripe-logo-for-partner-section" />
      </div>
      <div>
        {" "}
        <img src={images.monday} alt="monday-logo-for-partner-section" />
      </div>
      <div>
        {" "}
        <img src={images.slack} alt="slack-logo-for-partner-section" />
      </div>
      <div>
        {" "}
        <img src={images.dropbox} alt="zoom-logo-for-partner-section" />
      </div>
    </StylePartnersContainer>
  );
};

export default Partners;
