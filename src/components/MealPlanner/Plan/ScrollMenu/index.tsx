import { motion } from "framer-motion";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { MealPlan } from "../MealPlans";
import { MealCard } from "../MealPlans/MealCard";

interface PlateFullPlannerScrollMenuProps {
  mealPlanMenu: MealPlan[];
}

export const PlateFullPlannerScrollMenu = ({
  mealPlanMenu,
}: PlateFullPlannerScrollMenuProps) => {
  return (
    <Droppable droppableId="droppable-meal-menu">
      {(provided, snapshot) => (
        <Style.Container
          style={{ overflow: "scroll" }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {mealPlanMenu.map(({ image, description }, index) => {
            return (
              <Draggable
                key={`draggable-meal-menu-${index}`}
                draggableId={`draggable-meal-menu-${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {snapshot.isDragging ? (
                      <MealCard
                        key={`image-mealcard-${index}`}
                        meal={{
                          description,
                          image,
                        }}
                        fixed
                        label={null}
                      />
                    ) : (
                      <Style.Item
                        key={`image-${index}`}
                        variants={{
                          offscreen: {
                            scale: 0.5,
                            rotate: -2.01 * Math.pow(-1, index),
                          },
                          onscreen: {
                            scale: 1.2,
                            rotate: -2.01 * Math.pow(-1, index),
                            transition: {
                              type: "spring",
                              bounce: 0.4,
                              duration: 0.8,
                            },
                          },
                        }}
                        initial="offscreen"
                        whileInView="onscreen"
                        index={index}
                        viewport={{ once: false, amount: 0.611 }}
                      >
                        <img src={image} alt="fruits" />
                      </Style.Item>
                    )}
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </Style.Container>
      )}
    </Droppable>
  );
};

const Style = {
  Container: styled.section`
    display: block;
    height: 100%;
    position: relative;
    z-index: 10;
    display: flex;
    padding: 0 10% 0 20%;
    flex-direction: column;
    gap: 12%;
    overflow-y: auto;
  `,
  Item: styled(motion.div).attrs(({ index }: { index: number }) => ({
    index: index ?? 0,
  }))`
    border-radius: 4px;
    img {
      background: white;
      padding: 8px;
      width: 100%;
    }

    &:before {
      position: absolute;
      content: "";
      width: 17%;
      right: 50%;
      transform: rotate(${({ index }) => (index % 2 === 0 ? 11 : 7)}0deg)
        translate(-30%, -50%);
      height: 9%;
      opacity: 0.4;
      background: #ffba3a;
      z-index: 3;
    }
  `,
};
