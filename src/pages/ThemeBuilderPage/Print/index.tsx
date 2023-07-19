import styled from "styled-components";

import { useThemeStore } from "../../../stores/contentBuilderStore";

export const ThemePrintPage = () => {
  const { slides, updatePageState } = useThemeStore();

  return (
    <>
      {slides.map((slide, sIndex) => (
        <Style.Page>
          <Style.ContentWrapper>
            <Style.Content>
              {slide?.map(
                ({ width, height, x, y, component, componentState }, index) => (
                  <Style.Component
                    key={`column-${index}`}
                    {...{
                      width,
                      height,
                      x,
                      y,
                    }}
                  >
                    {component({
                      slideIndex: sIndex,
                      componentIndex: index,
                      state: componentState,
                      updatePageState,
                    })}
                  </Style.Component>
                ),
              )}
            </Style.Content>
          </Style.ContentWrapper>
        </Style.Page>
      ))}
    </>
  );
};

const Style = {
  Page: styled.div`
    width: 100%;
    height: 70vh;
  `,
  ContentWrapper: styled.section`
    display: flex;
    height: 100%;
  `,
  Content: styled.div`
    flex: 1;
    width: 100%;
    margin: 0.5vh 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1.87vh 1vw;
    column-gap: 1.7%;
    row-gap: 3.2%;
    position: relative;
    background: #ffffff50;
    border-radius: 0.5rem;
    .grid {
      height: 100%;
      background: gray;
    }
  `,
  Component: styled.div.attrs(
    (props: { width: number; height: number; x: number; y: number }) => ({
      width: props.width ?? 1,
      height: props.height ?? 1,
      x: props.x ?? 0,
      y: props.y ?? 0,
    }),
  )`
    position: absolute;
    left: ${(props) => props.x * 33 + 1.3}%;
    height: ${(props) => props.height * 46.2}%;
    top: ${(props) => props.y * 49 + 2.5}%;
    width: ${(props) => props.width * 31.5 + props.width - 1}%;
    border-radius: 1rem;

    .delete-button-container {
      position: relative;
    }
  `,
};
