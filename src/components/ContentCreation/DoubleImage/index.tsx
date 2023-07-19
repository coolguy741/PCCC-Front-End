import styled from "styled-components";
import { Media } from "../Media/media";
import { ComponentProps, withThemeStore } from "../withThemeStore";

const initialState: any = {
  media: {
    src: "",
    patternChoice: "",
  },
};

export function DoubleImageComponent({
  state,
  changeMediaState,
}: ComponentProps) {
  const componentState = state as any;

  return (
    <Style.Container>
      <Media changeMediaState={changeMediaState} media={componentState.media} />
    </Style.Container>
  );
}

export const DoubleImage = withThemeStore(DoubleImageComponent, initialState);

const Style = {
  Container: styled.article`
    background-position: center;
    background-size: cover;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
};
