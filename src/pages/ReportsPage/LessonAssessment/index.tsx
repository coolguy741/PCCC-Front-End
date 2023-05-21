import { DayRange } from "@amir04lm26/react-modern-calendar-date-picker";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { DropdownSelect } from "../../../components/Global/DropdownSelect";
import { DatePicker } from "../../../components/Reports/DatePicker";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

const TopicOptions = ["Topic A", "Topic B", "Topic C"];
const CurriculumOptions = ["Curriculum A", "Curriculum B", "Curriculum C"];

export const LessonAssessmentPage: React.FC = () => {
  const [theme, setTheme] = useState("");
  const [province, setProvince] = useState("");
  const [dates, setDates] = useState<DayRange | null>(null);
  const [curriculum, setCurriculum] = useState("");

  return (
    <Style.Container>
      <div className="select-container">
        <div className="labeled-input">
          <label>Theme</label>
          <DropdownSelect
            placeholder="Select Theme"
            selectedValue={theme}
            options={TopicOptions}
            onChange={(optionValue) => {
              setTheme(optionValue);
            }}
            height={convertToRelativeUnit(52, "vh")}
          />
        </div>
        <div className="labeled-input">
          <label>Time Period</label>
          <DatePicker
            dates={dates}
            label="Dates"
            setDates={setDates}
            placeholder="17.05.2023 - 21.05.2023"
            height={convertToRelativeUnit(52, "vh")}
          />
        </div>
        <div className="labeled-input">
          <label>Province</label>
          <DropdownSelect
            placeholder="Select Province"
            selectedValue={theme}
            options={TopicOptions}
            onChange={(optionValue) => {
              setTheme(optionValue);
            }}
            height={convertToRelativeUnit(52, "vh")}
          />
        </div>
        <div className="labeled-input">
          <label>Curriculum</label>
          <DropdownSelect
            placeholder="Select Curriculum"
            selectedValue={curriculum}
            options={CurriculumOptions}
            onChange={(optionValue) => {
              setCurriculum(optionValue);
            }}
            height={convertToRelativeUnit(52, "vh")}
          />
        </div>
      </div>
      <Button>Export</Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled.form`
    height: 100%;
    padding-top: 2.66vh;
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .select-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 2.66vh;
      .labeled-input {
        width: 27%;
        display: flex;
        flex-direction: column;
        gap: 1vh;

        label {
          color: var(--neutral-600);
        }

        select {
          height: 4.5vh;
        }
      }
    }

    button {
      align-self: flex-end;
    }

    option {
      background: rgba(255, 255, 255, 0.5);
    }
  `,
};
