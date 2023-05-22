import { createGlobalStyle, styled } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  *, *::before, *::after {
  box-sizing: border-box;
  }
  html, body {
    font-family: Red Hat Display, sans-serif;
    font-size: 10px;
    min-height: 100vh;
    overflow-x: hidden
  }
  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }
  input, textarea, button, select {
    font: inherit;
  }
`;
export const Container = styled.div`
  max-width: 1110px;
  @media only screen and (max-width: 1110px) {
    max-width: 768px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 375px;
  }
`;
export const PrimaryButton = styled.a`
  padding-inline: 40px;
  padding-block: 16px;
  background-color: #4D96A9;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  color: #FFFFFF;
  border-radius: 29px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #71C0D4;
  }
`;
export const SecondaryButton = styled.a`
  background: #855FB1;
  border-radius: 29px;
  padding-block: 16px;
  padding-inline: 29px;
  background-color: #855FB1;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  color: #FFFFFF;
  &:hover {
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #B18BDD;
  }
`;
export const ButtonSpan = styled.span`
  color: ${(props) => (props.type === 'secondary' ? '#D9B8FF' : '#8FE3F9')};
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 26px;
  margin-left: 4px;
`;
export default GlobalStyle;
