import {createGlobalStyle} from 'styled-components';
import {fontSizeDefault, lineHeightDefault} from './constants';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${fontSizeDefault};
  line-height: ${lineHeightDefault};
}
`;
