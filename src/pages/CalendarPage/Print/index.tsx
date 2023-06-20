import { EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import styled from "styled-components";
import { capitalize } from "../../../lib/util/capitalize";
import { formatDate } from "../../../lib/util/formatDate";
import { useCalendarEventsStore } from "../../../stores/eventsStore";

export const CalendarPrintPage = () => {
  const { events } = useCalendarEventsStore((state) => state);

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
      <div className="header">
        <h3>Group name: Group A</h3>
        <span>Print date: {formatDate(new Date().toString())}</span>
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          views={{
            dayGridMonth: {
              titleFormat: { year: "numeric", month: "short", day: "numeric" },
            },
          }}
          initialDate={new Date()}
          fixedWeekCount={false}
          dayMaxEventRows={true}
          eventContent={renderEventContent}
          height="700px"
          expandRows={true}
          headerToolbar={{
            left: "title",
            center: "",
            right: "",
          }}
          events={events}
          eventDisplay="block"
        />
        <div className="groups-container">
          <div className="groups">
            <span>Group A</span>
            <span>Group B</span>
            <span>Group C</span>
            <span>Group D</span>
          </div>
          <div className="events">
            <span>Notes</span>
            <span>Lesson Assessments</span>
          </div>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    padding: 20px;

    .header {
      display: flex;
      justify-content: space-between;

      h3 {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 1.3rem;
      }

      span {
        font-size: 1.2rem;
      }
    }

    .calendar {
      width: 100%;
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 40px;

      .fc {
        .fc-scrollgrid {
          background-color: var(--blue-100);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(59.2764px);
          border-radius: 1.2rem;
        }

        thead div {
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
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

        .fc-event-main,
        .fc-event {
          padding: 0.1rem 0.25rem;
          box-shadow: none;

          .event-title {
            font-size: 0.9rem;
          }

          .event-content {
            color: var(--neutral-600);
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

      .groups-container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        div {
          width: 100%;
          height: 100%;
          background-color: var(--blue-100);
          box-shadow: 0px 1.74391px 6.97565px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(25.8432px);
          border-radius: 6.97565px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 10px;
          font-size: 1.1rem;
          color: var(--neutral-800);
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
