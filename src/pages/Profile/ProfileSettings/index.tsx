import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { AlignmentStyle } from "../../../components/Global/Container";
import { Icon } from "../../../components/Global/Icon";
import { SelectBox } from "../../../components/Global/SelectBox";
import { Text } from "../../../components/Global/Text";
import mockData from "../../../lib/mockData/profile/profile.json";

const avatars = [
  {
    name: "carrot",
    color: "green",
  },
  {
    name: "apple",
    color: "green",
  },
  {
    name: "strawberry",
    color: "green",
  },
  {
    name: "carrot",
    color: "blue",
  },
  {
    name: "apple",
    color: "blue",
  },
  {
    name: "strawberry",
    color: "blue",
  },
  {
    name: "carrot",
    color: "red",
  },
  {
    name: "apple",
    color: "red",
  },
  {
    name: "strawberry",
    color: "red",
  },
  {
    name: "carrot",
    color: "purple",
  },
  {
    name: "apple",
    color: "purple",
  },
  {
    name: "strawberry",
    color: "purple",
  },
];

const firstNameOptions = [
  {
    value: "Amused",
    label: "Amused",
  },
  {
    value: "Amused1",
    label: "Amused1",
  },
  {
    value: "Amused2",
    label: "Amused2",
  },
];

const secondNameOptions = [
  {
    value: "Asparagus",
    label: "Asparagus",
  },
  {
    value: "Asparagus1",
    label: "Asparagus2",
  },
  {
    value: "Asparagus2",
    label: "Asparagus2",
  },
];

export const ProfileSettingsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleGenerate = () => {
    alert("Generate ID number");
  };

  const handleSaveChanges = () => {
    alert("Save changes");
  };

  return (
    <Style.PageContainer>
      <h1>Profile Settings</h1>
      <AlignmentStyle.LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </AlignmentStyle.LeftAlignedContainer>
      <Style.Content>
        <Style.ProfileContainer>
          <h3>Profile</h3>
          <Style.ChangingAvatar>
            <Style.UserAvatar>
              <h4>Avatar</h4>
              <img
                src={mockData[0].image}
                alt="avatar"
                width="200px"
                height="200px"
              />
            </Style.UserAvatar>
            <Style.Avatars>
              <h4>Change avatar</h4>
              <Style.AvatarList>
                {avatars.map((avatar, index) => (
                  <Icon key={index} name={avatar.name} width="42px" />
                ))}
              </Style.AvatarList>
            </Style.Avatars>
          </Style.ChangingAvatar>
          <Style.InputGroup>
            <Style.InputContainer>
              <label>
                <Text>Name</Text>
              </label>
              <input type="text" />
            </Style.InputContainer>
            <Style.InputContainer>
              <label>
                <Text>Email Address</Text>
              </label>
              <input type="text" />
            </Style.InputContainer>
            <Style.InputContainer>
              <label>
                <Text>Username</Text>
              </label>
              <SelectBox
                options={firstNameOptions}
                onChange={() => {
                  return "change";
                }}
              ></SelectBox>
              <SelectBox
                options={secondNameOptions}
                onChange={() => {
                  return "change";
                }}
              ></SelectBox>
              <input type="text" style={{ width: "60px" }} />
            </Style.InputContainer>
            <AlignmentStyle.RightAlignedContainer>
              <Button onClick={handleGenerate}>Generate</Button>
            </AlignmentStyle.RightAlignedContainer>
          </Style.InputGroup>
        </Style.ProfileContainer>
        <Style.PasswordSettingContainer>
          <h3>Change password</h3>
          <Style.InputGroup>
            <Style.InputContainer>
              <label>
                <Text>Old password</Text>
              </label>
              <input type="text" />
            </Style.InputContainer>
            <Style.InputContainer>
              <label>
                <Text>New password</Text>
              </label>
              <input type="text" />
            </Style.InputContainer>
            <Style.InputContainer>
              <label>
                <Text>Confirm New password</Text>
              </label>
              <input type="text" />
            </Style.InputContainer>
          </Style.InputGroup>
        </Style.PasswordSettingContainer>
      </Style.Content>
      <AlignmentStyle.RightAlignedContainer>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </AlignmentStyle.RightAlignedContainer>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Content: styled.div`
    display: flex;
    gap: 100px;
  `,
  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  PasswordSettingContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ChangingAvatar: styled.div`
    display: flex;
    gap: 80px;
  `,
  UserAvatar: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Avatars: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InputGroup: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 20px;
  `,
  InputContainer: styled.div`
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
  `,
  AvatarList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 200px;
    height: 200px;
    overflow-y: scroll;
  `,
};
