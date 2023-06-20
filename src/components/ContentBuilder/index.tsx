import { BaseSyntheticEvent, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
  OnDragStartResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import styled from "styled-components";
import SwiperType, { Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { DoubleImage } from "../../components/ContentCreation/DoubleImage";
import DoubleImageIcon from "../../components/ContentCreation/Icons/doubleImage";
import PWH from "../../components/ContentCreation/Icons/pwh";
import PWN from "../../components/ContentCreation/Icons/pwn";
import SingleImageIcon from "../../components/ContentCreation/Icons/singleImage";
import TitleIcon from "../../components/ContentCreation/Icons/title";
import { NumberedParagraph } from "../../components/ContentCreation/NumberedParagraph";
import { ParagraphWithHeading } from "../../components/ContentCreation/ParagraphWithHeading";
import { SingleImage } from "../../components/ContentCreation/SingleImage";
import { Title } from "../../components/ContentCreation/Title";
import { getPositions } from "../../lib/util/getPositions";
import { ThemeComponent } from "../../pages/types";
import { useThemeStore } from "../../stores/themeStore";
import { Icon } from "../Global/Icon";
import Scrollable from "../Global/Scrollable";
import { Typography } from "../Global/Typography";
import { ThemeEditorActions } from "./Actions";
import { ContentNavigator } from "./ContentNavigator";
import { ThemeInfo } from "./ThemeInfo";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

const components: ThemeComponent[] = [
  {
    width: 3,
    id: 1,
    height: 2,
    title: "Tile Card",
    preview: <TitleIcon />,
    component: <Title key="title" />,
  },
  {
    width: 1,
    id: 2,
    height: 1,
    title: "Paragraph",
    preview: <PWH />,
    component: <ParagraphWithHeading key="pwh" />,
  },
  {
    id: 3,
    width: 1,
    height: 1,
    title: "Paragraph with Number",
    preview: <PWN />,
    component: <NumberedParagraph key="np" />,
  },
  {
    id: 4,
    width: 1,
    height: 1,
    title: "1X1 Image",
    preview: <SingleImageIcon />,
    component: <SingleImage key="si" />,
  },
  {
    id: 5,
    width: 2,
    height: 1,
    title: "Double Image",
    preview: <DoubleImageIcon />,
    component: <DoubleImage key="di" />,
  },
];

export const ContentBuilder = () => {
  const [draggingComponent, setDraggingComponent] = useState<number>();
  const [themeComponents, setThemeComponents] = useState<ThemeComponent[]>();
  const [prevThemeComponents, setPrevThemeComponents] =
    useState<ThemeComponent[]>();
  const { setSlide } = useThemeStore();

  const checkDroppable = (droppableId: number, source: number) => {
    const { width, height } = components[source];
    const currentX = droppableId % 3;
    const currentY = Math.floor(droppableId / 3);
    const positions: number[] = getPositions(width, height, currentX, currentY);
    const lastPosition = positions.sort()[positions.length - 1];
    if (lastPosition !== undefined && lastPosition > 5) {
      return false;
    }

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

  const handleDelete = (event: BaseSyntheticEvent) => {
    const {
      target: { id },
    } = event;
    const [x, y] = id.split(",");

    setThemeComponents((prev) => [
      ...(prev
        ? prev.filter(
            (component) =>
              !(component.x === parseInt(x) && component.y === parseInt(y)),
          )
        : []),
    ]);
  };

  const onDragUpdate: OnDragUpdateResponder = (result) => {
    if (result.destination) {
      setThemeComponents(() => [...(prevThemeComponents ?? [])]);

      const droppableId = parseInt(
        result.destination.droppableId.split("-").pop() ?? "0",
      );
      const source = result.source.index;

      if (checkDroppable(droppableId, source)) {
        setThemeComponents((prev) => [
          ...(prev ?? []),
          {
            ...components[source],
            x: droppableId % 3,
            y: Math.floor(droppableId / 3),
          },
        ]);
      }
    }
  };

  const onDragStart: OnDragStartResponder = (result) => {
    setPrevThemeComponents(() => [...(themeComponents ?? [])]);
    setDraggingComponent(result.source.index);
  };

  const onSlideChange = (swiper: SwiperType) => {
    setSlide(swiper.activeIndex);
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      setThemeComponents(() => [...(prevThemeComponents ?? [])]);
    }
  };

  return (
    <Style.Container>
      <ContentNavigator />
      <Typography variant="h3" as="h3" weight="semi-bold">
        Create Theme
      </Typography>
      <ThemeInfo />
      <Style.DragDropContainer>
        <DragDropContext
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
        >
          <Droppable droppableId="preview-drop" isDropDisabled={true}>
            {(dropProvided, dropSnapshot) => (
              <Style.Previews
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                <Scrollable>
                  {components.map((component, index) => (
                    <Draggable
                      draggableId={`component-${index}`}
                      index={index}
                      key={`component-${index}`}
                    >
                      {(provided, snapShot) => (
                        <Style.Preview>
                          <div className="preview-title">{component.title}</div>
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="icon-container"
                          >
                            {snapShot.isDragging && draggingComponent === index
                              ? components[draggingComponent].preview
                              : component.preview}
                          </div>
                        </Style.Preview>
                      )}
                    </Draggable>
                  ))}
                  {dropProvided.placeholder}
                </Scrollable>
              </Style.Previews>
            )}
          </Droppable>
          <Style.Slide>
            <Swiper
              slidesPerView={1}
              mousewheel={true}
              pagination={false}
              effect="fade"
              onSlideChange={onSlideChange}
              direction={"vertical"}
              speed={500}
              modules={[Mousewheel, Scrollbar]}
              className="theme-swiper-slide"
            >
              <SwiperSlide>
                <Style.Content>
                  {Array.from({ length: 6 }).map((value, index) => (
                    <Droppable
                      droppableId={`grid-test-drop-${index}`}
                      key={`grid-test-${index}`}
                    >
                      {(dropProvided, draggingOverWith) => (
                        <>
                          <div
                            {...dropProvided.droppableProps}
                            ref={dropProvided.innerRef}
                            style={{
                              background: "var(--blue-500)",

                              opacity: 0.15,
                              borderRadius: "1rem",
                            }}
                          />
                          <span style={{ display: "none" }}>
                            {dropProvided.placeholder}
                          </span>
                        </>
                      )}
                    </Droppable>
                  ))}
                  {themeComponents?.map(
                    ({ width, height, x, y, component }, index) => (
                      <Style.Component
                        key={`column-${index}`}
                        {...{
                          width,
                          height,
                          x,
                          y,
                        }}
                      >
                        <div className="delete-button-container">
                          <Style.DeleteButton>
                            <Icon
                              name="trash"
                              onClick={handleDelete}
                              id={`${x},${y}`}
                            />
                          </Style.DeleteButton>
                        </div>
                        {component}
                      </Style.Component>
                    ),
                  )}
                </Style.Content>
              </SwiperSlide>
              <SwiperSlide>
                <Style.Content>
                  {Array.from({ length: 6 }).map((value, index) => (
                    <Droppable
                      droppableId={`grid-drop-${index}`}
                      key={`grid-${index}`}
                    >
                      {(dropProvided, draggingOverWith) => (
                        <>
                          <div
                            {...dropProvided.droppableProps}
                            ref={dropProvided.innerRef}
                            style={{
                              background: "var(--blue-500)",

                              opacity: 0.15,
                              borderRadius: "1rem",
                            }}
                          />
                          <span style={{ display: "none" }}>
                            {dropProvided.placeholder}
                          </span>
                        </>
                      )}
                    </Droppable>
                  ))}
                  {themeComponents?.map(
                    ({ width, height, x, y, component }, index) => (
                      <Style.Component
                        key={`column-${index}`}
                        {...{
                          width,
                          height,
                          x,
                          y,
                        }}
                      >
                        <div className="delete-button-container">
                          <Style.DeleteButton>
                            <Icon
                              name="trash"
                              onClick={handleDelete}
                              id={`${x},${y}`}
                            />
                          </Style.DeleteButton>
                        </div>
                        {component}
                      </Style.Component>
                    ),
                  )}
                </Style.Content>
              </SwiperSlide>
            </Swiper>
            <ThemeEditorActions />
          </Style.Slide>
        </DragDropContext>
      </Style.DragDropContainer>
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
  Previews: styled.div`
    width: 15%;
    height: 100%;
    background: #ffffff50;
    padding: 2vh;
    border-radius: 0.5rem;
  `,
  Preview: styled.div`
    height: 30%;
    margin-bottom: 15%;
    display: flex;
    flex-direction: column;
    .preview-title {
    }
    .icon-container {
      display: flex;
      flex: 1;
      border-radius: 0.5rem;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: white;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
    }
  `,
  Content: styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1.87vh 1vw;
    column-gap: 1.7%;
    row-gap: 3.2%;
    position: relative;
    background: #ffffff50;
    border-radius: 0.5rem;
    .grid {
      height: 100%;
      background: gray;
    }
  `,
  Component: styled.div.attrs(
    (props: { width: number; height: number; x: number; y: number }) => ({
      width: props.width ?? 1,
      height: props.height ?? 1,
      x: props.x ?? 0,
      y: props.y ?? 0,
    }),
  )`
    position: absolute;
    left: ${(props) => props.x * 33 + 1.3}%;
    height: ${(props) => props.height * 46.2}%;
    top: ${(props) => props.y * 49 + 2.5}%;
    width: ${(props) => props.width * 31.5 + props.width - 1}%;
    border-radius: 1rem;

    .delete-button-container {
      position: relative;
    }
  `,
  Slide: styled.section`
    width: 85%;
    display: flex;
    flex-direction: column;

    .theme-swiper-slide {
      flex: 1;
      margin: 0;
    }
  `,
  DeleteButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  `,
};
