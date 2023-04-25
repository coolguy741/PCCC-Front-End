import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { DashboardHeader } from "../../components/Dashboard/Header";
import { DashboardMenu } from "../../components/Global/DashboardMenu";

interface DashboardPageProps {
  children: JSX.Element;
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.onmouseover = () => setIsHovering(() => true);
      menuRef.current.onmouseout = () => setIsHovering(() => false);
    }
  }, [menuRef]);

  return (
    <Style.PageContainer isHovering={isHovering}>
      <DashboardMenu ref={menuRef} />
      <div className="main-container">
        <div className="relative">
          <DashboardHeader />
        </div>
        <div className="__content">{children}</div>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div.attrs((props: { isHovering: boolean }) => ({
    isHovering: props.isHovering || false,
  }))`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow-x: hidden;

    .main-container {
      padding-left: var(--dashboard-menu-width-large);
      width: 100%;

      .relative {
        position: relative;
      }

      @media screen and (max-width: 1920px) {
        padding-left: ${({ isHovering }) =>
          isHovering
            ? "var(--dashboard-menu-width-large)"
            : "var(--dashboard-menu-width-medium)"};
        transition: padding-left 0.1s ease-in-out;
      }

      .__content {
        width: 100%;
      }

      .__content {
        height: 100%;
      }
    }
  `,
};
