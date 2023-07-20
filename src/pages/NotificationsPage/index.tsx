import styled from "styled-components";
import Button from "../../components/Button";
import Scrollable from "../../components/Global/Scrollable";
import { Typography } from "../../components/Typography";
import { avatars_data } from "../../lib/avatars/data";
import mockData from "../../lib/mockData/notifications.json";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export const NotificationsPage = () => {
  const handleReview = () => {
    alert("Review activity X");
  };

  return (
    <Style.PageContainer>
      <Typography tag="h2" color="netural-800" className="h2">
        Activity
      </Typography>
      <Scrollable thumbWidth="thin">
        <Style.ListContainer>
          {mockData.listData.map((notification, index) => (
            <Style.Row key={index}>
              <div className="icon">{avatars_data[0].icon({})}</div>
              <div className="text">
                <div className="role">{notification.role}</div>
                <p className="activity">{notification.content}</p>
              </div>
              <div className="date">{notification.date}</div>
              <Button className="review" onClick={handleReview} size="small">
                <span style={{ padding: "0px 15px" }}>View</span>
              </Button>
            </Style.Row>
          ))}
        </Style.ListContainer>
      </Scrollable>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    max-height: 100vh;
    padding: 0 1rem 0 0;

    .h2 {
      margin-bottom: 1rem;
    }
  `,
  ListContainer: styled.div`
    padding: 24px 32px 24px 32px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(60px);
    border-radius: 1.5rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-bottom: 1rem;
  `,
  Row: styled.li`
    width: 100%;
    border-bottom: 1px solid black;
    border-bottom: 1px solid var(--neutral-600);
    padding-top: ${convertToRelativeUnit(20, "vh")};
    padding-bottom: ${convertToRelativeUnit(20, "vh")};
    display: flex;
    align-items: center;

    .icon {
      padding-right: 2rem;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;
      color: var(--neutral-700);
    }
    .text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      .role {
        font-weight: 600;
        font-size: ${convertToRelativeUnit(22, "vw")};
        line-height: ${convertToRelativeUnit(24, "vh")};
        color: var(--neutral-600);
      }
      .activity {
        font-weight: 400;
        font-size: ${convertToRelativeUnit(18, "vw")};
        line-height: 24px;
        color: var(--neutral-600);
      }
    }
    .date {
      width: 226px;
      font-weight: 400;
      font-size: ${convertToRelativeUnit(18, "vw")};
      line-height: 24px;
      color: var(--neutral-700);
    }
  `,
  Text: styled.p``,
  Date: styled.p``,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 100%;
    padding-right: 16px;
    margin-right: -24px;
  `,
};
