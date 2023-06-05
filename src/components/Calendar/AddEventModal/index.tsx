import { useMemo, useState } from "react";
import styled from "styled-components";

import Cookies from "js-cookie";
import { useAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useCalendarEventsStore } from "../../../stores/eventsStore";
import { ButtonRow } from "../../Global/ButtonRow";
import { AddNoteForm } from "../AddNoteForm";
import { PublishForm } from "../PublishForm";

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

export const AddEventModal: React.FC<Props> = ({
  isOpen = false,
  isConfirm = false,
  position,
  selectedDate,
  close,
}) => {
  const { api } = useAPI();
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState<string>("note");
  const addEvent = useCalendarEventsStore((state) => state.addEvent);
  const [eventType, setEventType] = useState<EventType | undefined>();
  const popupSize = useMemo<PopupSize>(() => {
    return isConfirm || !eventType ? "sm" : "md";
  }, [isConfirm, eventType]);

  const handleAddEvent = async () => {
    const response = await api.appCalendarsEventToMyCalendarCreate(
      {
        description: "Test description",
        startDate: "2023-06-05T16:35:50.569Z",
        endDate: "2023-06-05T18:35:50.569Z",
        curriculumId: "",
        topicId: "",
        activityId: "",
        groupId: "",
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    console.log(response);

    handleClose();
  };

  const handleClose = () => {
    close();
    setEventType(undefined);
    setType("note");
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
          <div className="btn-container">
            <ButtonRow>
              <button
                className={type === "note" ? "active" : ""}
                onClick={() => setType("note")}
              >
                Add note
              </button>
              <button
                className={type === "publish" ? "active" : ""}
                onClick={() => setType("publish")}
              >
                Publish
              </button>
            </ButtonRow>
          </div>
          {type === "note" && (
            <AddNoteForm
              yPos={position.yPos}
              selectedDate={selectedDate}
              isOpen={isOpen}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              handleAddEvent={handleAddEvent}
            />
          )}
          {type === "publish" && (
            <PublishForm
              yPos={position.yPos}
              selectedDate={selectedDate}
              handleAddEvent={handleAddEvent}
            />
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

        .btn-container {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          border-bottom: 1px solid var(--neutral-100);
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
