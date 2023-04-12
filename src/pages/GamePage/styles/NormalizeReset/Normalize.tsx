import { css } from "styled-components";

const Normalize = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  :where(:root) {
    line-height: 1.5;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :where(main) {
    display: block;
  }

  :where(h1) {
    font-size: 2em;
    margin: 0.67em 0;
  }

  :where(p + p) {
    margin-top: 1rem;
  }
`;

export { Normalize };
