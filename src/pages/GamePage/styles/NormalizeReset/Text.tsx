import { css } from "styled-components";

const Text = css`
  :where(a) {
    background-color: transparent;
  }

  :where(abbr[title]) {
    text-decoration: underline dotted;
  }

  :where(code, kbd, samp, pre) {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  :where(sub, sup) {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  :where(sub) {
    bottom: -0.25em;
  }

  :where(sup) {
    top: -0.5em;
  }
`;

export { Text };
