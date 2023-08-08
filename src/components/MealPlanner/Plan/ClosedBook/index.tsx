import { motion, PanInfo, useAnimation, useDragControls } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import { Typography } from "../../../Global/Typography";

export const ClosedPlateFullPlannerBook = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRect | undefined>();
  const dragControls = useDragControls();
  const animation = useAnimation();
  const { setCurrentStep } = useMealPlannerStore();

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current?.getBoundingClientRect());
    }
  }, []);

  const handleDragEnd = useCallback(
    async (evt: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (rect) {
        const power = (Math.abs(info.offset.x) / rect.width) * 100;

        if (power < 50) {
          await animation.start("toRight");
        } else if (power > 50) {
          await animation.start("toLeft");
          setCurrentStep(1);
        }
      }
    },
    [rect, animation, setCurrentStep],
  );

  return (
    <Style.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <div>
        <img
          src="/images/plate-full-planner/book-closed.svg"
          alt="closed plate full planner book"
          className="planner-book"
        />
      </div>
      <Style.SwipeButton>
        <Typography variant="paragraph3" color="book-200">
          Swipe left to open
        </Typography>
        <Style.SwipeTrack ref={ref}>
          <Style.Circle />
          <Style.Line />
          <Style.Circle />
          <Style.Thumb
            drag="x"
            dragControls={dragControls}
            dragDirectionLock
            variants={{
              toLeft: {
                x: `calc(-${
                  ref.current?.getBoundingClientRect().width ?? 0
                }px + 50%)`,
              },
              toRight: {
                x: "50%",
              },
            }}
            animate={animation}
            initial={{ x: "50%" }}
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: 0, right: 0 }}
            dragMomentum={false}
            dragElastic={1}
          >
            <div></div>
          </Style.Thumb>
        </Style.SwipeTrack>
      </Style.SwipeButton>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.section)`
    width: ${window.innerHeight / window.innerWidth >= 0.625
      ? 50
      : (50 * (window.innerHeight / window.innerWidth)) / 0.7}%;
    padding-top: 1.25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .planner-book {
      width: 100%;
    }
  `,
  SwipeButton: styled(motion.div)`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 40px;
  `,
  SwipeTrack: styled.div`
    width: fit-content;
    display: flex;
    position: relative;
    align-items: center;
  `,
  Circle: styled.div`
    border: 4px solid var(--book-200);
    border-radius: 100%;
    width: 40px;
    height: 40px;
  `,
  Thumb: styled(motion.div)`
    position: absolute;
    border-radius: 100%;
    background: var(--book-100);
    width: 90px;
    height: 90px;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:active {
      &:after {
        content: "";
        position: absolute;
        border: 15px solid var(--book-100);
        left: 0;
        top: 0;
        width: 90px;
        height: 90px;
        z-index: 0;
        animation: pulsate 1s ease-out infinite;
        border-radius: 100%;
      }
    }

    & > div {
      width: 54px;
      border: 4px solid var(--book-300);
      height: 54px;
      border-radius: 100%;
      z-index: 1;

      &:before {
        top: 50%;
        left: 50%;
        position: absolute;
        content: url(/images/icons/left-arrow-brown.svg);
        animation: move 2s linear infinite;
      }

      @keyframes move {
        0% {
          opacity: 0;
          transform: translate(20%, -40%);
        }

        100% {
          opacity: 1;
          transform: translate(-80%, -40%);
        }
      }
    }

    @keyframes pulsate {
      0% {
        transform: scale(0.7);
        opacity: 1;
      }

      100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }
  `,
  Line: styled.div`
    background-image: linear-gradient(
      to right,
      var(--book-200) 0%,
      var(--book-200) 6%,
      #ffffff00 6%,
      #ffffff00 18%,
      var(--book-200) 18%,
      var(--book-200) 30%,
      #ffffff00 30%,
      #ffffff00 42%,
      var(--book-200) 42%,
      var(--book-200) 54%,
      #ffffff00 54%,
      #ffffff00 66%,
      var(--book-200) 66%,
      var(--book-200) 78%,
      #ffffff00 78%,
      #ffffff00 90%,
      var(--book-200) 90%,
      var(--book-200) 100%
    );
    height: 4px;
    width: 220px;
  `,
};
