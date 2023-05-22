import styled from "styled-components";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { Header } from "../shared/Header/header";
import { SideMenu } from "../shared/SideMenu/sideMenu";

interface Props {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: Props) {
  return (
    <Style.Container className="dashboard-layout">
      <SideMenu />
      <Header />
      <main>{children}</main>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    width: 100%;

    main {
      width: calc(
        (100% + ${convertToRelativeUnit(32, "vw")}) -
          var(--dashboard-menu-width-medium)
      );
      margin-left: calc(
        var(--dashboard-menu-width-medium) - ${convertToRelativeUnit(32, "vw")}
      );
      height: 100%;
    }
  `,
};
