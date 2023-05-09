import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../Icon";

interface ContentListPageLayoutProps {
  icon?: string;
  title: string;
}

export const ContentListPageLayout: React.FC<ContentListPageLayoutProps> = ({
  icon,
  title,
}) => {
  return (
    <Style.PageContainer>
      <Style.Background />
      <Style.TitleLine>
        {icon && <Icon name={icon} width="48px" height="48px" />}
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
    padding: 118px 40px 0 40px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    overflow: overlay;
    max-height: 100vh;
    font-family: "Noir Std";
    font-style: normal;
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    background: linear-gradient(270deg, #c4e8ff, #fff9e0);
    z-index: -1;
  `,
  TitleLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    color: var(--orange-500);
    padding-bottom: 20px;

    img: {
      color: var(--orange-500);
    }
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
  `,
};
