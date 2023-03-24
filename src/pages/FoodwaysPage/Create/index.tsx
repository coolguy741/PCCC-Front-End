import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { Input } from "../../../components/Global/Input";
import { TextArea } from "../../../components/Global/TextArea";

const TAGS = [
  "vegan",
  "vegetarian",
  "gluten-free",
  "dairy-free",
  "pescatarian",
];

export const CreateFoodwaysPage = () => {
  return (
    <Container>
      <h1>Foodways</h1>
      <div className="content">
        <div className="content__header">
          <Link to="../">
            <Button>Back</Button>
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
                <span>Title:</span>
                <Input type="text" />
              </label>
              <label>
                <span>Intro:</span>
                <TextArea />
              </label>
            </div>
            <div className="content__body__form__tags">
              <h3>Add tags</h3>
              <div className="content__body__form__tags__list">
                <Input type="text" />
                {TAGS.map((tag) => (
                  <div className="content__body__form__tags__list__item">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h2>First Stop</h2>
          <div className="content__body__form">
            <div className="content__body__form__inputs--first-stop">
              <label>
                <span>Title:</span>
                <Input type="text" />
              </label>
              <label>
                <span>Intro:</span>
                <TextArea />
              </label>
            </div>
            <div className="content__body__form__inputs--first-stop">
              <label>
                <span>Location:</span>
                <Input type="text" />
              </label>
              <label>
                <span>Media:</span>
                <TextArea />
              </label>
            </div>
          </div>
          <div className="content__body__buttons">
            <Button>Add a Stop</Button>
            <Button>Create</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
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
              background-color: var(--yellow);
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
`;
