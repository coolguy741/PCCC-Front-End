import { isDesktop } from "react-device-detect";
import { createGlobalStyle } from "styled-components";
import { Fonts } from "../Elements/Fonts";
import { DisableTouchPointerEvents } from "../Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../Snippets/MarginPaddingNone";
import { UserSelectNone } from "../Snippets/UserSelectNone";
import { Forms } from "./Forms";
import { Miscellaneous } from "./Miscellaneous";
import { Normalize } from "./Normalize";
import { Text } from "./Text";

const GlobalStyle = createGlobalStyle`

    ${Normalize};
    ${Forms};
    ${Text};
    ${Miscellaneous};

    * {
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        ${UserSelectNone};
        ${MarginPaddingNone};
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    fieldset,
    button,
    ul,
    li,
    p,
    pre {
        ${UserSelectNone};
        ${MarginPaddingNone};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
        ${UserSelectNone};
        ${MarginPaddingNone};
        ${DisableTouchPointerEvents};
    }

    ol,
    ul {
        list-style: none;
        ${UserSelectNone};
        ${MarginPaddingNone};
        ${DisableTouchPointerEvents};
    }


    body {
        ${UserSelectNone};
        ${MarginPaddingNone};
        touch-action: none;
        width: 100vw;
        height: 100vh;
        background-color: ${isDesktop ? "black" : "black"};
        overflow: hidden;
      }

    canvas {
        ${UserSelectNone};
        touch-action: none;
    }

    header,
    main {
        margin: 0 auto;
        width: 100%;       
        ${UserSelectNone};
        ${MarginPaddingNone};
    }

    main {
        height: 100%;
        position: relative;
        ${UserSelectNone};
        ${MarginPaddingNone};
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    button {
        ${MarginPaddingNone}
        border: none;
        background: none;
    }

    ${Fonts}
`;

export { GlobalStyle };
