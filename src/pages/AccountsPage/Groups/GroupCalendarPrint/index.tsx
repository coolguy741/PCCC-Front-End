import styled from "styled-components";
import { Calendar } from "../../../../components/Global/CalendarModal/Calendar";

export const AccountsGroupCalendarPrintPage = () => {
  const handleCheckboxChange = () => {
  }

  return (
    <PageContainer>
      <div className="left">
        Group A Activities
      </div>
      <div className="right">
        <h1>Group Calendar</h1>
        <div className="calendar-container">
          <Calendar type={"plan"} />
        </div>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;

  .left {
    width: 20%;
    padding: 40px;
    margin-top: 200px;
    font-size: 1.8rem;
  }

  .right {
    padding-bottom : 40px;
    padding-left : 40px;
    padding-right : 40px;
    width: 80%;
  }
  
`
