import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";

export const Uploader = () => {
  return (
    <div className="w-full flex flex-col">
      <div>
        <label>Images and Videos</label>
      </div>
      <div className="h-full border flex flex-col justify-between">
        <div className="flex space-x-6">
          <Style.Image />
          <Style.Image />
          <Style.Image />
        </div>
        <div>
          <LinkButton to="#">Upload</LinkButton>
        </div>
      </div>
    </div>
  );
};

const Style = {
  Image: styled.div`
    width: 100px;
    height: 80px;
    background: var(--black);
  `,
};
