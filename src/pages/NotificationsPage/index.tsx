import styled from "styled-components";
import Button from "../../components/Button";
import Scrollbar from "../../components/Global/Scrollbar";
import { avatars_data } from "../../lib/avatars/data";
import mockData from "../../lib/mockData/notifications.json";

export const NotificationsPage = () => {
  const handleReview = () => {
    alert("Review activity X");
  };

  return (
    <Scrollbar thumbWidth="thick">
      <Style.PageContainer>
        <h2>Activity</h2>
        <Style.ListContainer>
          <Style.SubTitle>Activity</Style.SubTitle>
          <Style.NotificationsContainer>
            {mockData.listData.map((notification, index) => (
              <Style.Row key={index}>
                <div className="icon">{avatars_data[0].icon({})}</div>
                <div className="text">
                  <div className="role">{notification.role}</div>
                  <p className="activity">{notification.content}</p>
                </div>
                <div className="date">{notification.date}</div>
                <Button className="review" onClick={handleReview} size="small">
                  <span style={{ padding: "0px 15px" }}>Review</span>
                </Button>
              </Style.Row>
            ))}
          </Style.NotificationsContainer>
        </Style.ListContainer>
      </Style.PageContainer>
    </Scrollbar>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 118px 70px 0 70px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    overflow: overlay;
    max-height: 100vh;
    font-family: "Noir Std";
    font-style: normal;
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    background: linear-gradient(252.45deg, #c4e8ff 2.54%, #fff9e0 87.48%);
    z-index: -1;
  `,
  TitleLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    color: var(--orange-500);
    padding-bottom: 38.53px;

    img: {
      color: var(--orange-500);
    }
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
  `,
  ListContainer: styled.div`
    padding: 24px 32px 24px 32px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  `,
  SubTitle: styled.p`
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    color: var(--neutral-600);
  `,
  NotificationsContainer: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-collapse: collapse;
    font-family: "Noir Std";
    font-style: normal;
    list-style-type: none;
  `,
  Row: styled.li`
    width: 100%;
    border-bottom: 1px solid black;
    border-bottom: 1px solid var(--neutral-600);
    padding: 24px 0px;
    display: flex;
    align-items: center;

    .icon {
      padding-right: 32px;
      font-weight: 600;
      font-size: 23px;
      line-height: 28px;
      color: var(--neutral-700);
    }
    .text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 9px;
      .role {
        font-weight: 600;
        font-size: 23px;
        line-height: 28px;
        color: var(--neutral-600);
      }
      .activity {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: var(--neutral-600);
      }
    }
    .date {
      width: 226px;
      font-weight: 400;
      font-size: 18px;
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
