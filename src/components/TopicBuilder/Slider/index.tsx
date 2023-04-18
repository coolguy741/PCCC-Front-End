import styled from "styled-components";

interface Props {
  tabs: string[];
  tabIndex: number;
  withLabel?: boolean;
}

export const TopicSlider: React.FC<Props> = ({
  tabs,
  tabIndex,
  withLabel = true,
}) => {
  return (
    <Style.SliderContainer>
      <Style.Slider min={0} max={tabs.length} value={tabIndex}>
        <div className="default-bar"></div>
        <div className="progress-bar"></div>
        <>
          {tabs.map((tab, index) => (
            <span
              className={`slider-mark ${index < tabIndex ? "pass" : ""}`}
              key={`tab-${tab}`}
            >
              {withLabel && (
                <span className="slider-label" key={`label-${tab}`}>
                  {tab.replaceAll("-", " ")}
                </span>
              )}
            </span>
          ))}
        </>
      </Style.Slider>
    </Style.SliderContainer>
  );
};

const Style = {
  SliderContainer: styled.div`
    padding: 20px 25px 40px 25px;
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
    justify-content: space-between;

    .default-bar,
    .progress-bar {
      width: 100%;
      height: 5px;
      transform: translate(0, -50%);
      top: 50%;
      position: absolute;
    }

    .default-bar {
      background: #d9d9d9;
    }

    .progress-bar {
      ${({ value, min, max }) =>
        `
    width: ${((value - min) * 100) / (max - min - 1)}% !important;
    `}
      background: var(--black);
    }

    .progress-bar {
      position: absolute;
    }

    & > span.slider-mark {
      & > .slider-label {
        position: absolute;
        white-space: nowrap;
        top: 50%;
        text-transform: capitalize;
        transform: translate(calc(-50% + 10px), 50%);
      }
      width: 20px;
      height: 20px;
      position: relative;
      background: #d9d9d9;
      border-radius: 100%;
      ${({ value, max }) =>
        `
      &:nth-last-child(${max - value}) {
        border: 3px solid var(--black);
      }
    `}
      &.pass {
        background: var(--black);
      }
      &.active {
        border: 3px solid var(--black);
      }

      & .content {
        position: absolute;
        transform: translate(calc(-50% + 10px), calc(50% + 10px));
      }
    }
  `,
};
