import styled from "styled-components";
import Button from "../../components/Button";
import { Bold, Text } from "../../components/Global/Text";
import { avatars_data } from "../../lib/avatars/data";
import mockData from "../../lib/mockData/notifications.json";

export const NotificationsPage = () => {
  const handleReview = () => {
    alert("Review activity X");
  };

  return (
    <Style.PageContainer>
      <Style.Background />
      <Style.TitleLine>
        <Style.Title>Notifications</Style.Title>
      </Style.TitleLine>
      <Style.ScrollContainer>
        <Style.ListContainer>
          <Style.SubTitle>Activity</Style.SubTitle>
          <Style.NotificationsContainer>
            {mockData.listData.map((notification, index) => (
              <Style.Row key={index}>
                <td className="icon">{avatars_data[0].icon()}</td>
                <td className="text">
                  <Text>
                    <Bold>{notification.role}</Bold>
                  </Text>
                  <Text>{notification.content}</Text>
                </td>
                <td className="date">
                  <Text>{notification.date}</Text>
                </td>
                <td className="review">
                  <Button onClick={handleReview} size="small">
                    <span style={{ padding: "0px 15px" }}>Review</span>
                  </Button>
                </td>
              </Style.Row>
            ))}
          </Style.NotificationsContainer>
        </Style.ListContainer>
      </Style.ScrollContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 118px 40px 0 40px;
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
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--neutral-600);
    }
    .date {
      width: 226px;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--neutral-700);
    }
    .review {
    }
  `,
  ScrollContainer: styled.div`
    overflow - y: auto;
    height: 100 %;
    padding - right: 16px;
    margin - right: -24px;

        :: -webkit - scrollbar {
      width: 8px;
      height: 20px;
    }

        /* Track */
        :: -webkit - scrollbar - track {
      display: none;
    }

        :: -webkit - scrollbar - button {
      display: none;
    }

        /* Handle */
        :: -webkit - scrollbar - thumb {
      background: #ffffff80;
      border - radius: 8px;
      box - shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }

        /* Handle on hover */
        :: -webkit - scrollbar - thumb:hover {
      background: #ffffff90;
    }
  `,
};
