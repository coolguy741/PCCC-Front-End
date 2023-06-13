import styled from "styled-components";

export const ContentSlider = () => {
  const tabs = [
    "Theme",
    "Overview",
    "Educator notes",
    "Assessment",
    "Activities",
    "Recipes",
  ];
  return (
    <Style.SliderContainer>
      <Style.Slider min={0} max={tabs.length} value={2}>
        <>
          {tabs.map((tab, index) => (
            <>
              <span
                className={`slider-mark ${index < 2 ? "pass" : ""}`}
                key={`tab-${tab}`}
              >
                {index + 1}
                <span className="slider-label" key={`label-${tab}`}>
                  {tab.replaceAll("-", " ")}
                </span>
              </span>
              <span className={`slider-bar ${index < 2 ? "pass" : ""}`}></span>
            </>
          ))}
        </>
      </Style.Slider>
    </Style.SliderContainer>
  );
};

const Style = {
  SliderContainer: styled.div`
    width: 50%;
  `,
  Slider: styled.div.attrs(
    (props: { min: number; max: number; value: number }) => ({
      min: props.min || 0,
      max: props.max || 1,
      value: props.value || 0,
    }),
  )`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

    & > span.slider-bar {
      &:last-child {
        display: none;
      }

      &.pass {
        background: var(--blue-500);
      }

      width: 100%;
      margin: 0 10px;
      height: 2px;
      flex: 1;
      background: var(--blue-300);
    }

    & > span.slider-mark {
      & > .slider-label {
        position: absolute;
        white-space: nowrap;
        left: 50%;
        top: 50%;
        font-size: 1.6vh;
        text-transform: capitalize;
        transform: translate(-50%, 80%);
      }
      font-size: 1.3vh;
      width: 24px;
      height: 24px;
      color: var(--blue-500);
      position: relative;
      align-items: center;
      background: white;
      display: flex;
      justify-content: center;
      border-radius: 100%;
      ${({ value, max }) =>
        ` &:nth-last-child(${2 * (max - value)}) {
        border: 1px solid var(--blue-500);

        &:after{
          position: absolute;
          content: "";
          width: 100%;

          color: black;
        }
      }
    `}
      &.pass {
        background: var(--blue-500);

        &:after {
          content: "";
          display: block;
          position: absolute;
          height: 10px;
          width: 10px;
          background-size: 10px 10px;
          background-image: url(/images/icons/check.svg);
          background-repeat: no-repeat;
        }
      }
      &.active {
        border: 3px solid var(--blue-500);
      }

      & .content {
        position: absolute;
        transform: translate(calc(-50% + 10px), calc(50% + 10px));
      }
    }
  `,
};
