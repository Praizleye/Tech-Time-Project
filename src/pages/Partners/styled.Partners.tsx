import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StylePartnersContainer = styled.div`
  ${Flexbox};
  justify-content: center;
  height: 9.875rem;
  padding: ${(props) => props.theme.paddings.navPads};
  background: ${(props) => props.theme.colors.partnersbackground};
  position: absolute;
  width: 100%;
  bottom: -9rem;
  left: 0;
  @media ${device.lg} {
    height: 7rem;
  }
  @media ${device.sm} {
    flex-wrap: wrap;
  }
  > div {
    padding: 0 2rem;
    font-size: 2.8rem;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
    ${Flexbox};
    justify-content: center;
    align-items: center;
    @media ${device.lg} {
      font-size: 1.5rem;
      padding: 0 1rem;
    }
    @media ${device.md} {
      font-size: 1.25rem;
      padding: 0 1rem;
    }

    /* @media ${device.sm} {
      font-size: 1rem;
      padding: 0 0.5rem;
    }
    @media ${device.xs} {
      font-size: 1rem;
      padding: 0 0.15rem;
    } */
    img {
      @media ${device.lg} {
        width: 1.5rem;
        padding-right: 0.2rem;
      }
      @media ${device.md} {
        width: 1.25rem;
        padding-right: 0.2rem;
      }
      /* @media ${device.sm} {
        width: 1rem;
        padding-right: 0.2rem;
      }
      @media ${device.xs} {
        width: 1rem;
        padding-right: 0.1rem;
      } */
    }
  }
`;
