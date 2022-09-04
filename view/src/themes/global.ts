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
    background: ${(props) => props.theme.color.background};
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

*::-webkit-scrollbar {
  width: 15px;
  border-radius: 10px;
}

*::-webkit-scrollbar-track {
  background: linear-gradient(${(props) => props.theme.color.background}, ${(props) => props.theme.color.secondary}) ;
}

*::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.color.background};
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.color.shadow};
  /* border: 3px solid orange; */
}

`;

export default GlobalStyle;
