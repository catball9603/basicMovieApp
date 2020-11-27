import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
html {
    font-size: 0.625rem;
}
* {
    padding: 0; margin: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #212529;
    color: #fff;
    padding-top: 60px;
    list-style: none; 
    font-size:1.6rem;
}

a {
    text-decoration: none;
    display: block;
}
`;
