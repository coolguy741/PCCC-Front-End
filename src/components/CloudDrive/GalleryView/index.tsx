import styled from "styled-components";
import Scrollable from "../../Global/Scrollable";
import { Typography } from "../../Typography";

const text_props = {
  height: "60vh",
  weight: 500,
  color: "neutral-400",
};

export function CDGalleryView(props: any) {
  const { list_items } = props;
  return (
    <Style.Container height="50vh" thumbWidth="thin">
      <figure>
        <Typography tag="label" {...text_props}>
          Name
        </Typography>
        <Typography tag="label" {...text_props}>
          Sharing
        </Typography>
        <Typography tag="label" {...text_props}>
          Size
        </Typography>
        <Typography tag="label" {...text_props}>
          Date
        </Typography>
      </figure>
      <div className="cd-list-content">
        {list_items.map((el: any) => (
          <Style.Item />
        ))}
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled(Scrollable)`
    figure {
      height: 5vh;
      border: 1px solid red;
      border-bottom: 2px solid #eaeaea;
    }
  `,
  Item: styled.article`
    width: 100%;
    height: 8vh;
    border: 1px solid red;
  `,
};
