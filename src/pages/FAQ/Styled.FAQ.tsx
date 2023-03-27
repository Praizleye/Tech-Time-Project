import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

export const StyleFAQContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPads};
  padding-bottom: 10rem;
  div.faq__heading-text {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-family: ${(props) => props.theme.fonts.headers};
    color: ${(props) => props.theme.colors.neutral};
    font-size: 3.5rem;
    line-height: ${(props) => props.theme.lineHeight.lhLarge};
    padding-top: 3rem;
    text-transform: capitalize;
  }
  div.faq__text--sub-text {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.neutralAlt};
    width: 60%;
    margin-top: 2rem;
    text-align: center;
  }
  div.faqs__container {
    ${Flexbox}
    flex-direction: column;
    width: 80%;
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
