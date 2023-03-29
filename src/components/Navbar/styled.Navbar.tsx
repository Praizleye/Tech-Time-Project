import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

type ShowNavProps = {
  showNav: number;
};
type NavBarProps = {
  clickNav?: boolean;
  position?: string;
};

export const NavStyle = styled.div<ShowNavProps>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 6rem;
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  ${Flexbox};
  position: fixed;
  width: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 10;
  opacity: ${(props) => props.showNav};
  transition: opacity 0.3s ease-in-out;
  ul.big__screens {
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

    @media ${device.md} {
      display: none;
    }
  }
  /* ul.small__screens {
  
  } */

  @media ${device.xl} {
    padding: ${(props) => props.theme.paddings.navPadsXL};
  }
  @media ${device.lg} {
    padding: ${(props) => props.theme.paddings.navPadsL};
  }
  @media ${device.md} {
    padding: ${(props) => props.theme.paddings.navPadsMD};
  }
`;

export const NavItemsContainer = styled.div<NavBarProps>`
  ${Flexbox};
  line-height: ${(props) => props.theme.lineHeight.lhSmall};
  display: none;

  @media ${device.md} {
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 70%;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    border: 2px solid ${(props) => props.theme.colors.backgroundWhite};
    position: absolute;
    top: 0;
    right: ${({ ...props }) => (props.clickNav === false ? "-100%" : 0)};
    align-items: flex-start;
  }
  li {
    padding: ${(props) => props.theme.paddings.navItemPads};
    list-style: none;
    opacity: ${({ ...props }) => (props.clickNav === false ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
    margin: 2rem 3rem;
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
    margin: 2rem 3rem;
  }
`;

export const MenuBar = styled.div<NavBarProps>`
  width: 30px;
  height: 20px;
  ${Flexbox};
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  display: none;
  @media ${device.md} {
    display: flex;
  }
`;
export const Bar = styled.div<NavBarProps>`
  height: 2px;
  width: 100%;
  background: white;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ ...props }) =>
    props.clickNav && props.position === "top"
      ? "translateY(7.5px) rotate(45deg)"
      : props.clickNav && props.position === "middle"
      ? "opacity: 0"
      : props.clickNav && props.position === "bottom"
      ? "translateY(-7.5px) rotate(-45deg)"
      : "none"};

  opacity: ${({ ...props }) =>
    props.clickNav && props.position === "middle" ? 0 : 1};
`;
