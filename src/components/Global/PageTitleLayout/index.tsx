import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { Typography } from "../../Typography";
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
      <hgroup>
        {icon && <Icon name={icon} />}
        <Typography size="3.5vh" tag="h1" weight={600} color="orange-500">
          {title}
        </Typography>
      </hgroup>
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

    h1 {
      gap: 0.5vw;
      color: var(--orange-500);
      margin-bottom: 0.5vh;

      img {
        height: 3.5vh;
      }
    }
  `,
};
