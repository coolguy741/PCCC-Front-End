import { BaseSyntheticEvent, useCallback, useEffect, useState } from "react";
import {
  DragDropContext,
  OnDragEndResponder,
  OnDragStartResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import styled from "styled-components";

import { getPositions } from "../../lib/util/getPositions";
import { ContentBuilderType, ThemeComponent } from "../../pages/types";
import { contentBuilderStoreState } from "../../stores/contentBuilderStore";
import { ContentEditorActions } from "./Components/Actions";
import { ActivitiesAndRecipes } from "./Components/ActivitiesAndRecipes";
import { components, ContentBuilderCards } from "./Components/Cards";
import { ContentBuilderHeader } from "./Components/ContentBuilderHeader";
import { ContentTemplate } from "./Components/ContentTemplate";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { useThemeBuilderStore } from "../../stores/themeBuilderStore";

export interface ContentBuilderProps {
  type: ContentBuilderType;
  store: contentBuilderStoreState;
}

export const ContentBuilder: React.FC<ContentBuilderProps> = ({
  type,
  store,
}) => {
  const [draggingComponent, setDraggingComponent] = useState<number>();
  const [showingMessage, setShowingMessage] = useState(false);
  const [prevContentComponents, setPrevContentComponents] =
    useState<ThemeComponent[]>();
  const { currentStep } = useThemeBuilderStore();

  const {
    slideIndex,
    slides,
    currentLang,
    updatePage,
    updatePageState,
    setSlideIndex,
    addSlide,
    setLang,
    deleteSlide,
  } = store;

  useEffect(() => {
    setShowingMessage(false);
  }, [slideIndex]);

  const checkDroppable = useCallback(
    (droppableId: number, source: number) => {
      const { width, height } = components[source];
      const currentX = droppableId % 3;
      const currentY = Math.floor(droppableId / 3);
      const positions: number[] = getPositions(
        width,
        height,
        currentX,
        currentY,
      );
      const lastPosition = positions.sort()[positions.length - 1];

      if (lastPosition !== undefined && lastPosition > 5) {
        return false;
      }

      const themeComponents = slides[slideIndex];

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
    },
    [slideIndex, slides],
  );

  const onDragUpdate: OnDragUpdateResponder = useCallback(
    (result) => {
      if (result.destination) {
        updatePage([...(prevContentComponents ?? [])]);

        const droppableId = parseInt(
          result.destination.droppableId.split("-").pop() ?? "0",
        );
        const source = result.source.index;

        if (checkDroppable(droppableId, source)) {
          updatePage([
            ...slides[slideIndex],
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [prevContentComponents, setShowingMessage],
  );

  const handleDelete = useCallback(
    (event: BaseSyntheticEvent) => {
      const {
        target: { id },
      } = event;
      const [x, y] = id.split(",");
      const prev = slides[slideIndex];
      setShowingMessage(false);
      updatePage([
        ...(prev
          ? prev.filter(
              (component) =>
                !(component.x === parseInt(x) && component.y === parseInt(y)),
            )
          : []),
      ]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slideIndex, slides],
  );

  const onDragStart: OnDragStartResponder = useCallback(
    (result) => {
      setPrevContentComponents(() => [...(slides[slideIndex] ?? [])]);
      setDraggingComponent(result.source.index);
    },
    [slideIndex, slides],
  );

  const onDragEnd: OnDragEndResponder = useCallback(
    (result) => {
      updatePage(
        !result.destination
          ? [...(prevContentComponents ?? [])]
          : slides[slideIndex],
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [slideIndex, slides, prevContentComponents],
  );

  return (
    <Style.Container>
      <ContentBuilderHeader
        type={type}
        slideIndex={slideIndex}
        setLang={setLang}
        currentLang={currentLang}
        deleteSlide={deleteSlide}
      />
      {currentStep < 3 || type !== ContentBuilderType.THEMES ? (
        <Style.DragDropContainer>
          <DragDropContext
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
          >
            <ContentBuilderCards draggingComponent={draggingComponent} />
            <Style.Slide>
              <ContentTemplate
                handleDelete={handleDelete}
                setSlideIndex={setSlideIndex}
                updatePageState={updatePageState}
                slides={slides}
              />
              <ContentEditorActions
                addSlide={addSlide}
                type={type}
                showingMessage={showingMessage}
              />
            </Style.Slide>
          </DragDropContext>
        </Style.DragDropContainer>
      ) : (
        <>
          <ActivitiesAndRecipes />
          <ContentEditorActions addSlide={addSlide} />
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

    .content-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
};
