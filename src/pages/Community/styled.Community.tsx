import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";
export const StyleCommunityContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  justify-content: center;

  /* align-items: flex-start; */
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPadsXXL};

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
    min-height: max-content;
  }

  > div:first-child {
    font-size: 16px;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    line-height: ${(props) => props.theme.lineHeight.lhSmall};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 4rem;
    color: ${(props) => props.theme.colors.text};
    @media ${device.md} {
      font-size: 10px;
    }
    @media ${device.sm} {
      font-size: 8px;
      margin-top: 3rem;
    }
  }
  > div:nth-of-type(2) {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-family: ${(props) => props.theme.fonts.headers};
    color: ${(props) => props.theme.colors.text};
    font-size: 3.5rem;
    line-height: ${(props) => props.theme.lineHeight.lhLarge};
    text-align: center;
    @media ${device.lg} {
      font-size: 3rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
    }
    @media ${device.md} {
      font-size: 4rem;
      line-height: ${(props) => props.theme.lineHeight.lhMedium};
      text-align: center;
    }
    @media ${device.md} {
      font-size: 3rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
    }
    @media ${device.xs} {
      font-size: 2.5rem;
      line-height: 50px;
      margin-top: 1rem;
    }
  }
  > div:nth-of-type(3) {
    font-size: 16px;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    line-height: ${(props) => props.theme.lineHeight.lhSmall};
    letter-spacing: 0.1em;
    text-transform: capitalize;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.text};
    @media ${device.md} {
      font-size: 10px;
    }
    @media ${device.sm} {
      font-size: 8px;
    }
  }
  > div:nth-of-type(4) {
    ${Flexbox};
    justify-content: center;
    width: 100%;
    position: relative;
    > img:first-child {
      width: 50%;
      height: auto;
      opacity: 0.5;
      @media ${device.md} {
        width: 100%;
      }
    }
    > img:not(:first-child) {
      position: absolute;
      @media ${device.sm} {
        width: 2rem;
      }
    }
    img:nth-of-type(2) {
      left: 20%;
      top: 10%;
    }
    img:nth-of-type(3) {
      bottom: -5%;
      left: 50%;
    }
    /* img:nth-of-type(3) {
      left: 50%;
      top: 10%;
    } */
    img:nth-of-type(4) {
      right: 20%;
      top: 10%;
    }
    img:nth-of-type(5) {
      left: 50%;
      top: 10%;
      transform: translate(-50%, -10%);
    }
    img:nth-of-type(6) {
      right: 20%;
      bottom: 20%;
    }
    img:nth-of-type(7) {
      left: 25%;
      top: 58%;
    }
    img:nth-of-type(8) {
      right: 30%;
      top: 20%;
    }
    img:nth-of-type(9) {
      left: 30%;
      bottom: 0;
    }
  }
  button {
    margin-top: 4rem;
    margin-bottom: 4rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
  }
`;
