import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../components/Global/Button';
import {
  LeftAlignedContainer,
  RightAlignedContainer,
} from '../../../components/Global/Container';
import { Icon } from '../../../components/Global/Icon';
import { SelectBox } from '../../../components/Global/SelectBox';
import { Text } from '../../../components/Global/Text';
import mockData from '../../../lib/mockData/profile/profile.json';

const avatars = [
  {
    name: 'carrot',
    color: 'green',
  },
  {
    name: 'apple',
    color: 'green',
  },
  {
    name: 'strawberry',
    color: 'green',
  },
  {
    name: 'carrot',
    color: 'blue',
  },
  {
    name: 'apple',
    color: 'blue',
  },
  {
    name: 'strawberry',
    color: 'blue',
  },
  {
    name: 'carrot',
    color: 'red',
  },
  {
    name: 'apple',
    color: 'red',
  },
  {
    name: 'strawberry',
    color: 'red',
  },
  {
    name: 'carrot',
    color: 'purple',
  },
  {
    name: 'apple',
    color: 'purple',
  },
  {
    name: 'strawberry',
    color: 'purple',
  },
];

const firstNameOptions = [
  {
    value: 'Amused',
    label: 'Amused',
  },
  {
    value: 'Amused1',
    label: 'Amused1',
  },
  {
    value: 'Amused2',
    label: 'Amused2',
  },
];

const secondNameOptions = [
  {
    value: 'Asparagus',
    label: 'Asparagus',
  },
  {
    value: 'Asparagus1',
    label: 'Asparagus2',
  },
  {
    value: 'Asparagus2',
    label: 'Asparagus2',
  },
];

export const ProfileSettingsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleGenerate = () => {
    alert('Generate ID number');
  };

  const handleSaveChanges = () => {
    alert('Save changes');
  };

  return (
    <PageContainer>
      <h1>Profile Settings</h1>
      <LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </LeftAlignedContainer>
      <Content>
        <ProfileContainer>
          <h3>Profile</h3>
          <ChangingAvatar>
            <UserAvatar>
              <h4>Avatar</h4>
              <img src={mockData[0].image} width="200px" height="200px" />
            </UserAvatar>
            <Avatars>
              <h4>Change avatar</h4>
              <AvatarList>
                {avatars.map((avatar, index) => (
                  <Icon key={index} name={avatar.name} width="42px" />
                ))}
              </AvatarList>
            </Avatars>
          </ChangingAvatar>
          <InputGroup>
            <InputContainer>
              <label>
                <Text>Name</Text>
              </label>
              <input type="text" />
            </InputContainer>
            <InputContainer>
              <label>
                <Text>Email Address</Text>
              </label>
              <input type="text" />
            </InputContainer>
            <InputContainer>
              <label>
                <Text>Username</Text>
              </label>
              <SelectBox
                options={firstNameOptions}
                onChange={() => {
                  return 'change';
                }}
              ></SelectBox>
              <SelectBox
                options={secondNameOptions}
                onChange={() => {
                  return 'change';
                }}
              ></SelectBox>
              <input type="text" style={{ width: '60px' }} />
            </InputContainer>
            <RightAlignedContainer>
              <Button onClick={handleGenerate}>Generate</Button>
            </RightAlignedContainer>
          </InputGroup>
        </ProfileContainer>
        <PasswordSettingContainer>
          <h3>Change password</h3>
          <InputGroup>
            <InputContainer>
              <label>
                <Text>Old password</Text>
              </label>
              <input type="text" />
            </InputContainer>
            <InputContainer>
              <label>
                <Text>New password</Text>
              </label>
              <input type="text" />
            </InputContainer>
            <InputContainer>
              <label>
                <Text>Confirm New password</Text>
              </label>
              <input type="text" />
            </InputContainer>
          </InputGroup>
        </PasswordSettingContainer>
      </Content>
      <RightAlignedContainer>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </RightAlignedContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  gap: 100px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangingAvatar = styled.div`
  display: flex;
  gap: 80px;
`;

const UserAvatar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatars = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;

  label {
    width: 150px;
  }

  select {
    width: 100px;
  }

  input {
    width: 300px;
  }
`;

const AvatarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 200px;
  height: 200px;
  overflow-y: scroll;
`;
