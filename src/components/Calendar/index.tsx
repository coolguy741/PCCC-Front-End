import { CalendarOptions, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Cookies from "js-cookie";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../hooks/useAPI";
import { fetchEvents } from "../../lib/api/helpers/fetchEvents";
import { capitalize } from "../../lib/util/capitalize";
import { STORAGE_KEY_JWT } from "../../pages/consts";
import { useCalendarEventsStore } from "../../stores/eventsStore";
import { EditEventModal } from "./EditEventModal";

export const Calendar: React.FC<CalendarOptions> = (props) => {
  const { api } = useAPI();
  const calendarRef = useRef();
  const { events, addEvent, removeEvents } = useCalendarEventsStore(
    (state) => state,
  );
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    xPos: "",
    yPos: "",
    height: 0,
  });

  // FullCalendar types not updated?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateClick = (info: any) => {
    const rectDOM = info.el.getBoundingClientRect();
    setSelectedDate(info.event.start.toISOString().split("T")[0]);

    let xPos = "";
    let yPos = "";
    if (info.jsEvent.pageY / window.innerHeight > 0.5) {
      yPos = "bottom";
    } else {
      yPos = "top";
    }

    if (info.jsEvent.pageX / window.innerWidth > 0.5) {
      xPos = "right";
    } else {
      xPos = "left";
    }

    setPosition({
      x: rectDOM.x + rectDOM.width / 2,
      y: rectDOM.y + rectDOM.height / 2 - (yPos === "top" ? 45 : -45),
      xPos: xPos,
      yPos: yPos,
      height: rectDOM.height,
    });

    setSelectedEvent(info.event);
    setShowEventModal(true);
  };

  const handleClosePopup = () => {
    setShowEventModal(false);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEvent = async (info: any) => {
    const response = await api.appCalendarsEventUpdate(
      {
        id: info.event.id,
        startDate: new Date(
          `${selectedDate}T${info.event.start}`,
        ).toISOString(),
        endDate: new Date(`${selectedDate}T${info.event.end}`).toISOString(),
        description: info.event.extendedProps.description,
        eventType: info.event.extendedProps.type,
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
  };

  const getEvents = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const renderEventContent = (eventInfo: EventContentArg): JSX.Element => {
    return (
      <Style.CustomEventTitle>
        <p className="event-title">
          {capitalize(eventInfo.event?.extendedProps.type)}
        </p>
        <p className="event-content">
          {eventInfo.event?.extendedProps.theme
            ? `${eventInfo.event?.extendedProps.theme.toUpperCase()} — `
            : null}{" "}
          {eventInfo.event?.extendedProps.description}
        </p>
      </Style.CustomEventTitle>
    );
  };

  return (
    <Style.Container>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        buttonIcons={{ prev: "chevron-left", next: "chevron-right" }}
        buttonText={{ today: "Today" }}
        longPressDelay={1000}
        eventLongPressDelay={1000}
        selectLongPressDelay={1000}
        eventClick={handleDateClick}
        views={{
          dayGridMonth: {
            titleFormat: { year: "numeric", month: "short", day: "numeric" },
          },
        }}
        initialDate={new Date()}
        fixedWeekCount={false}
        dayMaxEventRows={true}
        eventContent={renderEventContent}
        editable={true}
        height="100%"
        expandRows={true}
        moreLinkClick="week"
        events={events}
        eventDrop={handleDragEvent}
        {...props}
      />
      {showEventModal && (
        <EditEventModal
          selectedDate={selectedDate}
          // TODO: non null assertion
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          selectedEvent={selectedEvent!}
          isOpen={showEventModal}
          position={position}
          close={handleClosePopup}
        />
      )}
      {/* {showEventModal && (
        <PreviewEventModal
          selectedDate={selectedDate}
          // TODO: non null assertion
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          selectedEvent={selectedEvent!}
          isOpen={showEventModal}
          position={position}
          close={handleClosePopup}
        />
      )} */}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 75%;
    height: 100%;
    position: relative;

    .fc {
      .fc-scrollgrid {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        border-radius: 1.2rem;
      }

      .fc-icon {
      }

      thead div {
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }

      .fc-button-active {
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
      }

      .fc-button-group,
      .fc-today-button {
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      }

      .fc-today-button {
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
        opacity: 1;
      }

      .fc-daygrid-day {
        .fc-daygrid-day-number {
          width: 2rem;
          height: 2rem;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.3rem;
        }
      }

      .fc-popover {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        border-radius: 1rem;
        border: none;

        &-header {
          padding: 1rem;
          font-weight: 600;
          font-size: 1.2rem;
          background-color: rgba(255, 255, 255, 0);
        }

        &-body {
          a {
            background: none !important;

            p {
              font-size: 1rem !important;
            }
          }
        }
      }

      .fc-event-main,
      .fc-event {
        padding: 0.1rem 0.25rem;
        box-shadow: none;

        .event-title {
          font-size: 0.9rem;
        }

        .event-content {
          color: var(--black);
          font-size: 0.8rem;
        }
      }

      & .fc-day-today {
        .fc-daygrid-day-number {
          background: linear-gradient(
            182.85deg,
            rgba(255, 215, 96, 0.8) 2.47%,
            rgba(255, 191, 0, 0.8) 97.72%
          );
          border-radius: 20px;
        }
      }
    }
  `,
  CustomEventTitle: styled.div`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    p {
      margin: 0;
      &.event-title {
        text-transform: capitalize;
        font-size: 9px;
        font-weight: 700;
      }
      &.event-content {
        font-size: 9px;
      }
    }
  `,
};
