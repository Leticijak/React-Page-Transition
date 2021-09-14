import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
}

body {
    background-color:#000;
    background:#000;
}

`;
export default GlobalStyle;
