import {
  Calendar,
  CalendarDigit,
  Day,
  DayRange,
} from "@amir04lm26/react-modern-calendar-date-picker";
import {
  InputHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Icon } from "../../Global/Icon";

export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string;
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
  height = convertToRelativeUnit(52, "vh"),
  dates,
  setDates,
  label,
  ...props
}) => {
  const [showingDateRangePicker, setShowingDateRangePicker] = useState(false);
  const [parentHeight, setParentHeight] = useState(18);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateParentHeight = () => {
      if (containerRef.current) {
        const { height } = containerRef.current.getBoundingClientRect();
        setParentHeight(height);
      }
    };

    // Update the parent height on initial render and when the window is resized
    updateParentHeight();
    window.addEventListener("resize", updateParentHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateParentHeight);
    };
  }, []);

  const hideDateRangePicker = () => {
    setShowingDateRangePicker(() => false);
  };

  const calculateFontSize = () => {
    // Set the font size as a percentage of the parent's height
    const fontSizePercentage = 0.34; // Adjust this value as needed
    const fontSize = parentHeight * fontSizePercentage;
    return `${fontSize}px`;
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowingDateRangePicker(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setShowingDateRangePicker(false);
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

  return (
    <Style.Container>
      <Style.CustomInput
        style={{ height: height }}
        onClick={handleFocus}
        onBlur={handleBlur}
        isFocus={isFocused}
        tabIndex={0}
        ref={containerRef}
      >
        <input
          style={{ fontSize: calculateFontSize() }}
          readOnly
          required
          {...props}
          value={value}
        />
        <div className="icon-container">
          <Icon name="downSelect" />
        </div>
      </Style.CustomInput>

      {showingDateRangePicker && (
        <>
          <Style.Background onClick={hideDateRangePicker} />
          <Style.DateRangeWrapper>
            <Calendar
              value={dates ?? { from: null, to: null }}
              onChange={setDates}
              colorPrimary="var(--neutral-100)"
              colorPrimaryLight="var(--neutral-100)"
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
    border-radius: 8px;
    width: 100%;
    height: 100%;
    bottom: -20%;
    z-index: 302;
    transform: translate(0, 100%);

    .custom-calendar {
      padding: 0;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      min-height: 20rem;
      width: 100%;
    }

    .custom-today-day {
      border: 1px solid var(--neutral-200);
      color: var(--neutral-200) !important;
      &:after {
        visibility: hidden;
      }
    }

    .selected-range {
      border: 1px solid var(--neutral-100) !important;
      background: var(--neutral-100);
      color: var(--neutral-300) !important;
      font-family: "Noir std";
      border-radius: 100% !important;
    }

    .Calendar {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.2764px);

      .Calendar__header {
        padding: 16px;
      }

      .Calendar__yearSelectorItem {
        color: var(--neutral-200);
        &.-active .Calendar__yearSelectorText {
          color: var(--neutral-300);
        }
      }
      .Calendar__monthYear {
        color: var(--neutral-300);
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
        color: var(--neutral-300);
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
        color: var(--neutral-200);
        &:not(.-blank):not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween):not(.-selected):hover {
          color: var(--neutral-200) !important;
        }
      }
    }
  `,
  CustomInput: styled.section<{ isFocus: boolean }>`
    position: relative;
    width: 100%;
    display: inline-block;
    border-radius: 8px;
    border: ${(props) =>
      props.isFocus ? "1px solid var(--blue-500)" : "1px solid white"};
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    transition: box-shadow 0.3s ease-out 0s, border-color 0.3s ease-in 0s;

    .icon-container {
      height: ${convertToRelativeUnit(52, "vh")};
      width: ${convertToRelativeUnit(52, "vw")};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      flex-grow: 1;
      border-radius: 8px;
      padding-left: 16px;
      height: 100%;
      text-align: left;
      color: var(--neutral-600);

      &::placeholder {
        color: var(--neutral-600);
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
