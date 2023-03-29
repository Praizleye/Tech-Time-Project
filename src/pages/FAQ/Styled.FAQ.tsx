import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleFAQContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  padding-bottom: 10rem;

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
  div.faq__heading-text {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-family: ${(props) => props.theme.fonts.headers};
    color: ${(props) => props.theme.colors.neutral};
    font-size: 3.5rem;
    line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
    padding-top: 3rem;
    text-transform: capitalize;
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
  div.faq__text--sub-text {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.neutralAlt};
    width: 60%;
    margin-top: 2rem;
    text-align: center;
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
  div.faqs__container {
    ${Flexbox}
    flex-direction: column;
    width: 80%;
    margin-bottom: 4rem;
    @media ${device.md} {
      width: 100%;
    }
    div.faq__container {
      align-self: flex-start;
      width: 100%;
      /* margin: 2rem auto; */
      div.faq__title {
        margin-top: 3rem;
        font-size: 24px;
        line-height: ${(props) => props.theme.lineHeight.lhMedium};
        font-weight: ${(props) => props.theme.fontWeight.Bold};
        color: ${(props) => props.theme.colors.secondaryTextColor};
        transition: all 0.3s ease-in-out;
        height: 4rem;
        padding: 0 2rem;
        @media ${device.md} {
          font-size: 20px;
        }
        @media ${device.sm} {
          font-size: 14px;
        }
        :hover {
          cursor: pointer;
          background-color: ${(props) => props.theme.colors.hoverCard};
        }
        ${Flexbox};
        cursor: pointer;
      }
      div.faq__active.faq__title {
        color: ${(props) => props.theme.colors.primary};
      }
      div.faq__content {
        padding: 0.5rem 2rem 0;
      }
    }
  }
`;
