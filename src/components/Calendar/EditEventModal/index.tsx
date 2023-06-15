import { EventImpl } from "@fullcalendar/core/internal";
import Cookies from "js-cookie";
import { DateTime } from "luxon";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { fetchEvents } from "../../../lib/api/helpers/fetchEvents";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useCalendarEventsStore } from "../../../stores/eventsStore";
import { EditNoteForm } from "../EditNoteForm";
import { TYPE_KEY_OBJ } from "../StandardPublishForm";

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
  selectedEvent: EventImpl;
}

const convertTimeToSelectFormat = (time: Date | undefined | null) => {
  if (time) {
    const iso = time.toISOString();
    const datetime = DateTime.fromISO(iso);
    const hour = datetime.hour;

    return `${hour > 9 ? hour : `0${hour}`}:00`;
  } else return;
};

export const EditEventModal: React.FC<Props> = ({
  isOpen = false,
  isConfirm = false,
  position,
  selectedDate,
  selectedEvent,
  close,
}) => {
  const { api } = useAPI();
  const [modalOpen, setModalOpen] = useState(false);
  const [startTime, setStartTime] = useState(
    convertTimeToSelectFormat(selectedEvent.start),
  );
  const [endTime, setEndTime] = useState(
    convertTimeToSelectFormat(selectedEvent.end),
  );
  const [eventType, setEventType] = useState<EventType | undefined>();
  const [noteDescription, setNoteDescription] = useState(
    selectedEvent.extendedProps.description,
  );
  const popupSize = useMemo<PopupSize>(() => {
    return isConfirm || !eventType ? "sm" : "md";
  }, [isConfirm, eventType]);
  const { addEvent, removeEvents } = useCalendarEventsStore((state) => state);

  const handleDelete = async () => {
    const response = await api.appCalendarsEventDelete(selectedEvent.id, {
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    });

    if (response.status === 204) {
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

  const handleEdit = async () => {
    const response = await api.appCalendarsEventUpdate(
      {
        id: selectedEvent.id,
        description: noteDescription,
        startDate: new Date(`${selectedDate}T${startTime}`).toISOString(),
        endDate: new Date(`${selectedDate}T${endTime}`).toISOString(),
        eventType: selectedEvent.extendedProps.type,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 204) {
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

  const handleClose = () => {
    close();
    setEventType(undefined);
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
            <h3>
              Edit{" "}
              {
                TYPE_KEY_OBJ[
                  selectedEvent.extendedProps.type as keyof typeof TYPE_KEY_OBJ
                ]
              }
            </h3>
            <img
              src="/icons/delete.svg"
              width="18"
              alt="delete"
              onClick={handleDelete}
            />
          </div>
          {/* {selectedEvent.extendedProps.type === "note" ? ( */}
          <EditNoteForm
            yPos={position.yPos}
            selectedEvent={selectedEvent}
            isOpen={isOpen}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            noteDescription={noteDescription}
            setNoteDescription={setNoteDescription}
            handleEdit={handleEdit}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
          {/* ) : (
            <EditPublishForm
              yPos={position.yPos}
              selectedEvent={selectedEvent}
              type={selectedEvent.extendedProps.type}
              handleEdit={handleEdit}
            />
          )} */}
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

          h3 {
            font-size: 1.3rem;
            font-weight: 600;
          }

          img {
            cursor: pointer;
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
