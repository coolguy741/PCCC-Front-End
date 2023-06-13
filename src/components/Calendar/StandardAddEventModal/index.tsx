import Cookies from "js-cookie";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { PccServer23CalendarEventsCalendarEventType } from "../../../lib/api/api";
import { fetchEvents } from "../../../lib/api/helpers/fetchEvents";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
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
  "Activity",
  "Recipe",
  "Assessment",
  "Mealtime Moment",
  "Foodway",
  "Educator Note",
  "Topic",
  "Daily Discovery",
];

export const StandardAddEventModal: React.FC<Props> = ({
  isOpen = false,
  isConfirm = false,
  position,
  selectedDate,
  close,
}) => {
  const { api } = useAPI();
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] =
    useState<PccServer23CalendarEventsCalendarEventType | undefined>();
  const [eventType, setEventType] = useState<EventType | undefined>();
  const popupSize = useMemo<PopupSize>(() => {
    return isConfirm || !eventType ? "sm" : "md";
  }, [isConfirm, eventType]);
  const { addEvent, removeEvents } = useCalendarEventsStore((state) => state);

  const handleAddEvent = async () => {
    const response = await api.appCalendarsEventToMyCalendarCreate(
      {
        description: description,
        groupId: "",
        startDate: `${selectedDate}T${startTime}`,
        endDate: `${selectedDate}T${endTime}`,
        eventType: type,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 200) {
      const _events = await fetchEvents();

      if (_events) {
        removeEvents();

        _events.forEach((item) => {
          //@ts-ignore
          addEvent({
            ...item.calendarEvent,
            textColor:
              item?.calendarEvent?.type === "Note" ? "#F87C56" : "#B97A00",
            backgroundColor:
              item?.calendarEvent?.type === "Note" ? "#FEE5DD" : "#FFEFBF",
            borderColor:
              item?.calendarEvent?.type === "Note" ? "#F87C5699" : "#B97A00",
            display: "block",
          });
        });
      }
    }

    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartTime(e.currentTarget.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndTime(e.currentTarget.value);
  };

  const handleClose = () => {
    close();
    setEventType(undefined);
    setType(undefined);
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
            <Select
              value={type}
              onChange={(e) =>
                setType(
                  e.target.value.replace(
                    /\s/g,
                    "",
                  ) as PccServer23CalendarEventsCalendarEventType,
                )
              }
            >
              <option value={""}>—</option>
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
                handleAddEvent={handleAddEvent}
                setDescription={handleChange}
                description={description}
                startTime={startTime}
                setStartTime={handleStartTimeChange}
                endTime={endTime}
                setEndTime={handleEndTimeChange}
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
                handleAddEvent={handleAddEvent}
                startTime={startTime}
                setStartTime={handleEndTimeChange}
                endTime={endTime}
                setEndTime={handleEndTimeChange}
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
