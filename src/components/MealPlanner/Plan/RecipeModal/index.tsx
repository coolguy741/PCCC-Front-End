import styled from "styled-components";
import Button from "../../../Button";

import { Icon } from "../../../Global/Icon";
import { Modal, ModalProps } from "../../../Global/Modal";
import Scrollable from "../../../Global/Scrollable";
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
            <Scrollable>
              <Style.Ingredients>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    2 cups
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Quick oats
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1/3 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Coconut flakes
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Creamy not butter of your choice
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    2 cups
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Ground flaxseed
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" as="h6" weight="medium">
                    1 cup
                  </Typography>
                  <Typography variant="paragraph3" as="span">
                    Chocolate chips
                  </Typography>
                </div>
              </Style.Ingredients>
            </Scrollable>
          </Style.IngredientsContainer>
          <Style.DirectionsContainer>
            <label>Directions</label>
            <Scrollable>
              <Style.Directions>
                <ol>
                  <li>
                    Combine all the ingredients together in a large bowl mix
                    until well combined.
                  </li>
                  <li>Refrigerate for about 30 minutes</li>
                  <li>
                    Scoop out a tablespoon portion of mixture, roll each portion
                    in the palm of your hands and place each ball into a
                    resealable container for storage.Bites should be
                    refrigerated to maintain shape or frozen for long term
                    storage.Bites should be refrigerated to maintain shape or
                    frozen for long term storage.
                  </li>
                  <li>
                    Bites should be refrigerated to maintain shape or frozen for
                    long term storage.
                  </li>
                  <li>
                    Combine all the ingredients together in a large bowl mix
                    until well combined.
                  </li>
                  <li>Refrigerate for about 30 minutes</li>
                  <li>
                    Scoop out a tablespoon portion of mixture, roll each portion
                    in the palm of your hands and place each ball into a
                    resealable container for storage.Bites should be
                    refrigerated to maintain shape or frozen for long term
                    storage.Bites should be refrigerated to maintain shape or
                    frozen for long term storage.
                  </li>
                  <li>
                    Bites should be refrigerated to maintain shape or frozen for
                    long term storage.
                  </li>
                  <li>
                    Combine all the ingredients together in a large bowl mix
                    until well combined.
                  </li>
                  <li>Refrigerate for about 30 minutes</li>
                  <li>
                    Scoop out a tablespoon portion of mixture, roll each portion
                    in the palm of your hands and place each ball into a
                    resealable container for storage.Bites should be
                    refrigerated to maintain shape or frozen for long term
                    storage.Bites should be refrigerated to maintain shape or
                    frozen for long term storage.
                  </li>
                  <li>
                    Bites should be refrigerated to maintain shape or frozen for
                    long term storage.
                  </li>
                  <li>
                    Combine all the ingredients together in a large bowl mix
                    until well combined.
                  </li>
                  <li>Refrigerate for about 30 minutes</li>
                  <li>
                    Scoop out a tablespoon portion of mixture, roll each portion
                    in the palm of your hands and place each ball into a
                    resealable container for storage.Bites should be
                    refrigerated to maintain shape or frozen for long term
                    storage.Bites should be refrigerated to maintain shape or
                    frozen for long term storage.
                  </li>
                  <li>
                    Bites should be refrigerated to maintain shape or frozen for
                    long term storage.
                  </li>
                  <li>
                    Combine all the ingredients together in a large bowl mix
                    until well combined.
                  </li>
                  <li>Refrigerate for about 30 minutes</li>
                  <li>
                    Scoop out a tablespoon portion of mixture, roll each portion
                    in the palm of your hands and place each ball into a
                    resealable container for storage.Bites should be
                    refrigerated to maintain shape or frozen for long term
                    storage.Bites should be refrigerated to maintain shape or
                    frozen for long term storage.
                  </li>
                  <li>
                    Bites should be refrigerated to maintain shape or frozen for
                    long term storage.
                  </li>
                </ol>
              </Style.Directions>
            </Scrollable>
          </Style.DirectionsContainer>
        </Style.RecipeInfo>
      </Style.Container>
      <div className="flex justify-end">
        <Button variant="orange">Print</Button>
      </div>
    </Modal>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    height: 50%;
    overflow: hidden;
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
      background: #ffffff50;
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
    flex-direction: column;
    overflow: hidden;
    gap: 5%;

    .directions {
      overflow: auto;
      height: 65%;
    }
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
    flex-direction: column;
    label {
      color: var(--neutral-500);
      font-size: 1.5vh;
      margin-bottom: 1vh;
    }

    & > section {
      background: #ffffff50;
      border-radius: 0.5rem;
      padding: 5%;
    }
  `,
  DirectionsContainer: styled.div`
    overflow: hidden;
    height: 65%;
    display: flex;
    flex-direction: column;
    label {
      color: var(--neutral-500);
      font-size: 1.5vh;
      margin-bottom: 1vh;
    }

    & > section {
      background: #ffffff50;
      border-radius: 0.5rem;
      padding: 5%;
    }
  `,
  Directions: styled.div`
    width: 100%;
    row-gap: 15%;
    column-gap: 5%;
    padding: 0 5%;
    ol {
      list-style: decimals;
      li {
        padding: 1%;
        &:before {
          content: counter(list-item) " ";
          left: -10%;
        }
      }
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  Ingredients: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15%;
    column-gap: 5%;

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
};
