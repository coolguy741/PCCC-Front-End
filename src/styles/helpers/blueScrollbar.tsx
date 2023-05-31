import { css } from "styled-components";

export function blueScrollbar(thumbWidth: "thin" | "thick") {
  return css`
    margin-right: ${() => (thumbWidth === "thin" ? "-8px" : "-28px")};
    padding-right: ${() => (thumbWidth === "thin" ? "4px" : "20px")};
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: ${() => (thumbWidth === "thin" ? "4px" : "8px")};
    }
    &::-webkit-scrollbar-track {
    }
    &::-webkit-scrollbar-thumb {
      background: var(--blue-300);
      opacity: 0.5;
      border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb:hover {
    }

    scrollbar-color: var(--blue-300) rgba(0, 0, 0, 0);
    scrollbar-width: ${() => (thumbWidth === "thin" ? "4px" : "8px")};

    /* Firefox specific styles */
    @supports (-moz-appearance: none) {
      scrollbar-color: var(--blue-300) rgba(0, 0, 0, 0);

      & {
        -moz-appearance: none; /* Disable default Firefox scrollbar */
      }

      &::-moz-range-track {
        border-radius: 100px; /* Border radius for the scrollbar track in Firefox */
      }
    }
  `;
}
