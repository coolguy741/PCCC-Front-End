import styled from "styled-components";
import { List, itemType } from "../../components/Home/List";
import mockData from "../../lib/mockData/notifications.json";
import { Icon } from "../../components/Global/Icon";
import { Photo } from "../../components/Accounts/Photo";
import { Text, Bold } from "../../components/Global/Text";
import { SmallButton } from "../../components/Global/SmallButton";

export const NotificationsPage = () => {
  const handleReview = () => {
    alert("Review activity X")
  }

  return (
    <PageContainer>
      <Title>Notifications</Title>
      <SubTitle>Activity</SubTitle>
      <NotificationsContainer>
        <tbody>
          {
            mockData.listData.map((notification, index) => (
              <tr key={index}>
                <td className="icon"><Icon name={notification.icon} width="44px"/></td>
                <td className="photo"><Photo src={notification.image} role="Admin" alt={notification.alt} width="40px"/></td>
                <td className="text"><Text><Bold>{notification.role}</Bold>{ " " + notification.content}</Text></td>
                <td className="date"><Text>{notification.date}</Text></td>
                <td className="reviewed">{notification.reviewed === false ? <SmallButton onClick={handleReview}>Review</SmallButton> : <></>}</td>
              </tr>
            ))}
        </tbody>
      </NotificationsContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title =styled.p`
  font-family: 'Noir Std';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 103.68%;
  letter-spacing: 0.02em;
  color: #C4C4C4;
  margin-bottom: 0px;
`

const SubTitle = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 143.18%;
  letter-spacing: 0.02em;
  color: #797979;
  margin: 0px;
  margin-top: 50px;
`

const NotificationsContainer = styled.table`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;

  tr {
    width: 100%;
    border-bottom: 1px solid black;
    height: 80px;

    .icon {
      width: 10%;
    }
    .photo {
      width: 6%;
    }
    .text {
      width: 60%;
    }
    .date {
      width: 20%;
    }
  }
`