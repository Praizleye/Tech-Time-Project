import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

export const NavStyle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 6rem;
  padding: ${(props) => props.theme.paddings.navPads};
  ${Flexbox};
  position: fixed;
  width: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 2;

  ul {
    ${Flexbox};
    line-height: ${(props) => props.theme.lineHeight.lhSmall};
    li {
      padding: ${(props) => props.theme.paddings.navItemPads};
      list-style: none;
      a {
        text-transform: capitalize;
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        &.active {
          font-weight: ${(props) => props.theme.fontWeight.Bold};
        }
        &.inactive {
          color: ${(props) => props.theme.colors.navInactive};
        }
      }
    }
    button {
      width: 9rem;
      height: 3.375rem;
      color: ${(props) => props.theme.colors.primary};
      background: ${(props) => props.theme.colors.text};
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      margin-left: 1rem;
    }
  }
`;
