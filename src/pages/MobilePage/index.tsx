import styled from "styled-components";
import { LanguageToggle } from "../../components/Global/LanguageToggle";
import { Logo } from "../../components/Global/Logo";
import { LemonBG } from "../../components/Icons";

export const MobilePage = () => {
  return (
    <Style.Container>
      <Style.Header>
        <Logo />
        <LanguageToggle />
      </Style.Header>
      <Style.Main>
        <img
          src="/images/powerfullkids.svg"
          alt="Power Full Kids"
          width="280"
        />
        <img src="/images/bee2.png" alt="Bee" width="250" />
        <h2>Oh snap!</h2>
        <p>
          This website is not compatible with mobile devices. Our platform has
          been optimized exclusively for desktop usage.
        </p>
      </Style.Main>

      <div className="lemon">
        <LemonBG />
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, #f6f6f6 0%, #c2e6ff 100%);
    overflow: hidden;

    .lemon {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 50%;
      bottom: 0;
      right: -50%;
      overflow: hidden;
    }
  `,

  Header: styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    overflow: hidden;
  `,

  Main: styled.main`
    position: relative;
    z-index: 1;
    width: 90%;
    height: 80%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: column;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(60px);
    overflow: hidden;

    h2 {
      font-size: 2rem;
      color: var(--blue-600);
    }

    p {
      font-size: 0.9rem;
      text-align: center;
      color: var(--neutral-600);
      margin-top: 1rem;
    }
  `,
};
