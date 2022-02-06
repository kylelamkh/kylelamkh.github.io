import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

    :root {
        --main-bg-color: #0e012b;
        --cyan: #00ffff;
        --red: #ff184c;
    }

    html {
        font-size: 16px;
        font-family: 'Space Mono', monospace;
        box-sizing: border-box;
    }

    html, body, main {
        margin: 0;
        height: 100%;
    }

    body {
        background-color: var(--main-bg-color);
        color: var(--cyan);
    }

    h1 {
        margin-top: 0;
    }
`

export default GlobalStyle
