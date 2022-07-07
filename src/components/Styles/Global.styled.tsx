import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    *{
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }

    img {
        max-width: 100%;
    }

    & .link {
        color: blue;
    }

    & .cursor {
        cursor : pointer;
    }

    & .center {
        text-align: center;
        align-item: center;
    }

    & .uppercase {
        text-transform: uppercase;
    }
`

export default GlobalStyles;