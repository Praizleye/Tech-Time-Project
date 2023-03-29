import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";
export const StyleFooterContainer = styled.div`
  ${Flexbox};
  justify-content: center;
  background: ${(props) => props.theme.colors.neutral};
  min-height: 60vh;
  padding: ${(props) => props.theme.paddings.navPads};

  > div.footer__container {
    ${Flexbox};
    justify-content: space-between;
    width: 100%;
    margin: 4rem 2rem;

    @media ${device.lg} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1rem;
      justify-content: space-between;
      align-items: space-between;
    }
    @media ${device.md} {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-top: 4rem;
    }
    @media ${device.sm} {
      grid-template-columns: 1fr;
    }
    div.footer__segment-1 {
      @media ${device.sm} {
        margin: 2rem 0;
      }
    }
    div.footer__segment-1,
    div.footer__segment-2,
    div.footer__segment-3,
    div.footer__segment-4 {
      align-self: flex-start;
      max-width: auto;
      div.reach__text {
        width: auto;
      }

      div.social__icons-container {
        img {
          margin-top: 1rem;
          padding-right: 1rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          :hover {
            transform: translateY(-10px);
          }
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
        @media ${device.md} {
          font-size: 26px;
        }
      }
      div:not(:nth-child(1)) {
        padding: 1rem 0 0;
        cursor: pointer;
        text-transform: capitalize;
      }
      div:nth-child(2) {
        margin: 1.5rem 0 0;
        @media ${device.sm} {
          margin: 1rem 0 0;
          width: 100%;
        }
      }
    }

    div.footer__segment-4 {
      max-width: auto;
      margin-bottom: 3rem;
      div {
        ${Flexbox};
        input {
          display: block;
          height: 2.875rem;
          border: 0;
          border: 1.5px solid ${(props) => props.theme.colors.primary};
          padding: 0 1rem;
          flex-grow: 1;
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
          /* flex-grow: 1; */

          /* width: 100%; */
          :hover {
            transform: scale(1);
          }
        }
      }
    }
  }
`;
