import { useCallback, useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
  OnDragStartResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import styled from "styled-components";

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
import { ThemeComponent } from "../../pages/types";
import Scrollable from "../Global/Scrollable";

const components: ThemeComponent[] = [
  {
    col: 3,
    id: 1,
    row: 2,
    title: "Tile Card",
    preview: <TitleIcon />,
    component: <Title key="title" />,
  },
  {
    col: 1,
    id: 2,
    row: 1,
    title: "Paragraph",
    preview: <PWH />,
    component: <ParagraphWithHeading key="pwh" />,
  },
  {
    id: 3,
    col: 1,
    row: 1,
    title: "Paragraph with Number",
    preview: <PWN />,
    component: <NumberedParagraph key="np" />,
  },
  {
    id: 4,
    col: 1,
    row: 1,
    title: "1X1 Image",
    preview: <SingleImageIcon />,
    component: <SingleImage key="si" />,
  },
  {
    id: 5,
    col: 2,
    row: 1,
    title: "Double Image",
    preview: <DoubleImageIcon />,
    component: <DoubleImage key="di" />,
  },
];

export const ContentBuilder = () => {
  const [draggingComponent, setDraggingComponent] = useState<number>();
  const [rowCount, setRowCount] = useState<number>();
  const [themeGrid, setThemeGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [prevThemeGrid, setPrevThemeGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [themeComponents, setThemeComponents] =
    useState<ThemeComponent[][] | ThemeComponent[]>();

  const onDragEnd: OnDragEndResponder = (result) => {
    setDraggingComponent(undefined);
    if (!result.destination) {
      setThemeGrid(() => [...prevThemeGrid]);
    }
  };

  const onDragUpdate: OnDragUpdateResponder = (result) => {
    // console.error(result);
  };
  const onDragStart: OnDragStartResponder = (result) => {
    setPrevThemeGrid(() => JSON.parse(JSON.stringify(themeGrid)));
    setDraggingComponent(result.source.index);
  };

  const getComponentsArray = useCallback(
    (startCol: number, length: number) => {
      const tempGrid = [...themeGrid].map((cols) =>
        cols.filter(
          (item, index) => index >= startCol && index < startCol + length,
        ),
      );
      const tempComponents = [];

      for (let j = 0; j < tempGrid.length; j++) {
        const temp = [];
        for (let i = 0; i < tempGrid[0].length; i++) {
          if (tempGrid[j][i]) {
            const component = components[tempGrid[j][i] - 1];

            i += component.col - 1;
            temp.push(component);
          }
        }

        tempComponents.push(temp);
      }
      return tempComponents;
    },
    [themeGrid],
  );

  useEffect(() => {
    if (rowCount) {
      if (rowCount === 1) {
        const tempComponents = [];

        for (let i = 0; i < 3; i++) {
          const component = components[themeGrid[0][0] - 1];
          if (component.row === 2) {
            i += component.col - 1;
            tempComponents.push([component]);
          } else {
            const otherComponent = components[themeGrid[1][0] - 1];
            tempComponents.push(
              getComponentsArray(
                1,
                otherComponent.col > component.col
                  ? otherComponent.col
                  : component.col,
              ),
            );
          }
        }
        setThemeComponents(
          tempComponents as ThemeComponent[] | ThemeComponent[][],
        );
      } else {
        setThemeComponents(getComponentsArray(0, 3));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeGrid, rowCount]);

  const checkDroppable = useCallback(
    (rows: number, cols: number, id: number) => {
      for (let k = 0; k < (rows === 1 ? 2 : 1); k++) {
        const tempThemeGrid = [...themeGrid];
        let available = true;

        for (let i = 0; i < 3; i++) {
          available = true;
          if (3 - i < cols) {
            available = false;
            break;
          }
          for (let j = i; j < i + cols; j++) {
            if (rows === 1) {
              if (themeGrid[k][j] === 0) {
                tempThemeGrid[k][j] = id;
              } else {
                available = false;
                break;
              }
            }
            if (rows === 2) {
              if (themeGrid[k][j] === 0 && themeGrid[k + 1][j] === 0) {
                tempThemeGrid[k][j] = id;
                tempThemeGrid[k + 1][j] = id;
              } else {
                available = false;
                break;
              }
            }
          }

          if (available) {
            break;
          }
        }
        if (available) {
          setThemeGrid(() => tempThemeGrid);
          if (rows === 1 && !rowCount) {
            setRowCount(2);
          }
          if (rows === 2) {
            setRowCount(1);
          }
          break;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeGrid],
  );

  useEffect(() => {
    if (draggingComponent !== undefined) {
      const rows = components[draggingComponent].row;
      const cols = components[draggingComponent].col;
      checkDroppable(rows, cols, components[draggingComponent].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggingComponent]);

  return (
    <Style.Container>
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragUpdate={onDragUpdate}
        onDragStart={onDragStart}
      >
        <Droppable droppableId="hello-drop" isDropDisabled={true}>
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
                    {(provided, snapShot) => {
                      return (
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
                      );
                    }}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </Scrollable>
            </Style.Previews>
          )}
        </Droppable>
        <Droppable droppableId="world-drop">
          {(dropProvided) => (
            <Style.Content
              {...dropProvided.droppableProps}
              ref={dropProvided.innerRef}
            >
              {themeComponents?.map((componentColumn, index) => (
                <Style.ComponentColumn key={`column-${index}`}>
                  {Array.isArray(componentColumn) &&
                    componentColumn?.length > 0 &&
                    componentColumn.map((component) => (
                      <Style.Component
                        col={component?.col ?? 1}
                        key={component.id}
                      >
                        {component?.component ?? ""}
                      </Style.Component>
                    ))}
                </Style.ComponentColumn>
              ))}
            </Style.Content>
          )}
        </Droppable>
      </DragDropContext>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    width: 100%;
    display: flex;
    height: 100%;
    column-gap: 4%;
    overflow: hidden;
  `,
  Previews: styled.div`
    width: 20%;
    height: 100%;
    background: white;
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
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 5%;
  `,
  ComponentColumn: styled.div`
    display: flex;
    gap: 3%;
    height: 100%;
    row-gap: 5%;
  `,
  Component: styled.div.attrs((props: { col: number }) => ({
    col: props.col ?? 1,
  }))`
    width: ${(props) =>
      props.col * 30 + (props.col === 2 ? 3 : props.col === 3 ? 10 : 0)}%;
  `,
};
