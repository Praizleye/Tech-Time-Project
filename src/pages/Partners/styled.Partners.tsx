import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";

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
  div {
    padding: 0 2rem;
  }
`;
