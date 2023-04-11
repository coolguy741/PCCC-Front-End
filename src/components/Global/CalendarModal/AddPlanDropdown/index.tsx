import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../Button';
import { Dropdown } from '../Dropdown';

interface Props {
  add: () => void;
}

export const AddPlanDropdown: React.FC<Props> = ({ add }) => {
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
          <h3>Add Meal Plan</h3>
          <div className="form-container">
            <div>
              <div>
                <input type="checkbox" />
                <label>Make visible to group</label>
              </div>
              <div>
                <select>
                  <option>Group A</option>
                </select>
              </div>
            </div>
            <div>
              <Button onClick={close}>Add</Button>
            </div>
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
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }
  `,
};
