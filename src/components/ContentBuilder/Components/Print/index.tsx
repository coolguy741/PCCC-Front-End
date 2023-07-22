import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { components } from "../../../../components/ContentBuilder/Components/Cards";
import { ContentBuilderStoreState } from "../../../../stores/contentBuilderStore";

interface Props {
  store: ContentBuilderStoreState;
}
export const ContentBuilderPrintPage: React.FC<Props> = ({ store }) => {
  const { slide: sIndex } = useParams();

  const slide = useMemo(() => {
    return store.slides[parseInt(sIndex ?? "0")] ?? [];
  }, [sIndex, store]);

  return (
    <Style.PageContainer>
      <Style.Content>
        {slide?.map(
          ({ width, height, x, y, component, componentState, id }, index) => (
            <Style.Component
              key={`column-${index}`}
              {...{
                width,
                height,
                x,
                y,
              }}
            >
              {component
                ? component({
                    slideIndex: parseInt(sIndex ?? "0"),
                    componentIndex: index,
                    state: componentState,
                    isEditable: false,
                  })
                : components[id - 1].component({
                    slideIndex: parseInt(sIndex ?? "0"),
                    componentIndex: index,
                    state: componentState,
                    isEditable: false,
                  })}
            </Style.Component>
          ),
        )}
      </Style.Content>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: calc(100vh - 300px);
    padding: 10px 86px 0px 86px;
    margin-top: 3%;
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
  DeleteButton: styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  `,
};
