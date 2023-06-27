import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Icon } from "../Icon";

interface PageTitleLayoutProps {
  icon?: string;
  title: string;
}

export const PageTitleLayout: React.FC<PageTitleLayoutProps> = ({
  icon,
  title,
}) => {
  return (
    <Style.PageContainer>
      <Style.Background />
      <Style.TitleLine>
        {icon && <Icon name={icon} />}
        <Style.Title>{title}</Style.Title>
      </Style.TitleLine>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 7vh 32px 2.5vh 64px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    max-height: 100vh;
    font-family: "Noir Std";
    font-style: normal;
    ${() => animatedbackgroundGradient("var(--blue-200)", "#fff9e0")};
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: ${convertToRelativeUnit(-32, "vw")};
    width: calc(100% + ${convertToRelativeUnit(32, "vw")});
    height: 100vh;
    background: linear-gradient(270deg, #c4e8ff, #fff9e0);
    z-index: -1;
  `,
  TitleLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 0.5vw;
    color: var(--orange-500);
    padding-bottom: 2.5vh;

    img {
      height: 4vh;
    }
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 4vh;
  `,
};
