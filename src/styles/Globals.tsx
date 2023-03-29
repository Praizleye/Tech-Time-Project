import styled, {
  createGlobalStyle,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

type Props = {
  theme: ThemeProps<DefaultTheme>;
};

export const GlobalStyles = createGlobalStyle<Props>`
body{
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  width: 100%;
  text-rendering: optimizeSpeed;
  color: ${(props) => props.theme.colors.primaryTextColor};
  background: ${(props) => props.theme.colors.backgroundPrimary}; 
}

`;

export const Flexbox = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
