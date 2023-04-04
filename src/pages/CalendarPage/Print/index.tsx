import styled from "styled-components";
import { useEffect } from "react";

import { Calendar } from "../../../components/Global/Calendar";
import { useCalendarEventsStore } from "../../../stores/eventsStore";

export const CalendarPrintPage = () => {
  const { events, getEvents } = useCalendarEventsStore((state) => state);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
      <h3>Calendar</h3>
      <div>
        <div>Group A</div>
        <Calendar events={events} height="700px" headerToolbar={false} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  h3 {
    font-weight: 700;
    font-size: 2rem;
    font-family: "Noir Std";
    line-height: 3.125rem;
    margin: 0.25rem 0;
  }
  & > div {
    padding: 20px 40px;
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`;
