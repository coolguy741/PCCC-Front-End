import styled from "styled-components";

import { Icon } from "../../../Global/Icon";
import { Modal, ModalProps } from "../../../Global/Modal";

export const RecipeModal: React.FC<Omit<ModalProps, "children">> = ({
  ...props
}) => {
  return (
    <Modal {...props} size="xl">
      <Style.Header>
        <Icon name="edit" />
        <Icon name="close" />
      </Style.Header>
      <Style.Container>
        <Style.Recipe>
          <div>
            <div>
              <label>Recipe name</label>
              <input value="Chocolate granola bites" readOnly />
            </div>
            <div>
              <label>Serving</label>
              <input value="4" readOnly />
            </div>
          </div>
          <img
            src="/images/plate-full-planner/recipes/chocolate.png"
            alt="chocolate"
          />
        </Style.Recipe>
        <Style.RecipeInfo>
          <div>
            <div>
              <label>Ingredients</label>
              <input value="Chocolate granola bites" readOnly />
            </div>
            <div>
              <label>Directions</label>
              <ul>
                <li>
                  Combine all the ingredients together in a large bowl mix until
                  well combined.
                </li>
                <li>Refrigerate for about 30 minutes</li>
                <li>
                  Scoop out a tablespoon portion of mixture, roll each portion
                  in the palm of your hands and place each ball into a
                  resealable container for storage.Bites should be refrigerated
                  to maintain shape or frozen for long term storage.Bites should
                  be refrigerated to maintain shape or frozen for long term
                  storage.
                </li>
                <li>
                  Bites should be refrigerated to maintain shape or frozen for
                  long term storage.
                </li>
              </ul>
            </div>
          </div>
        </Style.RecipeInfo>
      </Style.Container>
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
      width: 100%;
    }
  `,
  RecipeInfo: styled.section`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.header`
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
    img {
      margin-left: 20px;
    }
  `,
};
