import { useEffect, useRef, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { MealPlan } from "../MealPlans";
import { MealCard } from "../MealPlans/MealCard";

interface PlateFullPlannerScrollMenuProps {
  mealPlanMenu: MealPlan[];
  rootRef: React.RefObject<HTMLDivElement>;
}

export const PlateFullPlannerScrollMenu = ({
  mealPlanMenu,
  rootRef,
}: PlateFullPlannerScrollMenuProps) => {
  const [imageIndex, setImageIndex] = useState(1);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onScroll = (e: any) => {
    e.preventDefault();
    // @ts-ignore
    const dir = e.deltaY > 0 ? 1 : -1;
    setImageIndex((imageIndex) => {
      let newImageIndex = imageIndex + dir;
      const length = mealPlanMenu.length - 2;
      if (newImageIndex < 1) newImageIndex = 1;
      if (newImageIndex > length) newImageIndex = length;
      return newImageIndex;
    });
  };

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.scrollTo({
        top: (imageIndex - 1) * getOffset(),
        behavior: "smooth",
      });
    }
  }, [imageIndex]);
  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      const height = rootRef.current?.clientHeight || 20;
      containerElement.style.height = `${height - 30}px`;
      containerElement?.addEventListener("wheel", onScroll);
      return () => containerElement?.removeEventListener("wheel", onScroll);
    }
  }, []);

  const getOffset = () => {
    if (
      !imageRef.current?.clientHeight ||
      !containerRef.current?.clientHeight
    ) {
      return 0;
    }
    return (
      imageRef.current.clientHeight + containerRef.current.clientHeight * 0.12
    );
  };

  return (
    <Droppable droppableId="droppable-meal-menu">
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Style.Container ref={containerRef}>
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
                          ref={index === 0 ? imageRef : undefined}
                          key={`image-${index}`}
                          index={index}
                          active={imageIndex}
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
        </div>
      )}
    </Droppable>
  );
};

const Style = {
  Container: styled.section`
    display: block;
    position: relative;
    z-index: 10;
    display: flex;
    padding: 5% 10% 5% 20%;
    flex-direction: column;
    gap: 12%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  `,
  Item: styled.div.attrs(
    ({ index, active }: { index: number; active: number }) => ({
      index: index ?? 0,
      active: active ?? 0,
    }),
  )`
    border-radius: 4px;
    transform: rotate(${({ index }) => (index % 2 === 0 ? 5 : -5)}deg)
      scale(${({ index, active }) => (index === active ? 1.3 : 1)});
    transition: 1s;
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
