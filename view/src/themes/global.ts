import { createGlobalStyle } from "styled-components";
import { VigaFont } from "../fonts/styles";
const GlobalStyle = createGlobalStyle`
    ${VigaFont}

    *{
        font-family: 'Roboto', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
    padding: 0;
    margin: 0;
    background: ${props => props.theme.color.background};
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

`;

export default GlobalStyle;
