import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../../styles/helpers/convertToRelativeUnits";

export function LATextArea() {
  return <Style.Container />;
}

const Style = {
  Container: styled.textarea`
    width: 100%;
    height: ${conv(150, "vh")};
    resize: none;
    padding: ${conv(13, "vh")} ${conv(15, "vh")};
    font-size: ${conv(16, "vh")};
    line-height: ${conv(20, "vh")};
    color: var(--neutral-600);
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  `,
};
