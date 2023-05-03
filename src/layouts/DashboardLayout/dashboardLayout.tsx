import styled from "styled-components";
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
    height: 100%;

    main {
      width: calc((100% + 32px) - var(--dashboard-menu-width-medium));
      margin-left: calc(var(--dashboard-menu-width-medium) - 32px);
      height: 100%;
    }
  `,
};
