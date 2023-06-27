import { BaseSyntheticEvent, useEffect, useState } from "react";
import {
  DragDropContext,
  OnDragEndResponder,
  OnDragStartResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import styled from "styled-components";

import { getPositions } from "../../lib/util/getPositions";
import { ThemeComponent } from "../../pages/types";
import { useThemeStore } from "../../stores/themeStore";
import { ThemeEditorActions } from "./Actions";
import { ActivitiesAndRecipes } from "./ActivitiesAndRecipes";
import { components, ContentBuilderCards } from "./Cards";
import { ContentBuilderHeader } from "./ContentBuilderHeader";
import { ContentTemplate } from "./ContentTemplate";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

export const ContentBuilder = () => {
  const [draggingComponent, setDraggingComponent] = useState<number>();
  const [showingMessage, setShowingMessage] = useState(false);
  const [prevThemeComponents, setPrevThemeComponents] =
    useState<ThemeComponent[]>();
  const { slideIndex, theme, currentStep, updatePage } = useThemeStore();

  useEffect(() => {
    setShowingMessage(false);
  }, [slideIndex, currentStep]);

  const checkDroppable = (droppableId: number, source: number) => {
    const { width, height } = components[source];
    const currentX = droppableId % 3;
    const currentY = Math.floor(droppableId / 3);
    const positions: number[] = getPositions(width, height, currentX, currentY);
    const lastPosition = positions.sort()[positions.length - 1];

    if (lastPosition !== undefined && lastPosition > 5) {
      return false;
    }

    const themeComponents = theme[currentStep].slides[slideIndex];

    return themeComponents
      ? themeComponents.reduce((value, current) => {
          if (!value) {
            return value;
          }
          const { x, y, width, height } = current;
          const componentPositions: number[] = getPositions(
            width,
            height,
            x ?? 0,
            y ?? 0,
          );

          return componentPositions.reduce(
            (including, position) =>
              including ? !positions.includes(position) : including,
            true,
          );
        }, true)
      : true;
  };

  const onDragUpdate: OnDragUpdateResponder = (result) => {
    if (result.destination) {
      updatePage([...(prevThemeComponents ?? [])]);

      const droppableId = parseInt(
        result.destination.droppableId.split("-").pop() ?? "0",
      );
      const source = result.source.index;

      if (checkDroppable(droppableId, source)) {
        updatePage([
          ...theme[currentStep].slides[slideIndex],
          {
            ...components[source],
            x: droppableId % 3,
            y: Math.floor(droppableId / 3),
          },
        ]);
        setShowingMessage(false);
      } else {
        setShowingMessage(true);
      }
    }
  };

  const handleDelete = (event: BaseSyntheticEvent) => {
    const {
      target: { id },
    } = event;
    const [x, y] = id.split(",");
    const prev = theme[currentStep].slides[slideIndex];

    setShowingMessage(false);
    updatePage([
      ...(prev
        ? prev.filter(
            (component) =>
              !(component.x === parseInt(x) && component.y === parseInt(y)),
          )
        : []),
    ]);
  };

  const onDragStart: OnDragStartResponder = (result) => {
    setPrevThemeComponents(() => [
      ...(theme[currentStep].slides[slideIndex] ?? []),
    ]);
    setDraggingComponent(result.source.index);
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    updatePage(
      !result.destination
        ? [...(prevThemeComponents ?? [])]
        : theme[currentStep].slides[slideIndex],
    );
  };

  return (
    <Style.Container>
      <ContentBuilderHeader />
      {currentStep < 4 ? (
        <Style.DragDropContainer>
          <DragDropContext
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
          >
            <ContentBuilderCards draggingComponent={draggingComponent} />
            <Style.Slide>
              <ContentTemplate handleDelete={handleDelete} />
              <ThemeEditorActions showingMessage={showingMessage} />
            </Style.Slide>
          </DragDropContext>
        </Style.DragDropContainer>
      ) : (
        <>
          <ActivitiesAndRecipes />
          <ThemeEditorActions />
        </>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100vh;
  `,
  DragDropContainer: styled.section`
    width: 100%;
    flex: auto;
    height: 100%;
    display: flex;
    column-gap: 4%;
    overflow: hidden;
  `,

  Slide: styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;

    .theme-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
};
