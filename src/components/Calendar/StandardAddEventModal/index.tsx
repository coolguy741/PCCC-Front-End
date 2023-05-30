import { useMemo, useState } from "react";
import styled from "styled-components";
import { useCalendarEventsStore } from "../../../stores/eventsStore";
import { Select } from "../../Global/Select";
import { AddNoteForm } from "../AddNoteForm";
import { StandardPublishForm } from "../StandardPublishForm";

export interface EventType {
  type: string;
  value: string;
}

export type CalendarEvent = {
  curriculum: string;
  group: string;
  topic: string;
  name: string;
};

type PopupSize = "sm" | "md" | "lg";

interface Props {
  position: {
    x: number;
    y: number;
    xPos: string;
    yPos: string;
    height: number;
  };
  isOpen?: boolean;
  close: () => void;
  isConfirm?: boolean;
  selectedDate?: string;
}

const EVENTS = [
  "Note",
  "Lesson Assessment",
  "Recipe",
  "Mealtime Moment",
  "Activity",
];

export const StandardAddEventModal: React.FC<Props> = ({
  isOpen = false,
  isConfirm = false,
  position,
  selectedDate,
  close,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState<string>("");
  const addEvent = useCalendarEventsStore((state) => state.addEvent);
  const [eventType, setEventType] = useState<EventType | undefined>();
  const popupSize = useMemo<PopupSize>(() => {
    return isConfirm || !eventType ? "sm" : "md";
  }, [isConfirm, eventType]);

  // const handleAddEvent = (event: CalendarEvent) => {
  //   addEvent({
  //     title: event.group,
  //     start: selectedDate,
  //     type: eventType?.type,
  //     description: `${event.curriculum.replaceAll(
  //       "-",
  //       " ",
  //     )} ${event.topic.replaceAll("-", " ")} ${event.name}`,
  //   });
  //   handleClose();
  // };

  const handleClose = () => {
    close();
    setEventType(undefined);
    setType("");
  };

  return (
    <Style.Container
      isOpen={isOpen}
      position={position}
      popupSize={popupSize}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={() => setModalOpen(false)}
    >
      <div className="popup-background" onClick={handleClose}></div>
      <div className="popup-container">
        <div className="popup">
          <div className="header">
            <h3>Add</h3>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option>—</option>
              {EVENTS.map((event) => (
                <option key={event} value={event}>
                  {event}
                </option>
              ))}
            </Select>
          </div>
          {type === "Note" && (
            <>
              <div className="divider">
                <div />
              </div>
              <AddNoteForm
                yPos={position.yPos}
                selectedDate={selectedDate}
                isOpen={isOpen}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            </>
          )}
          {!!type && type !== "Note" && (
            <>
              <div className="divider">
                <div />
              </div>
              <StandardPublishForm
                yPos={position.yPos}
                selectedDate={selectedDate}
                type={type}
                isOpen={isOpen}
              />
            </>
          )}
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div.attrs(
    (props: {
      position: {
        x: number;
        y: number;
        xPos: string;
        yPos: string;
        height: number;
      };
      isOpen: boolean;
      popupSize: PopupSize;
      height: number;
      width: number;
    }) => ({
      position: props.position,
      isOpen: props.isOpen,
      popupSize: props.popupSize,
      height: props.height,
      width: props.width,
    }),
  )`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;

    .popup-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 2;
    }
    .popup-container {
      ${({ position, height, width }) =>
        `${position?.yPos}: ${
          position?.yPos === "bottom" ? height - position?.y : position?.y
        }px;
      ${position?.xPos}: ${
          position?.xPos === "right" ? width - position?.x : position?.x
        }px;
      `}
      width: ${({ popupSize }) => `${popupSize === "sm" ? 450 : 500}px;`};
      position: fixed;
      z-index: 10;

      .popup {
        background: none;
        border-radius: 1rem;
        position: relative;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        z-index: auto;
        display: flex;
        flex-direction: column;

        .header {
          display: flex;
          padding: 1.75rem 1.25rem 1.25rem;
          width: 100%;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;

          h3 {
            font-size: 1.3rem;
            font-weight: 600;
          }
        }

        .divider {
          width: 100%;
          padding: 0.5rem 1.3rem;

          div {
            background-color: #d9d9d9;
            height: 1px;
          }
        }

        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 20px;
          height: 20px;
          ${({ position }) => `${position.xPos}: 0;`}
          ${({ position }) => `${position.yPos}: 33px;`}
          transform: ${({ position }) =>
            position.xPos === "right"
              ? "translate(50%) rotate(45deg)"
              : "translate(-50%) rotate(45deg)"};
          border-top-left-radius: 5px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(59.2764px);
        }
      }
    }
  `,
};
