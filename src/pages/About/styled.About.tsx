import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleAboutContainer = styled.div`
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  margin-top: 9rem;
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  ${Flexbox};
  flex-direction: column;
  z-index: -2;
  @media ${device.xl} {
    padding: ${(props) => props.theme.paddings.navPadsXL};
  }
  @media ${device.lg} {
    padding: ${(props) => props.theme.paddings.navPadsL};
  }
  @media ${device.md} {
    padding: ${(props) => props.theme.paddings.navPadsMD};
    flex-direction: column;
  }
  @media ${device.sm} {
    padding: ${(props) => props.theme.paddings.navPadsSM};
  }
  @media ${device.xs} {
    padding: ${(props) => props.theme.paddings.navPadsXSM};
  }
`;
export const StyleAboutContainerOne = styled.div`
  ${Flexbox}
  @media ${device.md} {
    flex-direction: column;
  }
`;

export const StyleAboutTextContentContainer = styled.div`
  ${Flexbox}
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  padding-top: 7rem;
  justify-content: center;
  @media ${device.md} {
    width: 100%;
  }
  div.about__text-heading {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-family: ${(props) => props.theme.fonts.headers};
    color: ${(props) => props.theme.colors.neutral};
    font-size: 3.5rem;
    line-height: ${(props) => props.theme.lineHeight.lhLarge};
    position: relative;

    @media ${device.lg} {
      font-size: 3rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
    }
    @media ${device.md} {
      font-size: 4rem;
      line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
      text-align: center;
    }
    @media ${device.sm} {
      font-size: 3rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
      /* margin: ${(props) => props.theme.paddings.navPadsSM}; */
    }
    @media ${device.xs} {
      font-size: 2.5rem;
      line-height: 50px;
      margin: 1rem 2rem 0;
      padding: ${(props) => props.theme.paddings.navPadsSM};
    }
    > img {
      position: absolute;
      top: -2.1875rem;
      left: -2.5rem;
      z-index: -1;
      @media ${device.md} {
        top: -1.5rem;
        left: -1rem;
        width: 3rem;
      }
    }
  }
  div.about__text--sub-text {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.neutralAlt};
    width: 80%;
    margin-top: 2rem;
    @media ${device.lg} {
      font-size: 0.8rem;
      line-height: ${(props) => props.theme.lineHeight.lhSmall};
      margin-top: 0.5rem;
    }
    @media ${device.md} {
      font-size: 1rem;
      line-height: ${(props) => props.theme.lineHeight.lhMedium};
      margin-top: 1rem;
      width: 70%;
      align-self: center;
      text-align: center;
    }
    @media ${device.sm} {
      font-size: 0.8rem;
      line-height: ${(props) => props.theme.lineHeight.lhSmall};
      margin-top: 1rem;
      width: 90%;
    }
    @media ${device.xs} {
      font-size: 0.6rem;
      line-height: ${(props) => props.theme.lineHeight.lhSmall};
      /* margin: 1rem 2rem 0; */
      width: 70%;
      /* padding: ${(props) => props.theme.paddings.navPadsSM}; */
    }
  }
  button.btn__view-courses {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.primaryTextColor};
    background: ${(props) => props.theme.colors.backgroundPrimary};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    margin-top: 2rem;

    @media ${device.md} {
      align-self: center;
      text-align: center;
    }
  }

  div.class__options {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;

    grid-gap: 1rem;
    width: 60%;
    @media ${device.md} {
      width: max-content;
      place-items: center;
      margin: 3rem auto;
    }
    @media (max-width: 500px) {
      grid-template-columns: auto;
    }

    button.class {
      color: ${(props) => props.theme.colors.neutral};
      background: ${(props) => props.theme.colors.partnersbackground};
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      text-transform: capitalize;
      width: max-content;
      ${Flexbox};
      gap: 10px;

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
  @media ${device.md} {
    margin-top: 3rem;
    width: 75%;
  }

  > img:first-of-type {
    width: 90%;
    height: auto;
    margin-left: 10%;
    @media ${device.md} {
      right: 1rem;
    }
  }
  > img:nth-of-type(2) {
    position: absolute;
    left: -20%;
    top: 70%;
    width: 360px;
    height: auto;
    @media ${device.lg} {
      width: 240px;
      left: -5%;
    }
    @media ${device.md} {
      width: 280px;
      left: -10%;
    }
    @media ${device.sm} {
      width: 174px;
      left: -10%;
    }
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
    width: 200px;
    border-radius: 8px;
    @media ${device.md} {
      padding: 0 0.5rem;
      width: 150px;
    }
    /* @media (max-width: 700px) {
      left: -15%;
      width: 150px;
    } */

    @media ${device.sm} {
      left: -15%;
      width: 150px;
    }
    @media ${device.xs} {
      left: -15%;
      width: 100px;
    }

    div {
      color: ${(props) => props.theme.colors.secondaryTextColor};
      text-align: center;
      font-size: 12px;
      margin-bottom: 10px;
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      @media ${device.md} {
        font-size: 8px;
      }
      @media ${device.sm} {
        font-size: 6px;
      }
    }
    div.avatar__img-container {
      position: relative;
      ${Flexbox};
      justify-content: flex-start;
      img {
        width: 44.86px;
        height: 44.86px;
        @media ${device.md} {
          width: 34.86px;
          height: 34.86px;
        }
        @media ${device.sm} {
          width: 24.86px;
          height: 24.86px;
          margin-left: 0.5rem;
        }
        @media ${device.xs} {
          width: 14.86px;
          height: 14.86px;
        }
      }
      img:not(:first-child) {
        position: absolute;
        left: 30px;
        @media ${device.md} {
          left: 25px;
        }
        @media ${device.xs} {
          left: 10px;
        }
      }
      img:nth-of-type(2) {
        left: 60px;
        z-index: 1;
        @media ${device.md} {
          left: 45px;
        }
        @media ${device.xs} {
          left: 20px;
        }
      }
      img:nth-of-type(3) {
        left: 90px;
        z-index: 2;
        @media ${device.md} {
          left: 65px;
        }
        @media ${device.xs} {
          left: 30px;
        }
      }
      img:nth-of-type(4) {
        left: 120px;
        z-index: 3;
        @media ${device.md} {
          left: 85px;
        }
        @media ${device.xs} {
          left: 40px;
        }
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
  padding: 5rem 0;
  ${Flexbox};
  flex-direction: column;
  /* background-color: red; */
  @media ${device.md} {
    width: 100%;
  }
  div.about__text--sub-text {
    align-self: flex-start;
    @media ${device.md} {
      width: 80%;
      align-self: center;
    }
  }
  div {
    @media ${device.md} {
      ${Flexbox};
      justify-content: center;
    }

    img {
      width: 540px;
      height: auto;
      margin-top: 2rem;
      @media ${device.lg} {
        width: 300px;
      }
      @media ${device.md} {
        width: 500px;
        align-self: center;
        margin-top: 4rem;
      }
      @media ${device.sm} {
        width: 80%;
      }
    }
  }
`;
export const StyleAboutImageContentContainerTwo = styled.div`
  div.cards__container {
    /* background: blue; */
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-items: center;
    row-gap: 2rem;
    padding: 2rem 1rem;
    @media ${device.sm} {
      grid-template-columns: auto;
    }
    div.card__container {
      width: 75%;
      background: white;
      height: max-content;
      border-radius: 7px;
      padding: 2rem 1rem 2rem;
      /* background-color: green; */
      @media ${device.lg} {
        width: 90%;
      }
      @media ${device.sm} {
        width: 80%;
      }
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
