import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../../components/Global/Button';
import { Calendar } from '../../../../components/Global/CalendarModal/Calendar';
import { CheckboxGroup } from '../../../../components/Global/CheckboxGroup';

const checkboxOptions = [
  { label: 'Meal Plan', value: 'Meal Plan' },
  { label: 'Activities', value: 'Activities' },
  { label: 'Recipies', value: 'Recipies' },
  { label: 'Assessment', value: 'Assessment' },
];

export const AccountsGroupCalendarPage = () => {
  const handleCheckboxChange = () => {
    return 'handle check box';
  };

  return (
    <Style.PageContainer>
      <div className="header">
        <h1>Group Calendar</h1>
        <Style.AlignCenteredLink to="./print">
          <Button>Print</Button>
        </Style.AlignCenteredLink>
      </div>
      <div className="row">
        <div className="calendar-container">
          <Calendar type={'plan'} />
        </div>
        <div className="inputs-container">
          <select className="group-select-box">
            <option>Group A</option>
            <option>Group B</option>
            <option>Group C</option>
          </select>
          <div className="checkboxGroup-container">
            <CheckboxGroup
              options={checkboxOptions}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    .header {
      display: flex;
      justify-content: space-between;
      align-self: center;
    }

    .row {
      display: flex;

      .calendar-container {
        width: 70%;
        margin-right: 20px;
      }

      .inputs-container {
        margin-top: 20px;
        font-size: 1.2rem;

        .checkboxGroup-container {
          margin-top: 30px;
        }
      }
    }
  `,
  AlignCenteredLink: styled(Link)`
    align-self: center;
  `,
};
