import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import styled from "styled-components";

export const ContentBuilder = () => {
  const onDragEnd: OnDragEndResponder = (result) => {
    console.error(result);
  };

  const onDragUpdate: OnDragUpdateResponder = (result) => {
    console.error(result);
  };
  return (
    <Style.Container>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <Droppable droppableId="hello-drop">
          {(dropProvided, dropSnapshot) => (
            <Style.Components
              style={{ background: "gray" }}
              {...dropProvided.droppableProps}
              ref={dropProvided.innerRef}
            >
              <Draggable draggableId="hello" index={0}>
                {(provided, snapShot) => {
                  return (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      hello
                    </div>
                  );
                }}
              </Draggable>
            </Style.Components>
          )}
        </Droppable>
        <Droppable droppableId="world-drop">
          {(dropProvided, dropSnapshot) => (
            <Style.Content
              style={{ background: "gray" }}
              {...dropProvided.droppableProps}
              ref={dropProvided.innerRef}
            >
              <Draggable draggableId="world" index={1}>
                {(provided, snapShot) => {
                  return (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      there
                    </div>
                  );
                }}
              </Draggable>
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
  `,
  Components: styled.div`
    width: 20%;
    height: 100%;
  `,
  Content: styled.div`
    width: 80%;
    height: 100%;
  `,
};
