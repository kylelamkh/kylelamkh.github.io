import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: #01012b;
        --cyan: #00ffff;
        --red: #ff184c;
    }

    html, body {
        margin: 0;
    }
    body {
        background-color: var(--main-bg-color);
        color: var(--cyan);
    }
`

export default GlobalStyle
