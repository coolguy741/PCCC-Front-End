import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../styles/Snippets/UserSelectNone";

const LandingStyleContainer = styled(motion.div)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  background-color: white;
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

  .loader-landing-video {
    width: 100vw;
  }

  .loader-lottie-container {
    position: fixed;
    top: 3vw;
    right: 3vw;
    width: 10vw;
  }

  .landing-logo-container {
    position: fixed;
    top: 2vw;
    left: 1vw;
    width: 35vw;
    img {
      width: 100%;
    }
  }

  .proceed-button-container {
    position: absolute;
    bottom: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .proceed-button-image-bg {
      position: relative;
      width: 25vw;
    }
    .proceed-button {
      margin-top: 0.5vw;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      .proceed-button-image {
        position: relative;
        width: 17vw;
      }
      .proceed-button-text {
        position: absolute;
        color: white;
        font-size: 1.5vw;
        font-weight: bold;
        margin-bottom: 0.75vw;
      }
    }
    .proceed-button:active {
      transform: scale(0.85);
    }
  }

  .loader-copy {
    position: absolute;
    bottom: 6vw;
    h1 {
      color: white;
    }
  }
`;

export default memo(LandingStyleContainer);
