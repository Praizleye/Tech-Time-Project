import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleTestimonialContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPads};
  padding-bottom: 8rem;
  div.testimonies__heading-text {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-family: ${(props) => props.theme.fonts.headers};
    color: ${(props) => props.theme.colors.neutral};
    font-size: 3.5rem;
    line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
    text-transform: capitalize;
    margin-top: 7rem;
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
  div.testimonies__text--sub-text {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.neutralAlt};
    width: 55%;
    margin-top: 2rem;
    text-align: center;
    text-transform: capitalize;
    line-height: ${(props) => props.theme.lineHeight.lhMedium};

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
`;
export const StyleTestimoniesContainer = styled.div`
  ${Flexbox};
  margin-top: 2rem;

  /* background: red; */
  div.testimony__container {
    /* width: 37.69rem; */
    border-radius: 24px;
    padding: 2rem 1rem;
    margin: 0 1rem;
    background: ${(props) => props.theme.colors.primaryTextColor};
  }
  div.testimony__content-text {
    font-size: 12px;
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
    color: ${(props) => props.theme.colors.neutralAlt};
  }
  div.testifier__bottom-content {
    ${Flexbox}
    margin-top: 0.5rem;
    > div {
      flex-grow: 1;
      div:first-child {
        font-size: 14px;
        font-weight: ${(props) => props.theme.fontWeight.Bold};
        line-height: ${(props) => props.theme.lineHeight.lhSmall};
      }
      div:last-child {
        font-size: 14px;
        font-weight: ${(props) => props.theme.fontWeight.semiBold};
        line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
        color: ${(props) => props.theme.colors.neutralAlt};
      }
    }
  }

  ul.splide__pagination {
    li {
      button.is-active {
        background: ${(props) => props.theme.colors.backgroundPrimary};
      }
    }
  }
`;
