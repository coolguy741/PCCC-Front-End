import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";

const HUDMenuOptionStyleContainer = styled(motion.div)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: var(--hud-menu-option-position, fixed);
  left: var(--hud-menu-option-left, auto);
  right: var(--hud-menu-option-right, auto);
  top: var(--hud-menu-option-top, auto);
  bottom: var(--hud-menu-option-bottom, auto);
  width: var(--hud-menu-option-scale, 15rem);
  height: var(--hud-menu-option-scale, 15rem);
  border-radius: var(--hud-menu-option-border-radius, 0 0 0 0);

  .hud-menu-option-bg {
    ${UserSelectNone};
    ${MarginPaddingNone};
    position: absolute;
    left: var(--hud-menu-option-bg-left-offset, auto);
    right: var(--hud-menu-option-bg-right-offset, auto);
    top: var(--hud-menu-option-bg-top-offset, auto);
    bottom: var(--hud-menu-option-bg-bottom-offset, auto);
    width: var(--hud-menu-option-bg-scale, 0rem);
    height: var(--hud-menu-option-bg-scale, 0rem);
    background-color: var(--hud-menu-option-bg-color, transparent);
    border-radius: 100%;
  }

  .hud-menu-option-icon {
    ${UserSelectNone};
    ${MarginPaddingNone};
    position: fixed;
    width: var(--hud-menu-option-icon-scale, 10rem);
    height: var(--hud-menu-option-icon-scale, 10rem);
    left: var(--hud-menu-option-left, auto);
    right: var(--hud-menu-option-right, auto);
    top: var(--hud-menu-option-top, auto);
    bottom: var(--hud-menu-option-bottom, auto);
    margin-left: var(--hud-menu-option-icon-margin-left, 0);
    margin-right: var(--hud-menu-option-icon-margin-right, 0);
    margin-top: var(--hud-menu-option-icon-margin-top, 0);
    margin-bottom: var(--hud-menu-option-icon-margin-bottom, 0);
  }
`;

export default memo(HUDMenuOptionStyleContainer);
