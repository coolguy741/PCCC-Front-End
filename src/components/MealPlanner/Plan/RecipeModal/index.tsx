import styled from "styled-components";
import Button from "../../../Button";

import { Icon } from "../../../Global/Icon";
import { Modal, ModalProps } from "../../../Global/Modal";
import { Typography } from "../../../Global/Typography";

export const RecipeModal: React.FC<
  Omit<ModalProps, "children"> & { selectedRecipeId?: number }
> = ({ ...props }) => {
  return (
    <Modal {...props} size="xl" withoutScroll>
      <Style.Header>
        <Icon name="edit" />
        <Icon name="close" onClick={props.close} />
      </Style.Header>
      <Style.Container>
        <Style.Recipe>
          <Style.RecipeDetail>
            <div>
              <label>Recipe name</label>
              <Typography
                className="detail-content"
                variant="h3"
                as="h3"
                weight="semi-bold"
              >
                Chocolate granola bites
              </Typography>
            </div>
            <div>
              <label>Serving</label>
              <Typography
                variant="paragraph4"
                as="label"
                className="detail-content"
              >
                4
              </Typography>
            </div>
          </Style.RecipeDetail>
          <img
            src="/images/plate-full-planner/recipes/chocolate.png"
            alt="chocolate"
          />
        </Style.Recipe>
        <Style.RecipeInfo>
          <Style.IngredientsContainer>
            <label>Ingredients</label>
            <Style.Ingredients>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
              <li>value="Chocolate granola bites" readOnly</li>
            </Style.Ingredients>
          </Style.IngredientsContainer>
          <div>
            <label>Directions</label>
            <ul>
              <li>
                Combine all the ingredients together in a large bowl mix until
                well combined.
              </li>
              <li>Refrigerate for about 30 minutes</li>
              <li>
                Scoop out a tablespoon portion of mixture, roll each portion in
                the palm of your hands and place each ball into a resealable
                container for storage.Bites should be refrigerated to maintain
                shape or frozen for long term storage.Bites should be
                refrigerated to maintain shape or frozen for long term storage.
              </li>
              <li>
                Bites should be refrigerated to maintain shape or frozen for
                long term storage.
              </li>
            </ul>
          </div>
        </Style.RecipeInfo>
      </Style.Container>
      <Button variant="orange">Print</Button>
    </Modal>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    & > section {
      width: 50%;
      padding: 16px;
    }
  `,
  Recipe: styled.section`
    display: flex;
    flex-direction: column;
    img {
      width: 104%;
      margin: 0 -2%;
    }
  `,
  RecipeDetail: styled.div`
    display: flex;
    gap: 5%;

    .detail-content {
      display: flex;
      align-items: center;
      background: #ffffff;
      border-radius: 0.5rem;
      height: 6vh;
      padding: 0 2vh;
    }

    & > div {
      display: flex;
      flex-direction: column;

      &:first-child {
        width: 80%;
      }
      &:last-child {
        width: 15%;
      }

      label {
        color: var(--neutral-500);
        font-size: 1.5vh;
        margin-bottom: 1vh;
      }
    }
  `,
  RecipeInfo: styled.section`
    display: flex;
    max-height: 722px;
    flex-direction: column;
    overflow: hidden;
  `,
  Header: styled.header`
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
    img {
      margin-left: 20px;
    }
  `,
  IngredientsContainer: styled.div`
    overflow: hidden;
    height: 35%;
    display: flex;
  `,
  Ingredients: styled.ul`
    overflow-y: auto;
    flex: auto;
  `,
};
