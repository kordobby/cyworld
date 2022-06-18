/* GlobalStyle.jsx */
import { createGlobalStyle } from 'styled-components';
import '../GlobalStyled/GlobalStyled.module.css' // font

/* Normalize :: 여러 브라우저마다 기본적으로 설치된 스타일을 지워줌 */
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle `
${reset} // normalize
* {
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
input:focus {
    outline: none;
    box-shadow: none;
}
body {
    -ms-overflow-style: none;
    }
    ::-webkit-scrollbar {
    display: none;
    
}
:root {
    --orange : #FF7330;
    --blue : #1896C5;
    --input-grey : #F4F4F4;
    --input-text : #A5A5A5;
    --disabled-grey : #E5E5E5;
    --notice-green : #49A780;
    --notice-purple : #846eff;
    --black : #6E6E6E;
}
`;

export default GlobalStyle;