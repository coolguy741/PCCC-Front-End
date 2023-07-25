import styled from "styled-components";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { Header } from "../shared/Header/header";
import { SideMenu } from "../shared/SideMenu/sideMenu";
import { FLHeader } from "./header";

interface Props {
  children: React.ReactNode;
}

export function FooterLinksLayout({ children }: Props) {
  return (
    <Style.Container className="dashboard-layout">
      <SideMenu />
      <Header />
      <main>
        <FLHeader />
        {children}
      </main>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    width: 100%;

    main {
      padding: 10vh ${convertToRelativeUnit(32, "vw")} 2.5vh
        ${convertToRelativeUnit(64, "vw")};
      height: 100%;
      margin-left: calc(
        var(--dashboard-menu-width-medium) - ${convertToRelativeUnit(32, "vw")}
      );
    }
  `,
};
