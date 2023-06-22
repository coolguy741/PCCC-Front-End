import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Image } from "../Image/image";

export function ImageWithCaption() {
  return (
    <Style.Container>
      <div className="iwc-image">
        <Image variant="img-only" img="" />
      </div>
      <p>
        <b>Forging:</b> to find food in nature.
      </p>
    </Style.Container>
  );
}

const Style = {
  Container: styled.figure`
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 6px;

    .iwc-image {
      height: 75%;
      width: 100%;
      border-radius: 12px 12px 0px 0px;
      overflow: hidden;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      margin-top: ${convertToRelativeUnit(8, "vh")};
      color: var(--neutral-600);
    }
  `,
};
