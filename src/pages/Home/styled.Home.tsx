import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

export const StyleHome = styled.div`
  min-height: max-content;
  ${Flexbox};
  padding: ${(props) => props.theme.paddings.navPads};
  position: relative;
  > img:first-child,
  > img {
    position: absolute;
    left: 50%;
    bottom: 10%;
  }
  > img:nth-of-type(2) {
    top: 20%;
    left: 40%;
    z-index: -1;
  }
  > img:nth-of-type(3) {
    top: 20%;
    left: 10%;
    z-index: -1;
  }
  > img:nth-of-type(4) {
    z-index: -1;
  }
  > img:nth-of-type(5) {
    top: 40%;
    left: 55%;
    z-index: -1;
  }
  > img:nth-of-type(6) {
    top: 43%;
    left: 0;
    z-index: -1;
  }
`;
export const StyleHomeCtaContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  max-width: 60%;
  div.cta__text-main {
    width: 100%;
    font-size: 4rem;
    font-family: ${(props) => props.theme.fonts.headers};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    align-self: flex-start;
    line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
    color: ${(props) => props.theme.colors.primaryTextColor};
    margin-top: 6rem;
  }
  div.cta__text-sub {
    text-transform: capitalize;
    width: 70%;
    font-size: 1rem;
    line-height: ${(props) => props.theme.lineHeight.lhMedium};
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    align-self: flex-start;
    margin-top: 1rem;
    color: #e7e7e7;
  }

  div.action__buttons {
    ${Flexbox}
    align-self: flex-start;
    margin-top: 2rem;

    button:nth-of-type(1) {
      color: ${(props) => props.theme.colors.primaryTextColor};
      background: ${(props) => props.theme.colors.backgroundPrimary};
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      border: 1px solid ${(props) => props.theme.colors.primaryTextColor};
      img {
        padding-left: 0.4rem;
      }
    }
    button:nth-of-type(2) {
      width: 9rem;
      height: 3.375rem;
      color: ${(props) => props.theme.colors.primary};
      background: ${(props) => props.theme.colors.text};
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      margin-left: 2rem;
    }
  }
  div.previews__container {
    align-self: flex-start;
    margin-top: 2rem;
    position: relative;
    ${Flexbox}
    img:not(:first-child) {
      position: absolute;
      left: 40px;
    }
    img:nth-of-type(2) {
      left: 80px;
      z-index: 1;
    }
    img:nth-of-type(3) {
      left: 120px;
      z-index: 2;
    }
    img:nth-of-type(4) {
      left: 160px;
      z-index: 3;
    }
    div.previews {
      position: absolute;
      left: 240px;
      font-family: ${(props) => props.theme.fonts.headers};
      div:first-of-type {
        font-weight: ${(props) => props.theme.fontWeight.Bold};
        font-size: 24px;
      }
      div:last-of-type {
        font-weight: ${(props) => props.theme.fontWeight.semiBold};
      }
    }
  }
`;

export const StyleHeroImage = styled.div`
  flex: 1;
  /* background: red; */
  position: relative;
  width: 40%;
  > img:first-child {
    object-fit: cover;
    object-position: top;
    width: 99.7%;
    height: auto;
    margin-top: 4rem;
  }
  > img:not(:first-child) {
    position: absolute;
  }
  img:nth-of-type(2) {
    top: 60%;
    left: -50px;
  }
  img:nth-of-type(3) {
    top: 5%;
    left: -120px;
  }
  img:nth-of-type(4) {
    bottom: 3%;
    right: 5%;
  }
  img:nth-of-type(5) {
    top: 45%;
    right: 10%;
  }
  img:nth-of-type(6) {
    top: 15%;
    right: 2%;
  }
`;
