import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-size: 62.5;

}
html, #root {
    max-width: 100vw;
    min-height: 100vh;
}
body {
    width: 100%;
    height: 100%;
}
`