import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarOptions, EventApi, EventContentArg } from "@fullcalendar/core";
import styled from "styled-components";

export const Calendar: React.FC<CalendarOptions> = (props) => {
  const renderEventContent = (eventInfo: EventContentArg): JSX.Element => {
    return (
      <CustomEventTitle>
        <p className="event-title">{eventInfo.event?.title}</p>
        <p className="event-content">
          {eventInfo.event?.extendedProps.type.toUpperCase()} -{" "}
          {eventInfo.event?.extendedProps.description}
        </p>
      </CustomEventTitle>
    );
  };

  return (
    <Container>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,title,next",
          right: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        {...props}
        longPressDelay={1000}
        eventLongPressDelay={1000}
        selectLongPressDelay={1000}
        views={{
          dayGridMonth: {
            titleFormat: { year: "numeric", month: "short", day: "numeric" },
          },
        }}
        initialDate={new Date()}
        dayMaxEvents={true}
        eventContent={renderEventContent}
        allDaySlot={false}
        editable={true}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  .fc-toolbar-chunk {
    background: #2c3e50;

    .fc-button {
      &.fc-prev-button,
      &.fc-next-button {
        &:focus {
          box-shadow: none;
        }
        margin-bottom: 10px;
        span {
          &:hover {
            background: #999999;
          }
          border-radius: 100%;
          background: #d9d9d9;
          color: #000000;
        }
      }

      &:hover {
        border-color: #2c3e50;
        background: #2c3e50;
      }
    }
    .fc-toolbar-title {
      color: white;
      display: inline-block;
      margin: 0;
      padding: 20px;
    }
  }

  .fc-daygrid-day:hover {
    background: #bce0f5;
  }

  @media only screen and (max-width: 1440px) {
    .fc-header-toolbar.fc-toolbar {
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
  }
`;

const CustomEventTitle = styled.div`
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
`;
