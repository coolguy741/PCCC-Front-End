import styled from "styled-components";
import { TileTemplate, TileTemplateProps } from "../TileTemplate";

interface TilePanelTemplateProps extends TileTemplateProps {
  image: string;
  alt: string;
  order: number;
}

export const TilePanelTemplate = ({
  title,
  description,
  button,
  image,
  alt,
  order,
}: TilePanelTemplateProps) => {
  return (
    <style.PageContainer>
      <style.Background order={order}>
        <img src={image} alt={alt} />
      </style.Background>
      <style.TileContainer>
        <TileTemplate title={title} description={description} button={button} />
      </style.TileContainer>
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TileContainer: styled.div`
    padding-left: 100px;
  `,
  Background: styled.div<{ order: number }>`
    position: absolute;
    top: ${(props) => "calc(" + props.order + "00vh)"};
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: linear -
      gradient(111.02deg, var(--blue-200) 9.6%, var(--green-200) 97.76%);
    z-index: -1;

    img {
      position: absolute;
      top: 54px;
      right: 60px;
      width: 875.04px;
    }
  `,
};
