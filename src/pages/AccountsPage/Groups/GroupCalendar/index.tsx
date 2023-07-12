import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { Calendar } from "../../../../components/Calendar";
import { CalendarFilter } from "../../../../components/Calendar/Filter/Index";
import { BackButton } from "../../../../components/Global/BackButton";
import { Typography } from "../../../../components/Typography";

const checkboxOptions = [
  { label: "Meal Plan", value: "Meal Plan" },
  { label: "Activities", value: "Activities" },
  { label: "Recipies", value: "Recipies" },
  { label: "Assessment", value: "Assessment" },
];

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
          height="65vh"
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
    .header {
      display: flex;
      justify-content: space-between;
      align-self: center;
      flex-direction: column;
      margin-top: 1rem;
    }

    .row {
      display: flex;

      .calendar-container {
        width: 70%;
        margin-right: 20px;
      }

      .inputs-container {
        margin-top: 20px;
        font-size: 1.2rem;

        .checkboxGroup-container {
          margin-top: 30px;
        }
      }
    }
  `,
  AlignCenteredLink: styled(Link)`
    align-self: center;
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
