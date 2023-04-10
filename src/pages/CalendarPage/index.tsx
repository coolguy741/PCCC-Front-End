import { useState, useEffect } from "react";
import styled from "styled-components";

import { Calendar } from "../../components/Global/Calendar";
import { LinkButton } from "../../components/Global/Button/Link";
import { CalendarPopup } from "../../components/Calendar/Popup";
import { CalendarFilter } from "../../components/Calendar/Filter/Index";
import { useCalendarEventsStore } from "../../stores/eventsStore";

export const CalendarPage = () => {
  const { events, getEvents } = useCalendarEventsStore((state) => state);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    getEvents();
  }, []);

  const handleDateClick = (info: any) => {
    setSelectedDate(info.dateStr);
    const rectDOM = info.dayEl.getBoundingClientRect();

    setPosition({
      x: rectDOM.x + rectDOM.width / 2,
      y: rectDOM.y + rectDOM.height / 2,
    });
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <Calendar
          events={events}
          height="750px"
          dateClick={handleDateClick}
          buttonText={{
            month: "Month",
            week: "Week",
            day: "Day",
          }}
        />
        <CalendarSideMenu>
          <LinkButton to="print">Print</LinkButton>
          <div>
            <CalendarFilter />
          </div>
        </CalendarSideMenu>
      </Container>
      <CalendarPopup
        position={position}
        isOpen={isOpen}
        selectedDate={selectedDate}
        close={handleClosePopup}
      />
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 40px;
`;

const CalendarSideMenu = styled.div`
  width: 250px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: end;
  row-gap: 64px;

  & > div {
    flex: auto;
    display: flex;
    flex-direction: column;
    align-items: end;
    row-gap: 20px;
  }
`;
