import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { Calendar } from "../../../../components/Calendar";
import { CalendarFilter } from "../../../../components/Calendar/Filter/Index";
import { BackButton } from "../../../../components/Global/BackButton";
import { Typography } from "../../../../components/Typography";

export const AccountsGroupCalendarPage = () => {
  const navigate = useNavigate();

  return (
    <Style.PageContainer>
      <div className="header">
        <Typography tag="h2">Group Calendar</Typography>
        <BackButton onClick={() => navigate("../")} />
      </div>
      <Style.CalendarContainer>
        <Calendar
          height="78%"
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
            <CalendarFilter groupCalendar />
          </div>
        </Style.CalendarSideMenu>
      </Style.CalendarContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 20px;
    height: 100vh;
    margin-left: -32px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;

    .header {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 1rem 0;
      height: 10%;
    }
  `,
  CalendarContainer: styled.div`
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    padding-bottom: 1vw;
    position: relative;
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
