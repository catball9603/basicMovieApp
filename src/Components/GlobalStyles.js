import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
* {
    padding: 0; margin: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    background-color: rgba(20,20,20, 1);
    color: #fff;
    padding-top: 50px;
    list-style: none; 
}

a {
    text-decoration: none;
    display: block;
}
`;
