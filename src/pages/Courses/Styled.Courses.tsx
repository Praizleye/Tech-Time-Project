import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

export const StyleCoursesContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  background: ${(props) => props.theme.colors.aboutBackground};
  color: ${(props) => props.theme.colors.neutral};
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPads};
  position: relative;
  > img {
    position: absolute;
    top: 10%;
    left: 10%;
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
    }
    > div:last-child {
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
      color: ${(props) => props.theme.colors.neutralAlt};
      width: 60%;
      margin-top: 2rem;
      text-align: center;
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
    /* background-color: red; */
    div.courses__card-container {
      background: ${(props) => props.theme.colors.primaryTextColor};
      /* background-color: red; */
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
