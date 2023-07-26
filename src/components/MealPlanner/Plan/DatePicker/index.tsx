import {
  Calendar,
  CalendarDigit,
  Day,
  DayRange,
} from "@amir04lm26/react-modern-calendar-date-picker";
import { InputHTMLAttributes, useMemo, useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../Global/Icon";
import { Typography } from "../../../Global/Typography";

import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { startOfWeek } from "date-fns";

export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  dates: DayRange | null;
  label?: string;
  setDates: (dates: DayRange) => void;
}
const myCustomLocale = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  weekDays: [
    {
      name: "Sunday",
      short: "SUN",
    },
    {
      name: "Monday",
      short: "MON",
    },
    {
      name: "Tuesday",
      short: "TUE",
    },
    {
      name: "Wednesday",
      short: "WED",
    },
    {
      name: "Thursday",
      short: "THU",
    },
    {
      name: "Friday",
      short: "FRI",
    },
    {
      name: "Saturday",
      short: "SAT",
      isWeekend: true,
    },
  ],
  weekStartingIndex: 0,
  getToday(gregorainTodayObject: Day) {
    return gregorainTodayObject;
  },
  toNativeDate(date: Day) {
    return new Date(date.year, date.month - 1, date.day);
  },
  getMonthLength(date: Day) {
    return new Date(date.year, date.month, 0).getDate();
  },
  transformDigit(digit: CalendarDigit) {
    return digit;
  },
  nextMonth: "Next Month",
  previousMonth: "Previous Month",
  openMonthSelector: "Open Month Selector",
  openYearSelector: "Open Year Selector",
  closeMonthSelector: "Close Month Selector",
  closeYearSelector: "Close Year Selector",
  defaultPlaceholder: "Select...",
  from: "from",
  to: "to",
  digitSeparator: ",",
  yearLetterSkip: 0,
  isRtl: false,
};

// const changeDateFormat = (dates: [Date, Date]) => {
//   return `${new Intl.DateTimeFormat("fr-FR")
//     .format(dates[0])
//     .replaceAll("/", ".")} - ${new Intl.DateTimeFormat("fr-FR")
//     .format(dates[1])
//     .replaceAll("/", ".")}`;
// };

export const DatePicker: React.FC<DatePickerProps> = ({
  dates,
  setDates,
  label,
  ...props
}) => {
  const [showingDateRangePicker, setShowingDateRangePicker] = useState(false);

  const showDateRangePicker = () => {
    setShowingDateRangePicker(() => true);
  };

  const hideDateRangePicker = () => {
    setShowingDateRangePicker(() => false);
  };

  const value = useMemo(() => {
    if (dates?.from) {
      const { year, month, day } = dates.from;
      const startDate = `${String(month).padStart(2, "0")}/${String(
        day,
      ).padStart(2, "0")}/${year}`;

      if (dates?.to) {
        const { year, month, day } = dates.from;
        const endDate = `${String(month).padStart(2, "0")}/${String(
          day,
        ).padStart(2, "0")}/${year}`;

        return `${startDate}-${endDate}`;
      }
      return `${startDate}-`;
    }
    return "";
  }, [dates]);

  const selectDateHandler = (date: any) => {
    const start = startOfWeek(
      new Date(date.from.year, date.from.month - 1, date.from.day),
    );

    setDates({
      from: {
        year: start.getFullYear(),
        month: start.getMonth() + 1,
        day: start.getDate(),
      },
      to: {
        year: start.getFullYear(),
        month: start.getMonth() + 1,
        day: start.getDate() + 6,
      },
    });
  };

  return (
    <Style.Container>
      {!!label && (
        <Typography
          variant="paragraph3"
          weight="medium"
          as="label"
          color="book-300"
        >
          {label}
        </Typography>
      )}
      <Style.CustomInput onClick={showDateRangePicker}>
        <Style.Input readOnly required {...props} value={value} />
        <Style.RightButton>
          <Icon name="arrow-down" />
        </Style.RightButton>
      </Style.CustomInput>

      {showingDateRangePicker && (
        <>
          <Style.Background onClick={hideDateRangePicker} />
          <Style.DateRangeWrapper>
            <Calendar
              value={dates ?? { from: null, to: null }}
              onChange={selectDateHandler}
              colorPrimary="var(--book-100)"
              colorPrimaryLight="var(--book-100)"
              calendarClassName="custom-calendar"
              calendarRangeStartClassName="selected-range"
              calendarRangeBetweenClassName="selected-range"
              calendarRangeEndClassName="selected-range"
              calendarTodayClassName="custom-today-day"
              locale={myCustomLocale}
            />
          </Style.DateRangeWrapper>
        </>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  `,
  DateRangeWrapper: styled.div`
    position: absolute;
    border-radius: 4px;
    width: 100%;
    bottom: -10px;
    z-index: 302;
    transform: translate(0, 100%);

    .custom-calendar {
      padding: 0;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      min-height: 20rem;
      width: 100%;
    }

    .custom-today-day {
      border: 1px solid var(--book-200);
      color: var(--book-200) !important;
      &:after {
        visibility: hidden;
      }
    }

    .selected-range {
      border: 1px solid var(--book-100) !important;
      background: var(--book-100);
      color: var(--book-300) !important;
      font-family: "Noir std";
      border-radius: 100% !important;
    }

    .Calendar {
      .Calendar__header {
        padding: 16px;
      }

      .Calendar__yearSelectorItem {
        color: var(--book-200);
        &.-active .Calendar__yearSelectorText {
          color: var(--book-300);
        }
      }
      .Calendar__monthYear {
        color: var(--book-300);
        font-family: "Noir std";

        .Calendar__yearText {
          padding-right: 20px;
          &:after {
            position: absolute;
            content: url(/images/icons/arrow-down-brown.svg);
            width: 20px;
            right: 0;
            height: 20px;
          }
        }
      }
      .Calendar__weekDays {
        padding: 0 8px;
        font-family: "Noir std";
        font-size: 12px;
        color: var(--book-300);
        margin-bottom: 0;
      }

      .Calendar__section {
        padding: 8px;
        &.-hiddenNext {
          transform: translateX(100%);
        }
        &.-hiddenPrevious {
          transform: translateX(-100%);
        }
      }

      .Calendar__day {
        color: var(--book-200);
        &:not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween):not(.-selected):hover {
          color: var(--book-200) !important;
        }
      }
    }
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
  Background: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 300;
  `,
};
