import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { DashboardHeader } from "../../components/Dashboard/Header";
import { DashboardMenu } from "../../components/Global/DashboardMenu";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";

interface DashboardPageProps {
  children: JSX.Element;
}

export const DashboardPage = ({ children }: DashboardPageProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.onmouseover = () => setIsHovering(() => true);
      menuRef.current.onmouseout = () => setIsHovering(() => false);
    }
  }, [menuRef]);

  useEffect(() => {
    if (container.current) {
      container.current.onscroll = (event: Event) => {
        const element = event.target as HTMLDivElement;

        if (element.scrollTop <= 200) {
          setScrollTop(() => element.scrollTop);
        }
      };
    }
  }, [container]);

  return (
    <Style.PageContainer isHovering={isHovering} ref={container}>
      <DashboardMenu ref={menuRef} />
      <div className="main-container">
        <DashboardHeader isHovering={isHovering} scrollTop={scrollTop} />
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
    min-height: 100vh;
    display: flex;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    ${() => animatedbackgroundGradient("#c4e8ff", "#fff9e0")};

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
    }
  `,
};
