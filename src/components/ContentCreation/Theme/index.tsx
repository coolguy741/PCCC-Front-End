import styled from "styled-components";

export function ThemeComponent() {
  return (
    <Style.Container>
      <div className="tc-content">
        <h1>Garden Guardian</h1>
        <p>
          Can you spot the difference between a shovel and a trowel, or tell
          which wild mushrooms are safe to eat? This lesson contains 3
          activities that give participants the foundational knowledge needed to
          understand the terminology, tools and safety considerations for
          growing at home or foraging for food in nature.
        </p>
        <h2>Stay on guard, in the garden</h2>
        <p>
          Garden Guardian safety tips and guidance can be found in all Power
          Full Kids lessons. Watch for the Garden Guardian section and stay safe
          when you grow.
        </p>
      </div>
      <figure className="tc-image">
        <img src="/public/content-creation/theme-cc.png" alt="" />
        <figcaption></figcaption>
      </figure>
    </Style.Container>
  );
}

const Style = {
  Container: styled.main`
    width: 100%;
    height: 66.6%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .tc-content {
      width: 30%;
      height: 90%;
      z-index: 2;

      h1 {
        width: 110%;
        padding: 10px 20px;
        font-weight: 600;
        font-size: 4vh;
        line-height: 48px;
        color: #3d3d3d;
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.2764px);
        border-radius: 12px;
        z-index: 2;
      }

      h2 {
        font-weight: 600;
        font-size: 2.2vh;
        padding: 0 20px;
        line-height: 32px;
        color: #3d3d3d;
      }

      p {
        margin: 1vh 0;
        padding: 0 20px;
        font-size: 1.5vh;
        color: #646464;
      }
    }

    figure {
      width: 60%;
      height: 100%;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      border-radius: 16px;
      z-index: 0;
      position: relative;
      display: grid;
      place-items: center;
      overflow: hidden;

      img {
        position: absolute;
      }

      figcaption {
        position: absolute;
      }
    }
  `,
};
