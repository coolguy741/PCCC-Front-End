import styled from "styled-components";
import { Media } from "../Media/media";
import { ComponentProps, withThemeStore } from "../withThemeStore";

const initialState: any = {
  media: {
    src: "",
    patternChoice: 0,
  },
};

export function SingleImageComponent({
  state,
  changeMediaState,
  changeMediaPattern,
}: ComponentProps) {
  const componentState = state as any;

  return (
    <Style.Container>
      <Media
        changePattern={changeMediaPattern}
        changeMediaState={changeMediaState}
        media={componentState.media}
      />
    </Style.Container>
  );
}

export const SingleImage = withThemeStore(SingleImageComponent, initialState);

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
