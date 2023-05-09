import { InputHTMLAttributes, SyntheticEvent, useMemo, useRef } from "react";
import { PickerHandle } from "rsuite";
import DateRangePicker, { DateRange } from "rsuite/DateRangePicker";
import styled from "styled-components";

import { Icon } from "../../../Global/Icon";

export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  dates: [Date, Date] | null;
  setDates: (dates: [Date, Date]) => void;
}

const changeDateFormat = (dates: [Date, Date]) => {
  return `${new Intl.DateTimeFormat("fr-FR")
    .format(dates[0])
    .replaceAll("/", ".")} - ${new Intl.DateTimeFormat("fr-FR")
    .format(dates[1])
    .replaceAll("/", ".")}`;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  dates,
  setDates,
  ...props
}) => {
  const rangePicker = useRef<PickerHandle | null>(null);

  const handleClick = () => {
    rangePicker.current?.open && rangePicker.current.open();
  };

  const handleChange = (
    values: DateRange | null,
    event: SyntheticEvent<Element, Event>,
  ) => {
    values && setDates(values);
  };

  const value = useMemo(() => {
    return dates?.length ? changeDateFormat(dates) : "";
  }, [dates]);

  return (
    <Style.Container>
      <Style.DateRangeWrapper>
        <DateRangePicker
          ref={rangePicker}
          showOneCalendar
          format="dd.MM.yyyy"
          defaultValue={dates ?? [new Date(), new Date()]}
          renderValue={(value: DateRange, format: string) => (
            <div>{value ? changeDateFormat(value) : ""}</div>
          )}
          onChange={handleChange}
        />
      </Style.DateRangeWrapper>
      <Style.CustomInput onClick={handleClick}>
        <Style.Input readOnly required {...props} value={value} />
        <Style.RightButton>
          <Icon name="arrow-down" />
        </Style.RightButton>
      </Style.CustomInput>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
  `,
  DateRangeWrapper: styled.div`
    visibility: hidden;
    height: 0;
  `,
  CustomInput: styled.section`
    display: flex;
    position: relative;
    z-index: 1;
    justify-content: end;
  `,
  RightButton: styled.button`
    padding: 8px;
    height: 40px;
    background: var(--orange-400);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `,
  Input: styled.input`
    padding: 10px 20px;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    text-align: left;
    outline: 2px solid var(--book-200);
    outline-offset: 8px;
    border-radius: 4px;
    transition: outline 0.5s ease-in;
    color: var(--book-300);
    font-size: 16px;

    &:placeholder-shown {
      outline: 2px solid transparent;
    }

    &:invalid {
      outline: 2px solid transparent;
    }

    &:focus,
    &:active {
      outline: 2px solid var(--book-200);
    }

    &::placeholder {
      color: var(--book-200);
    }

    /* CSS to hide arrows for numeric input */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    &[type="number"] {
      -moz-appearance: textfield; /* Firefox */
      appearance: textfield;
    }
  `,
};
