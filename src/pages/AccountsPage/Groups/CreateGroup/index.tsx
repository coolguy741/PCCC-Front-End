import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { SmallButton } from "../../../../components/Global/SmallButton";
import { useAPI } from "../../../../hooks/useAPI";
import mockData from "../../../../lib/mockData/accounts/createGroup.json";
import { STORAGE_KEY_JWT } from "../../../consts";

export const AccountsCreateGroupPage = () => {
  const [members, setMembers] = useState<string[]>([]);
  const navigate = useNavigate();
  const { api } = useAPI();
  const [cookies] = useCookies([STORAGE_KEY_JWT]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleAdd = (name: string) => {
    setMembers((mem) => [...mem, name]);
  };

  const handleRemove = (index: number) => {
    const local = [...members];
    local.splice(index, 1);
    setMembers(local);
  };

  const handleCreate = async () => {
    const response = await api.appCustomGroupsCreate(
      {
        name: "test",
        description: "test",
      },
      {
        headers: {
          Authentication: `Bearer ${cookies.PCCC_TOKEN}`,
        },
      },
    );

    console.log(response);
  };

  return (
    <Style.Container>
      <div className="buttons-container">
        <Button onClick={handleBack}>Back</Button>
      </div>
      <h1>Create Group Page</h1>
      <div className="group-data-container">
        <div className="container">
          <p className="text">{"Last modified: " + mockData.lastModified}</p>
          <div className="owner-container">
            <p className="text">Owner : </p>
            <select>
              {mockData.professionals.map((professional, index) => (
                <option value={professional} key={index}>
                  {professional}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <p className="user-name-title-container">Username</p>
      <input type="text" className="user-name-search-input" />
      <div className="add-remove-container">
        <div className="add-container">
          {mockData.users.map((user, index) => (
            <div className="user-container" key={index}>
              <div className="image-name-container">
                <img src={user.img} placeholder="image" alt="user" />
                <p className="name">{user.name}</p>
              </div>
              <SmallButton onClick={() => handleAdd(user.name)}>
                Add
              </SmallButton>
            </div>
          ))}
        </div>
        <div className="remove-container">
          <div className="group-data-container">
            <div className="col">
              <p className="text">Group Name</p>
              <input type="text" />
            </div>
            <div className="col">
              <p className="text">Group ID</p>
              <p className="text">{mockData.groupID}</p>
            </div>
          </div>
          <div className="members-container">
            {members.map((member, index) => (
              <div className="member-container" key={index}>
                <p className="text">{member}</p>
                <></>
                <SmallButton onClick={() => handleRemove(index)}>
                  Remove
                </SmallButton>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="create-button-container">
        <Button onClick={handleCreate}>Create</Button>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    .buttons-container {
      margin: 20px 0px;
      display: flex;
      justify-content: space-between;
    }

    .text {
      padding: 0px;
      margin: 0px;
      line-height: 150%;
    }

    .group-data-container {
      display: flex;
      justify-content: flex-end;

      .container {
        display: flex;
        flex-direction: column;

        .owner-container {
          display: flex;
          align-items: center;

          .text {
            padding: 0px;
            margin: 0px;
          }

          select {
            margin-left: 10px;
            height: 40px;
            width: 150px;
          }
        }
      }
    }

    .user-name-title-container {
    }

    .user-name-search-input {
    }

    .add-remove-container {
      display: flex;
      gap: 20px;
      margin-top: 40px;

      .add-container {
        height: 300px;
        width: 300px;
        overflow-y: scroll;

        .user-container {
          padding: 0px;
          margin: 0px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .image-name-container {
            display: flex;
            align-items: center;

            img {
              border-radius: 50%;
              width: 30px;
              height: 30px;
            }

            p {
              padding-left: 10px;
            }
          }
        }
      }

      .remove-container {
        width: 70%;

        .group-data-container {
          justify-content: left;
          display: flex;

          .col {
            margin-right: 20px;
          }
        }

        .members-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
          padding: 30px;
          background-color: #d9d9d9;

          .member-container {
            width: 45%;
            margin-right: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }

    .create-button-container {
      display: flex;
      margin: 20px 0px;
      justify-content: flex-end;
    }
  `,
};
