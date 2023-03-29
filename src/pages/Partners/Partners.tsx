import images from "../../constants/image";
import { StylePartnersContainer } from "./styled.Partners";

const Partners = () => {
  return (
    <StylePartnersContainer>
      <div>zoom</div>
      <div>stripe</div>
      <div>
        <img src={images.monday} alt="monday-logo" />
        monday.<sub>com</sub>
      </div>
      <div>
        <img src={images.slack} alt="slack-logo" />
        slack
      </div>
      <div>
        <img src={images.dropbox} alt="dropbox-logo" />
        Dropbox
      </div>
    </StylePartnersContainer>
  );
};

export default Partners;
