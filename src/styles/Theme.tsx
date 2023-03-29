export const theme = {
  colors: {
    primary: "#004DB3",
    neutral: "#000F24",
    neutralAlt: "#A2A2A2",
    navInactive: "#AAC4E6",
    tertiary: "#303030",
    backgroundPrimary: "#004DB3",
    text: "#FFFFFF",
    textBlack: "#000000",
    primaryTextColor: "#FFFFFF",
    secondaryTextColor: "#000F24",
    partnersbackground: "#CCDBF0",
    aboutBackground: "#F8F9FC",
    backgroundWhite: "#FFFFFF",
    hoverCard: "#ece9e9",
  },
  fonts: {
    headers: "Clash Display",
    text: "satoshi",
  },
  paddings: {
    navPads: "0 3rem",
    navPadsXXL: "0 6rem",
    navPadsXL: "0 4rem",
    navPadsL: "0 3rem",
    navPadsMD: "0 2rem",
    navPadsSM: "0 1rem",
    navPadsXSM: "0 1rem",
    navItemPads: "0 0.625rem",
    customPads: "0.5rem 1rem",
    container: "15px",
    pageTop: "30px",
  },
  margins: {
    pageTop: "30px",
  },
  lineHeight: {
    lhXtraSmall: "18px",
    lhSmall: "22px",
    lhMedium: "28px",
    lhLarge: "70px",
    lhXtraLarge: "82px",
  },
  fontWeight: {
    semiBold: 500,
    Bold: 700,
  },
};

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
