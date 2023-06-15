import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { AddEventModal } from "../../components/Calendar/AddEventModal";
import { CalendarFilter } from "../../components/Calendar/Filter/Index";
import { StandardAddEventModal } from "../../components/Calendar/StandardAddEventModal";
import { Typography } from "../../components/Global/Typography";
import { useUser } from "../../stores/userStore";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

export const CalendarPage = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    xPos: "",
    yPos: "",
    height: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  // TODO: FullCalendar type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateClick = (info: any) => {
    setSelectedDate(info.dateStr);
    const rectDOM = info.dayEl.getBoundingClientRect();

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

    if (info.view.type === "dayGridMonth") {
      setPosition({
        x: rectDOM.x + rectDOM.width / 2,
        y: rectDOM.y + rectDOM.height / 2 - (yPos === "top" ? 45 : -45),
        xPos: xPos,
        yPos: yPos,
        height: rectDOM.height,
      });
    } else {
      setPosition({
        x: rectDOM.x + rectDOM.width / 2,
        y: rectDOM.y + rectDOM.height / 2 - (yPos === "top" ? 45 : -45),
        xPos: xPos,
        yPos: "bottom",
        height: rectDOM.height,
      });
    }
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const { user } = useUser();

  return (
    <>
      <Style.Container>
        <Typography as="h1" variant="h1" weight="semi-bold" color="orange-500">
          Calendar
        </Typography>

        <Style.CalendarContainer>
          <Calendar
            height="750px"
            dateClick={handleDateClick}
            buttonText={{
              month: "Month",
              week: "Week",
              day: "Day",
            }}
          />
          <Style.CalendarSideMenu>
            <Button to="print" variant="orange">
              Print
            </Button>
            <div>
              <CalendarFilter />
            </div>
          </Style.CalendarSideMenu>
        </Style.CalendarContainer>
        {user?.role === "standard" && (
          <AddEventModal
            position={position}
            isOpen={isOpen}
            selectedDate={selectedDate}
            close={handleClosePopup}
          />
        )}
        {user?.role === "admin" && (
          <StandardAddEventModal
            position={position}
            isOpen={isOpen}
            selectedDate={selectedDate}
            close={handleClosePopup}
          />
        )}
      </Style.Container>
    </>
  );
};

const Style = {
  Container: styled.section`
    padding: 20px;
    gap: 40px;
    height: 100vh;
    margin-left: -32px;
    padding: 88px 40px 0 104px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")}
  `,
  CalendarContainer: styled.div`
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    padding-bottom: 1vw;
  `,
  CalendarSideMenu: styled.aside`
    padding-top: 1%;
    margin-top: -1%;
    overflow: hidden;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: end;
    row-gap: 3%;

    & > div {
      width: 90%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: end;
      overflow: hidden;
      row-gap: 20px;
    }
  `,
};
