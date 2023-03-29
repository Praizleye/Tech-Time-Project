import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleCoursesContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  position: relative;

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
  > img {
    position: absolute;
    top: 10%;
    left: 10%;
    @media ${device.md} {
      top: 7%;
      left: 5%;
    }
    @media ${device.sm} {
      width: 2rem;
    }
    @media ${device.xs} {
      width: 1.5rem;
      top: 5%;
    }
  }
  div.courses__heading-text {
    ${Flexbox};
    flex-direction: column;
    text-transform: capitalize;
    > div:first-child {
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      font-family: ${(props) => props.theme.fonts.headers};
      color: ${(props) => props.theme.colors.neutral};
      font-size: 3.5rem;
      line-height: ${(props) => props.theme.lineHeight.lhLarge};
      padding-top: 3rem;
      @media ${device.lg} {
        font-size: 3rem;
        line-height: ${(props) => props.theme.lineHeight.lhLarge};
      }
      @media ${device.md} {
        font-size: 4rem;
        line-height: ${(props) => props.theme.lineHeight.lhXtraLarge};
        text-align: center;
      }
      @media ${device.sm} {
        font-size: 3rem;
        line-height: ${(props) => props.theme.lineHeight.lhLarge};
        text-align: center;
      }
      @media ${device.xs} {
        font-size: 2.5rem;
        line-height: 50px;
        margin-top: 7rem;
      }
    }
    > div:last-child {
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
        width: 90%;
      }
      @media ${device.xs} {
        font-size: 0.6rem;
        line-height: ${(props) => props.theme.lineHeight.lhSmall};
        margin-top: 1rem;
        width: 90%;
      }
    }
  }

  div.tabs {
    ${Flexbox};
    margin-top: 3rem;
    div.tab__item {
      padding: ${(props) => props.theme.paddings.navItemPads};
      font-size: 14px;
      font-weight: ${(props) => props.theme.fontWeight.Bold};
      line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
      text-align: left;
      cursor: pointer;
    }
    div.tab-active {
      color: ${(props) => props.theme.colors.backgroundPrimary};
    }
    div:not(.tab-active) {
      color: ${(props) => props.theme.colors.neutralAlt};
    }
  }

  div.courses__cards-container {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
    margin-top: 3rem;
    @media ${device.md} {
      grid-template-columns: repeat(2, auto);
    }
    @media ${device.sm} {
      grid-template-columns: auto;
    }
    div.courses__card-container {
      background: ${(props) => props.theme.colors.primaryTextColor};

      border-radius: 16px;
      padding: 1rem;
      div.overflow {
        overflow: hidden;
        > img {
          object-fit: cover;
          transition: all 0.3s ease-in-out;
          width: 100%;
        }
      }
      div.category {
        ${Flexbox};
        margin-top: 10px;
        > div:first-child {
          background: #1e5dce33;
          padding: 4px 20px;
          font-weight: ${(props) => props.theme.fontWeight.semiBold};
          font-size: 12px;
          line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
          text-transform: capitalize;
          border-radius: 16px;
        }
        > div:last-child {
          font-size: 12px;
          font-weight: 700;
          line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
          color: ${(props) => props.theme.colors.neutralAlt};
        }
      }
      div.card__title {
        margin-top: 1rem;
        font-family: ${(props) => props.theme.fonts.headers};
        font-size: 24px;
        font-weight: 600;
      }
      div.lesson-hours {
        font-weight: 500;
        font-size: 16px;
        line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
        color: ${(props) => props.theme.colors.neutralAlt};
        ${Flexbox};
        margin-top: 1.5rem;
      }

      div.instructor-info {
        ${Flexbox};
        /* background: blue; */
        margin-top: 2rem;
        > div:first-of-type {
          flex-grow: 1;
          padding-left: 1rem;
          font-weight: 700;
          line-height: ${(props) => props.theme.lineHeight.lhXtraSmall};
          font-weight: ${(props) => props.theme.fontWeight.Bold};
        }
        > div:last-of-type {
          font-family: ${(props) => props.theme.fonts.headers};
          font-size: 20px;
          font-weight: 600;
          line-height: ${(props) => props.theme.lineHeight.lhMedium};
          color: ${(props) => props.theme.colors.primary};
        }
      }
      :hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.hoverCard};

        img.grey__scale {
          overflow: hidden;
          transform: scale(1.1);
          filter: grayscale(0.8);
          -ms-filter: grayscale(0.7);
        }
      }
    }
  }
  button {
    margin-top: 2rem;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    line-height: ${(props) => props.theme.lineHeight.lhMedium};
  }
`;
