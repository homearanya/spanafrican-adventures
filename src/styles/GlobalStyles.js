import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
:root{
    --color-primary: #f1461d;
    --color-primary-dark: #b22402;

    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;
}
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: inherit;
    /* 16px is usually the browser's defaul font-size
        10px/16px = 62.5%  ---> 1rem = 10px*/
    font-size: 62.5% 
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: var(--color-grey-dark-2);
}
`
