import { FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { Input } from "../../../../components/Global/Input";
import { SmallButton } from "../../../../components/Global/SmallButton";
import { useAPI } from "../../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../consts";

export const AccountsEditGroupPage = () => {
  const [members, setMembers] = useState<string[]>([]);
  const [group, setGroup] = useState<any>(null);
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [cookies] = useCookies([STORAGE_KEY_JWT]);
  const { api } = useAPI();

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

  const getGroup = async () => {
    const response = await api.appCustomGroupsMyCreatedGroupsList(
      {},
      {
        headers: {
          Authorization: `Bearer ${cookies.PCCC_TOKEN}`,
        },
      },
    );

    console.log(response);

    if (response.data.items) {
      response.data.items.find((item: any) => {
        console.log(item.group.id, params.group);
        if (item.group.id === params.group) {
          setGroup(item);
          setGroupName(item.group.name);
        }
      });
    }
  };

  const handleEdit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (params.group) {
      const response = await api.appCustomGroupsUpdate(
        params.group,
        {
          name: groupName,
          description: "test",
          ownerId: group.group.ownerId,
          concurrencyStamp: group.group.concurrencyStamp,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.PCCC_TOKEN}`,
          },
        },
      );

      console.log(response);
    }
  };

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <Style.Form onSubmit={handleEdit}>
      <div className="buttons-container">
        <Button onClick={handleBack}>Back</Button>
      </div>
      <h1>Edit Group Page</h1>
      {group && (
        <>
          <div className="group-data-container">
            <div className="container">
              <p className="text">
                {"Last modified: " + group.group.lastModificationTime ||
                  group.group.creationTime}
              </p>
              <div className="owner-container">
                <p className="text">Owner : </p>
                <select>
                  <option>{group.owner.username}</option>
                </select>
              </div>
            </div>
          </div>
          <p className="user-name-title-container">Username</p>
          <input type="text" className="user-name-search-input" />
          <div className="add-remove-container">
            <div className="add-container">
              {group.users &&
                group.users.map((user: any, index: number) => (
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
                  <Input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>
                <div className="col">
                  <p className="text">{group.group.id}</p>
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
        </>
      )}
      <div className="edit-button-container">
        <Button type="submit">Save changes</Button>
      </div>
    </Style.Form>
  );
};

const Style = {
  Form: styled.form`
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

    .edit-button-container {
      display: flex;
      margin: 20px 0px;
      justify-content: flex-end;
    }
  `,
};
