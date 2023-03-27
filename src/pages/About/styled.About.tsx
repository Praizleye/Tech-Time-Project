import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

export const StyleAboutContainer = styled.div`
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  margin-top: 9rem;
  padding: ${(props) => props.theme.paddings.navPads};
  ${Flexbox}
  flex-direction: column;
  z-index: -2;
`;
export const StyleAboutContainerOne = styled.div`
  ${Flexbox}
`;

export const StyleAboutTextContentContainer = styled.div`
  ${Flexbox}
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  padding-top: 7rem;
  justify-content: center;
  div.about__text-heading {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-family: ${(props) => props.theme.fonts.headers};
    color: ${(props) => props.theme.colors.neutral};
    font-size: 3.5rem;
    line-height: ${(props) => props.theme.lineHeight.lhLarge};
    position: relative;
    > img {
      position: absolute;
      top: -35px;
      left: -40px;
    }
  }
  div.about__text--sub-text {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.neutralAlt};
    width: 80%;
    margin-top: 2rem;
  }
  button.btn__view-courses {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.primaryTextColor};
    background: ${(props) => props.theme.colors.backgroundPrimary};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    margin-top: 2rem;
  }

  div.class__options {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-columns: auto auto;
    grid-gap: 1rem;

    /* background: red; */
    width: 60%;
    button.class {
      color: ${(props) => props.theme.colors.neutral};
      background: ${(props) => props.theme.colors.partnersbackground};
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      text-transform: capitalize;
      &:hover {
        transform: scaleX(1.1);
        font-weight: ${(props) => props.theme.fontWeight.Bold};
      }
    }
  }
`;

export const StyleAboutImageContentContainer = styled.div`
  /* background: red; */
  width: 45%;
  position: relative;
  > img:first-of-type {
    width: 90%;
    height: auto;
    margin-left: 10%;
  }
  > img:nth-of-type(2) {
    position: absolute;
    left: -20%;
    top: 70%;
    width: 360px;
    height: auto;
  }
  > img:nth-of-type(3) {
    position: absolute;
    bottom: -40px;
    right: 0;
    z-index: 1;
  }

  > div {
    position: absolute;
    top: 30%;
    left: -10%;
    background: ${(props) => props.theme.colors.backgroundWhite};
    padding: ${(props) => props.theme.paddings.customPads};
    /* background-color: red; */
    width: 200px;
    border-radius: 8px;
    div {
      color: ${(props) => props.theme.colors.secondaryTextColor};
      text-align: center;
      font-size: 12px;
      margin-bottom: 10px;
      font-weight: ${(props) => props.theme.fontWeight.Bold};
    }
    div.avatar__img-container {
      position: relative;
      ${Flexbox};
      justify-content: flex-start;
      img {
        width: 44.86px;
        height: 44.86px;
      }
      img:not(:first-child) {
        position: absolute;
        left: 30px;
      }
      img:nth-of-type(2) {
        left: 60px;
        z-index: 1;
      }
      img:nth-of-type(3) {
        left: 90px;
        z-index: 2;
      }
      img:nth-of-type(4) {
        left: 120px;
        z-index: 3;
      }
    }
  }
`;

export const StyleAboutContainerTwo = styled(StyleAboutContainerOne)`
  margin-top: 5rem;
  min-height: 100vh;
  position: relative;
  > img {
    position: absolute;
    right: 30%;
    top: 0;
  }

  > img:nth-of-type(2) {
    position: absolute;
    right: 5%;
    top: 85%;
  }
`;
export const StyleAboutContainerSubTwo = styled(StyleAboutTextContentContainer)`
  width: 45%;
  /* background-color: green; */
  padding: 5rem 0;
  img {
    width: 540px;
    height: auto;
    margin-top: 2rem;
  }
`;
export const StyleAboutImageContentContainerTwo = styled.div`
  div.cards__container {
    /* background: blue; */
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-items: center;
    row-gap: 2rem;
    padding: 2rem 0;
    div.card__container {
      width: 75%;
      background: white;
      height: max-content;
      border-radius: 7px;
      padding: 2rem 1rem 2rem;
      div.card__text-content {
        padding-top: 1rem;
        font-size: 10px;
        line-height: ${(props) => props.theme.lineHeight.lhSmall};
        color: ${(props) => props.theme.colors.neutralAlt};
        > div {
          text-transform: capitalize;
          color: ${(props) => props.theme.colors.textBlack};
          font-weight: ${(props) => props.theme.fontWeight.Bold};
          font-size: 14px;
          line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
          padding-bottom: 0.5rem;
        }
      }
      :hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.hoverCard};
      }
    }
  }
`;
