import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Photo } from '../../components/Accounts/Photo';
import { Button } from '../../components/Global/Button';
import mockData from '../../lib/mockData/profile/profile.json';

export const ProfilePage = () => {
  const navigate = useNavigate();

  const toProfileSettings = () => {
    navigate('./../profile-settings');
  };
  return (
    <PageContainer>
      <Header>
        <h1>Your Profile</h1>
        <Button onClick={toProfileSettings}>Profile Settings</Button>
      </Header>
      <Content>
        <Photo src={mockData[1].image} role={mockData[1].role} width="100px" />
        {mockData[1].role === 'Standard' ? (
          <div className="user-info">
            <p className="bold-big-text">{mockData[1].userID}</p>
            <p className="text">Birth year: {mockData[1].birthYear}</p>
            <p className="text">Province: {mockData[1].province}</p>
            <p className="text">Created: {mockData[1].createdDate}</p>
          </div>
        ) : mockData[1].role === 'Professional' ? (
          <div className="user-info">
            <p className="bold-big-text">{mockData[1].userID}</p>
            <p className="bold-text">{mockData[1].name}</p>
            <p className="text">Birth year: {mockData[1].birthYear}</p>
            <p className="text">ID Code: {mockData[1].idCode}</p>
            <p className="text">School: {mockData[1].school}</p>
            <p className="text">Province: {mockData[1].province}</p>
            <p className="text">{mockData[1].email}</p>
            <p className="text">Created: {mockData[1].createdDate}</p>
          </div>
        ) : (
          <div className="user-info">
            <p className="bold-big-text">{mockData[1].userID}</p>
            <p className="bold-text">{mockData[1].name}</p>
            <p className="text">Birth year: {mockData[1].birthYear}</p>
            <p className="text">Province: {mockData[1].province}</p>
            <p className="text">{mockData[1].email}</p>
            <p className="text">Created: {mockData[1].createdDate}</p>
          </div>
        )}
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;

  .user-info {
    margin-left: 40px;
  }
`;
