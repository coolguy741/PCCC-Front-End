import styled from "styled-components";
import { Header } from "../shared/Header/header";
import { SideMenu } from "../shared/SideMenu/sideMenu";

interface Props {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: Props) {
  return (
    <Style.Container className="dashboard-layout">
      <SideMenu className="sidemenu" />
      <Header className="header" />
      <main>{children}</main>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    main {
      border: 10px solid red;
    }
  `,
};
