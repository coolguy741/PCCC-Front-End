import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const GardenKitchenPickerStyleContainer = styled(motion.div)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  .go-to-garden {
    background-color: white;
    color: black;
  }

  .go-to-kitchen {
    background-color: white;
    color: black;
  }
`;

export default memo(GardenKitchenPickerStyleContainer);
