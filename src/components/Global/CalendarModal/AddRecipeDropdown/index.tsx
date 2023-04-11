import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../Button';
import { Dropdown } from '../Dropdown';

interface Props {
  isRecipe?: boolean;
  add: () => void;
}

export const AddRecipeDropdown: React.FC<Props> = ({
  isRecipe = false,
  add,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  return (
    <Dropdown
      isOpen={isOpen}
      close={close}
      open={open}
      trigger={<i>x</i>}
      content={
        <Style.AddPlanForm>
          <h3>Add {isRecipe ? 'Recipe' : 'Assessment'}</h3>
          <div className="form-container">
            <div>
              <div>Curriculum A</div>
              <div>
                <input type="checkbox" />
                <label>Make visible to group</label>
              </div>
            </div>
            <div>
              <div>
                <label>Group</label>
              </div>
              <select>
                <option>Group A </option>
              </select>
            </div>
            <div>
              <div>
                <label>Topic</label>
              </div>
              <select>
                <option>Garden Guardian</option>
              </select>
            </div>
            <div>
              <div>
                <label>Recipe name</label>
              </div>
              <select>
                <option>Chocolate granola bites</option>
              </select>
            </div>
          </div>
          <div>
            <Button onClick={close}>Add</Button>
          </div>
        </Style.AddPlanForm>
      }
    />
  );
};

const Style = {
  AddPlanForm: styled.div`
    padding: 30px;
    & h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0;
    }
    & .form-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 20px;
    }
  `,
};
