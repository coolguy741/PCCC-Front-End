import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";

export function Title() {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [title, setTitle] = useState(
    "With great power comes great responsibility",
  );
  const titleRef = useRef<HTMLTextAreaElement>(null);

  function clickHandler() {
    if (mode === "view") setMode("edit");
    else setMode("view");
  }

  useEffect(() => {
    if (mode === "edit" && titleRef.current) {
      const end = title.length;
      titleRef.current.setSelectionRange(end, end);
      titleRef.current.focus();
    }
  }, [mode, title.length]);

  return (
    <Style.Container>
      <div className="tc-content">
        <h1 onDoubleClick={clickHandler}>
          <span className="tc-overview">Overview</span>
          <br />
          {mode === "view" ? (
            title
          ) : (
            <textarea
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
              defaultValue={title}
            />
          )}
        </h1>
        <p>
          Providing food for your loved ones is powerful. Throughout nature and
          history, providers have helped their family groups and communities
          thrive and survive. But when you’re planting your own crops, or
          forging for food in nature, the real power is knowledge. There are
          many things to know, and many ways to know them. Let’s start simple:
          knowing the right tool for the job. Check out Activity 1 to identify
          common growing tools and discuss what they’re used for.
        </p>
        <h2>Knowing how to stay safe</h2>
        <p>
          Garden Guardian safety tips and guidance can be found in all Power
          Full Kids lessons. Watch for the Garden Guardian section and stay safe
          when you grow.
        </p>
      </div>
      <figure className="tc-image">
        <img src="/content-creation/theme-cc.png" alt="" />
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

      span {
        font-weight: 600;
        font-size: ${conv(14, "vw")};
        text-transform: uppercase;
        color: var(--orange-600);
        border: 2px solid var(--orange-600);
        padding: ${conv(0, "vh")} ${conv(20, "vw")};
        border-radius: 24px;
        position: absolute;
        top: 2vh;
      }

      h1 {
        width: 120%;
        padding: 10px 1.5vw;
        font-weight: 600;
        font-size: 3.5vh;
        line-height: 125%;
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
        padding-top: 4vh;

        textarea {
          border: none;
          display: inline;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          line-height: inherit;
          background-color: unset;
          padding: none;
          width: auto;
          resize: none;
          color: green;
          width: 100%;
          border: 1px solid red;
        }
      }
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
