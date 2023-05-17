import { css } from "styled-components";

const Forms = css`
  :where(button, input, optgroup, select, textarea) {
    line-height: inherit;
    border: 1px solid currentColor;
  }

  :where(button) {
    overflow: visible;
    text-transform: none;
  }

  :where(button, [type="button"], [type="reset"], [type="submit"]) {
    padding: 1px 6px;
    &:not(:disabled) {
      cursor: pointer;
    }
  }

  :where(input) {
    overflow: visible;
  }

  :where(input, textarea) {
    padding: 1px;
  }

  :where(fieldset) {
    border: 1px solid currentColor;
    margin: 0 2px;
  }

  :where(legend) {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }

  :where(progress) {
    display: inline-block;
    vertical-align: baseline;
  }

  :where(select) {
    text-transform: none;
  }

  :where(textarea) {
    overflow: auto;
    vertical-align: top;
  }

  :where([type="search"]) {
    outline-offset: -2px;
  }

  :where([type="color"]) {
    background: inherit;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  ::-webkit-search-decoration,
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }
`;

export { Forms };
