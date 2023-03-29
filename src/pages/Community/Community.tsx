import React from "react";
import { StyleCommunityContainer } from "./styled.Community";
import image from "../../constants/image";
const Community = () => {
  return (
    <StyleCommunityContainer id="community">
      <div>join our community</div>
      <div>
        Are you ready to connect with the future talent of the tech world
      </div>
      <div>meet up with other techstars and grow together</div>
      <div>
        <img src={image.testimonialImage10} alt="background-img" />
        <img src={image.testimonialImage1} alt="community-in-view" />
        <img src={image.testimonialImage2} alt="community-in-view" />
        <img src={image.testimonialImage3} alt="community-in-view" />
        <img src={image.testimonialImage4} alt="community-in-view" />
        <img src={image.testimonialImage5} alt="community-in-view" />
        <img src={image.testimonialImage6} alt="community-in-view" />
        <img src={image.testimonialImage7} alt="community-in-view" />
        <img src={image.testimonialImage8} alt="community-in-view" />
        <img src={image.testimonialImage9} alt="community-in-view" />
      </div>
      <button>Join Our Community</button>
    </StyleCommunityContainer>
  );
};

export default Community;
