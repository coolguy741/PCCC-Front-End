import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { blueScrollbar } from "../../../styles/helpers/blueScrollbar";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { AccountsHeader } from "./header";

interface Props {
  children: React.ReactNode;
}

// notes about sizing.
// - header (main): 9vh
// - header (accounts): 10vh
// - manage users (options): 13.5vh
// - manage users (content): 65vh
// - bottom padding: 2.5vh

export function ManageUsersLayout({ children }: Props) {
  return (
    <Style.Container className="manage-users-layout">
      <AccountsHeader />
      {children}
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    padding: 9vh ${convertToRelativeUnit(32, "vw")} 2.5vh
      ${convertToRelativeUnit(64, "vw")};
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};
    height: 100vh;
    overflow: hidden;

    /* classname to target options for manage users layout */
    .manage-users-options {
      height: 13.5vh;
      display: flex;
      align-items: center;
      /* border: 1px solid red; */
    }

    /* classname to target content for manage users layout */
    .manage-users-content {
      height: 65vh;
      overflow-y: scroll;
      ${blueScrollbar}
      padding: 0 ${convertToRelativeUnit(16, "vw")};
      margin: 0 -${convertToRelativeUnit(16, "vw")};
      /* border: 1px solid green; */
    }
  `,
};
