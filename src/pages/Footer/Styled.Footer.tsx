import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

export const StyleFooterContainer = styled.div`
  ${Flexbox};
  /* align-items: flex-start; */
  background: ${(props) => props.theme.colors.neutral};
  min-height: 60vh;
  padding: ${(props) => props.theme.paddings.navPads};
  > div.footer__container {
    ${Flexbox};
    justify-content: space-between;
    width: 100%;
    margin: 0 2rem;

    div.footer__segment-1,
    div.footer__segment-2,
    div.footer__segment-3,
    div.footer__segment-4 {
      align-self: flex-start;
      max-width: 25%;

      img:not(:first-child) {
        margin-top: 1rem;
        padding: 0 1rem 0 0;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        :hover {
          transform: translateY(-10px);
        }
      }
    }

    div.footer__segment-2,
    div.footer__segment-3,
    div.footer__segment-4 {
      div:nth-child(1) {
        font-family: ${(props) => props.theme.fonts.headers};
        font-size: 32px;
        font-weight: ${(props) => props.theme.fontWeight.Bold};
        line-height: ${(props) => props.theme.lineHeight.lhMedium};
        text-transform: capitalize;
      }
      div:not(:nth-child(1)) {
        padding: 1rem 0 0;
        cursor: pointer;
      }
      div:nth-child(2) {
        margin: 1.5rem 0 0;
      }
    }

    div.footer__segment-4 {
      max-width: auto;
      div {
        ${Flexbox};
        input {
          display: block;
          height: 2.875rem;
          border: 0;
          border: 1.5px solid ${(props) => props.theme.colors.primary};
          padding: 0 1rem;
          :focus {
            border: 0;
            outline: none;
          }
        }
        button {
          height: 2.875rem;
          border-radius: 0;
          background: ${(props) => props.theme.colors.backgroundPrimary};
          color: ${(props) => props.theme.colors.text};
          font-weight: ${(props) => props.theme.fontWeight.Bold};
          line-height: ${(props) => props.theme.lineHeight.lhMedium};
          font-size: 14px;
          text-transform: capitalize;
          ${Flexbox};
          /* width: 100%; */
          :hover {
            transform: scale(1);
          }
        }
      }
    }
  }
`;
