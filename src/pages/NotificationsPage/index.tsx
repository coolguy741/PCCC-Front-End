import styled from "styled-components";
import Button from "../../components/Button";
import Scrollbar from "../../components/Global/Scrollbar";
import { avatars_data } from "../../lib/avatars/data";
import mockData from "../../lib/mockData/notifications.json";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";

export const NotificationsPage = () => {
  const handleReview = () => {
    alert("Review activity X");
  };

  return (
    <Scrollbar width="thick">
      <Style.PageContainer>
        <h2>Activity</h2>
        <Style.ListContainer>
          {mockData.listData.map((notification, index) => (
            <Style.Row key={index}>
              <div className="icon">{avatars_data[index].icon()}</div>
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
        </Style.ListContainer>
      </Style.PageContainer>
    </Scrollbar>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    h2 {
      margin-bottom: ${convertToRelativeUnit(16, "vh")};
    }
  `,
  ListContainer: styled.ul`
    padding: ${convertToRelativeUnit(24, "vh")};
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: ${convertToRelativeUnit(20, "vh")};
  `,
  Row: styled.li`
    width: 100%;
    border-bottom: 1px solid var(--neutral-600);
    display: flex;
    align-items: center;
    height: ${convertToRelativeUnit(128, "vh")};

    .icon {
      padding-right: ${convertToRelativeUnit(32, "vh")};
    }

    .text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: ${convertToRelativeUnit(9, "vh")};

      .role {
        font-weight: 600;
        font-size: ${convertToRelativeUnit(23, "vh")};
        line-height: ${convertToRelativeUnit(28, "vh")};
        color: var(--neutral-600);
      }
      .activity {
        font-weight: 400;
        font-size: ${convertToRelativeUnit(18, "vh")};
        line-height: ${convertToRelativeUnit(24, "vh")};
        color: var(--neutral-600);
      }
    }

    .date {
      width: ${convertToRelativeUnit(226, "vw")};
      font-weight: 400;
      font-size: ${convertToRelativeUnit(18, "vh")};
      line-height: ${convertToRelativeUnit(24, "vh")};
      color: var(--neutral-700);
    }
  `,
};
