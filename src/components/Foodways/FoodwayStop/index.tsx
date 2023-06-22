import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { PccServer23FoodwaysFoodwayDto } from "../../../lib/api/api";
import { Globe } from "../Globe";

interface FoodwayStopProps {
  foodway: PccServer23FoodwaysFoodwayDto;
  nav: number;
}

export function FoodwayStop({ foodway, nav }: FoodwayStopProps) {
  return (
    <Style.Container>
      <div
        className="content__body__left"
        //  onWheel={hijackScroll}
      >
        <div className="content__body__left__text">
          <AnimatePresence>
            {foodway.foodwayStops && (
              <motion.img
                src={foodway.foodwayStops[nav - 1].image!}
                key="foodways-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, display: "none" }}
              />
            )}
            {foodway.foodwayStops && (
              <motion.h3
                key={foodway.foodwayStops[nav - 1].location}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, display: "none" }}
              >
                {foodway?.foodwayStops[nav - 1].location}
              </motion.h3>
            )}
            {foodway.foodwayStops && (
              <motion.p
                key={foodway?.foodwayStops[nav - 1].description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, display: "none" }}
              >
                {foodway?.foodwayStops[nav - 1].description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="content__body__right">
        <div className="content__body__right__globe">
          <Globe />
        </div>
        <div className="content__body__right__timeline">
          {foodway.foodwayStops && (
            <div className="bubble">
              {foodway.foodwayStops[nav - 1].timePeriod}
            </div>
          )}
          {foodway.foodwayStops &&
            foodway.foodwayStops.map((_, index) => (
              <div key={`stop-${index}`} className="stop">
                <div
                  className={`point ${nav >= index && "active"} ${
                    nav > index && "solid"
                  }`}
                />
                {foodway.foodwayStops &&
                  index !== foodway.foodwayStops.length - 1 && (
                    <div className={`line ${nav >= index + 1 && "active"}`} />
                  )}
              </div>
            ))}
        </div>
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    display: grid;
    height: 60vh;
    grid-template-columns: 5fr 7fr;
    position: relative;
  `,
};
