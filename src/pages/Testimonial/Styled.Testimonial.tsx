import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

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
    line-height: ${(props) => props.theme.lineHeight.lhLarge};
    text-transform: capitalize;
    margin-top: 7rem;
  }
  div.testimonies__text--sub-text {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.neutralAlt};
    width: 55%;
    margin-top: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
`;
export const StyleTestimoniesContainer = styled.div`
  ${Flexbox};
  margin-top: 2rem;
  div.testimony__container {
    width: 37.69rem;
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
    >div {
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
`;
