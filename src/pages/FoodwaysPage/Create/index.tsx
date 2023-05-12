import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BackButton } from "../../../components/Global/BackButton";
import { Input } from "../../../components/Global/Input";
import { TextArea } from "../../../components/Global/TextArea";
import { useAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../consts";

export const CreateFoodwaysPage = () => {
  const { api } = useAPI();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    const response = await api.appFoodwaysCreate(
      {
        english: {
          title: title,
          info: description,
        },
        french: {
          title: title,
          info: description,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 200) {
      navigate("/dashboard/foodways");
    }
  };

  return (
    <Style.Container>
      <div className="content">
        <div className="content__header">
          <Link to="../">
            <BackButton />
          </Link>
          <div className="content__header__lang-buttons">
            <Button>English</Button>
            <Button>French</Button>
          </div>
          <Link to="../preview">
            <Button>Preview</Button>
          </Link>
        </div>
        <div className="content__body">
          <h2>Create Foodways</h2>
          <div className="content__body__form">
            <div className="content__body__form__inputs">
              <label>
                <Input
                  type="text"
                  placeholder="Title"
                  height="3.5rem"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <label>
                <TextArea
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </label>
            </div>
            {/* <div className="content__body__form__tags">
              <h3>Add tags</h3>
              <div className="content__body__form__tags__list">
                <Input type="text" />
              </div>
            </div> */}
          </div>
          <h2>First Stop</h2>
          <div className="content__body__form">
            <div className="content__body__form__inputs--first-stop">
              <label>
                <Input type="text" placeholder="Title" height="3.5rem" />
              </label>
              <label>
                <TextArea placeholder="Description" />
              </label>
            </div>
            <div className="content__body__form__inputs--first-stop">
              <label>
                <Input type="text" placeholder="Location" height="3.5rem" />
              </label>
              <label>
                <TextArea placeholder="Media" />
              </label>
            </div>
          </div>
          <div className="content__body__buttons">
            <Button>Add a Stop</Button>
            <Button onClick={handleCreate}>Create</Button>
          </div>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__header {
        display: flex;
        width: 100%;
        justify-content: space-between;

        &__lang-buttons {
          display: flex;
          gap: 1rem;
        }
      }

      &__body {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__form {
          display: flex;
          gap: 2rem;

          &__inputs {
            display: flex;
            flex-direction: column;
            width: 70%;
            gap: 1rem;

            &--first-stop {
              width: 50%;
              display: flex;
              flex-direction: column;
              gap: 1rem;

              label {
                display: flex;
                gap: 1rem;
                font-size: 1.2rem;

                span {
                  width: 5rem;
                }
              }

              textarea {
                width: 80%;
                height: 100px;
              }
            }

            label {
              display: flex;
              gap: 1rem;
              font-size: 1.2rem;
            }

            textarea {
              width: 100%;
              height: 100px;
            }
          }

          &__tags {
            display: flex;
            flex-direction: column;
            width: 30%;
            margin-top: -5rem;

            &__list {
              display: flex;
              gap: 1rem;
              flex-wrap: wrap;
              border: 1px solid #999;
              padding: 1rem;

              input {
                width: 100%;
              }

              &__item {
                background-color: var(--yellow-500);
                padding: 0.5rem;
              }
            }
          }
        }

        &__buttons {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 2rem;
        }
      }
    }
  `,
};
