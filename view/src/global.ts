import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
         --gray-background:#B4BEC9; 
         --green-blue-background:#159A9C; 
         --green-blue-shadow:#159a9c50; 
         --green-dark-background:#002333; 
         --green-light-background:#DEEFE7; 
         --white-background:#FFFFFF; 
    }

    body {
    padding: 0;
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`;

export default GlobalStyle;
