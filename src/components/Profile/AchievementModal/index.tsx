import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { Achievement } from "../../../pages/AccountsPage/Profiles/User";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import Button from "../../Button";
import { Typography } from "../../Global/Typography";

interface Props {
  isOpen: boolean;
  close: () => void;
  achievement?: Achievement;
}

export const AchievementModal: React.FC<Props> = ({
  isOpen,
  close,
  achievement,
}) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <Style.Container
          initial={{ opacity: 0, y: "15px", scale: 0.99 }}
          animate={{ opacity: 1, y: "0", scale: 1 }}
          exit={{ opacity: 0, y: "15px", scale: 0.99 }}
        >
          <Style.CloseContainer onClick={close} />
          <Style.ContentContainer>
            <AnimatePresence>
              <Style.Sunny
                src="/images/content-builder/sunny.svg"
                alt="sunny"
              />
              <Style.Achievement>
                <img
                  src={`/images/achievements/achievement${achievement?.badge}.png`}
                  alt={`achievement-${achievement?.badge}`}
                  width="240px"
                />
                <div>
                  <Typography
                    variant="h3"
                    as="h3"
                    weight="semi-bold"
                    className="achievement-name"
                  >
                    {achievement?.name}
                  </Typography>
                  <Typography variant="paragraph3">
                    Way to go! You can now discover food through Foodways!
                  </Typography>
                  <Button variant="orange" fullWidth onClick={close}>
                    AWESOME
                  </Button>
                </div>
              </Style.Achievement>
            </AnimatePresence>
          </Style.ContentContainer>
        </Style.Container>
      ) : null}
    </AnimatePresence>
  );
};

const Style = {
  Container: styled(motion.div)`
    min-height: 100vh;
    z-index: 250;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  CloseContainer: styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 255;
    cursor: pointer;
  `,
  ContentContainer: styled.div`
    display: flex;
    width: fit-content;
    position: relative;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    z-index: 300;
  `,
  Achievement: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    margin: 0 10px;
    width: 400px;

    img {
      position: relative;
      z-index: 2;
    }

    & > div {
      ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
      width: 100%;
      margin-top: -100px;
      text-align: center;
      border-radius: 1rem;
      padding: 100px 30px 20px 30px;
      position: relative;
      background-clip: border-box;

      .achievement-name {
        margin-bottom: 15px;
      }

      button {
        margin: 15px auto 0 auto;
      }

      &:after {
        content: "";
        left: -20px;
        top: 45%;
        position: absolute;
        width: 30px;
        z-index: -1;
        clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%, 0 50%);
        background: inherit;
        height: 30px;
      }
    }
  `,
  Sunny: styled.img`
    transform: scaleX(-1);
    width: 200px;
    margin-bottom: -50px;
  `,
};
