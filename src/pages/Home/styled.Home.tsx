import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleHome = styled.div`
  min-height: max-content;
  ${Flexbox};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  position: relative;
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
  > img:first-child,
  > img {
    position: absolute;
    left: 50%;
    bottom: 10%;
    z-index: -1;
  }
  img.twist {
    width: 6rem;
    left: 50%;
    top: 70%;
    @media ${device.md} {
      width: 5rem;
      top: 40%;
      left: 80%;
      transform: rotate(70deg);
    }
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
  @media ${device.md} {
    max-width: 100%;
  }
  div.cta__text-main {
    width: 100%;
    font-size: 4rem;
    font-family: ${(props) => props.theme.fonts.headers};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    align-self: flex-start;
    line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
    color: ${(props) => props.theme.colors.primaryTextColor};
    margin-top: 6rem;
    @media ${device.lg} {
      font-size: 3rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
    }
    @media ${device.md} {
      font-size: 4rem;
      line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
      text-align: center;
    }
    @media ${device.md} {
      font-size: 3rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
    }
    @media ${device.xs} {
      font-size: 2.5rem;
      line-height: 50px;
      margin-top: 8rem;
    }
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
    @media ${device.lg} {
      font-size: 0.8rem;
      line-height: ${(props) => props.theme.lineHeight.lhSmall};
      margin-top: 0.5rem;
    }
    @media ${device.md} {
      font-size: 1rem;
      line-height: ${(props) => props.theme.lineHeight.lhMedium};
      margin-top: 1rem;
      width: 80%;
      align-self: center;
      text-align: center;
    }
    @media ${device.sm} {
      font-size: 0.8rem;
      line-height: ${(props) => props.theme.lineHeight.lhSmall};
      margin-top: 1rem;
      width: 100%;
    }
    @media ${device.xs} {
      font-size: 0.6rem;
      line-height: ${(props) => props.theme.lineHeight.lhSmall};
      margin-top: 1rem;
      width: 100%;
    }
  }

  div.action__buttons {
    ${Flexbox}
    justify-content: flex-start;
    margin-top: 2rem;
    width: 100%;
    /* background: white; */
    @media ${device.md} {
      justify-content: center;
    }
    @media (max-width: 410px) {
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
    }

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
      @media ${device.xs} {
        margin-top: 2rem;
      }
      @media (max-width: 410px) {
        margin: 0;
      }
    }
  }

  div.previews__container {
    ${Flexbox};
    align-self: flex-start;
    /* background: red; */
    width: 100%;
    margin-top: 2rem;
    justify-content: flex-start;
    @media ${device.md} {
      justify-content: center;
    }
    div.preview__img-container {
      /* background: green; */
      > div.positionRelative {
        ${Flexbox};
        position: relative;
        /* background: black; */
        width: 240px;
        img:nth-of-type(1) {
          position: absolute;
          left: 0;
        }
        img:nth-of-type(2) {
          position: absolute;
          left: 40px;
        }
        img:nth-of-type(3) {
          position: absolute;
          left: 80px;
        }
        img:nth-of-type(4) {
          position: absolute;
          left: 120px;
        }
        img:nth-of-type(5) {
          position: absolute;
          left: 160px;
        }
      }
    }
    div.preview__text-container {
      justify-self: flex-start;
      /* background: blue; */

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
  @media ${device.md} {
    width: 70%;
  }
  @media ${device.sm} {
    width: 90%;
  }
  > img:first-child {
    object-fit: cover;
    object-position: top;
    width: 99.7%;
    height: auto;
    margin-top: 4rem;
    @media ${device.lg} {
      margin-top: 9rem;
    }
    @media ${device.md} {
      margin-top: 7rem;
      width: 110%;
    }
  }
  > img:not(:first-child) {
    /* background: red; */
    position: absolute;
    @media ${device.xl} {
      width: 4rem;
      height: auto;
    }
    @media ${device.lg} {
      width: 3rem;
      height: auto;
    }
  }
  img:nth-of-type(2) {
    top: 60%;
    left: -20px;
  }
  img:nth-of-type(3) {
    top: 5%;
    left: -120px;
    @media ${device.xl} {
      left: -60px;
      top: 10%;
      width: 11rem;
    }
    @media ${device.md} {
      width: 7rem;
      left: -20px;
    }
  }
  img:nth-of-type(4) {
    bottom: 3%;
    right: 8%;
  }
  img:nth-of-type(5) {
    top: 45%;
    right: 10%;
    @media ${device.xl} {
      width: 2rem;
    }
    @media ${device.md} {
      width: 1rem;
    }
  }
  img:nth-of-type(6) {
    top: 20%;
    right: 12%;
  }
`;

// div.previews__container {
//   align-self: flex-start;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   position: relative;
//   width: 100%;
//   ${Flexbox};
//   background: red;
//   > div.preview__img-container {
//     /* ${Flexbox}; */
//     /* @media ${device.md} {
//         left
//     } */

//     img:not(:first-child) {
//       position: absolute;
//       left: 40px;
//     }

//     @media ${device.md} {
//       img:nth-of-type(1) {
//         position: absolute;
//         left: 0;
//       }
//     }
//     img:nth-of-type(2) {
//       left: 80px;
//       z-index: 1;
//     }
//     img:nth-of-type(3) {
//       left: 120px;
//       z-index: 2;
//     }
//     img:nth-of-type(4) {
//       left: 160px;
//       z-index: 3;
//     }
//   }
//   div.previews {
//     position: absolute;
//     left: 240px;
//     font-family: ${(props) => props.theme.fonts.headers};
//     @media ${device.xs} {
//       left: 0;
//       top: 50px;
//     }
//     div:first-of-type {
//       font-weight: ${(props) => props.theme.fontWeight.Bold};
//       font-size: 24px;
//       @media ${device.lg} {
//         font-size: 20px;
//       }
//     }
//     div:last-of-type {
//       font-weight: ${(props) => props.theme.fontWeight.semiBold};
//     }
//   }
// }
