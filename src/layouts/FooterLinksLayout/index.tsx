import { useEffect } from "react";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { Header } from "../shared/Header/header";
import { SideMenu } from "../shared/SideMenu/sideMenu";
import { FLFooter } from "./footer";
import { FLHeader } from "./header";

interface Props {
  children: React.ReactNode;
  page:
    | "terms_and_conditions"
    | "privacy_policy"
    | "accessibility"
    | "contact_us";
}

export function FooterLinksLayout({ children, page }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Style.Container className="footer-links-layout">
      <SideMenu />
      <Header />
      <main>
        <FLHeader page={page} />
        {children}
        <FLFooter />
      </main>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;

    main {
      padding: 10vh ${convertToRelativeUnit(32, "vw")} 2.5vh
        ${convertToRelativeUnit(64, "vw")};
      height: 100%;
      margin-left: calc(
        var(--dashboard-menu-width-medium) - ${convertToRelativeUnit(32, "vw")}
      );
    }

    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};
  `,
};
