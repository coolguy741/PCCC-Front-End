import styled from "styled-components";

export const PowerFullKidsTile = () => {
  return (
    <style.PageContainer>
      <style.Content>
        <img
          src="/images/powerfullkids.svg"
          alt="powerfullkids"
          width="1008px"
          height="128px"
        />
      </style.Content>
      <style.Background>
        <style.Rectangle3 />
        <style.Rectangle2 />
        <style.EllipseGroup>
          <style.Ellipse4 />
          <style.Ellipse3 />
          <style.Ellipse2 />
          <style.Ellipse1 />
        </style.EllipseGroup>
        <style.Rectangle1 />
      </style.Background>
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    padding-left: calc((100% - 1008px) * 0.4);
    margin-left: -136px;
  `,
  Content: styled.div`
    margin-left: 136px;
  `,
  Background: styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  `,
  EllipseGroup: styled.div`
    position: absolute;
    width: max(100vw, 1920px);
    height: max(100vh, 1200px);
  `,
  Ellipse1: styled.div`
    position: absolute;
    width: 1257.76px;
    height: 1208.35px;
    left: -324.21px;
    top: -261.28px;
    background: #a6efcb;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
    transparent: 1%;
  `,
  Ellipse2: styled.div`
    position: absolute;
    width: 1437.31px;
    height: 1049.09px;
    left: -355.65px;
    top: 505.1px;
    background: #79e7b0;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Ellipse3: styled.div`
    position: absolute;
    width: 1089.27px;
    height: 962.16px;
    left: -544.64px;
    top: -301.06px;
    background: #88d2ff;
    opacity: 0.68;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Ellipse4: styled.div`
    position: absolute;
    width: 1389.03px;
    height: 1115.82px;
    left: 709.14px;
    top: 251.17px;
    background: #fff5cc;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 100%;
  `,
  Rectangle1: styled.div`
    position: absolute;
    width: 1920px;
    height: 1200px;
    left: 0px;
    top: 0px;
    background: rgba(255, 205, 0, 0.01);
    backdrop-filter: blur(500px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Rectangle2: styled.div`
    position: absolute;
    width: 1920px;
    height: 1200px;
    left: 0px;
    top: 0px;
    background: #d2f7e5;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
  Rectangle3: styled.div`
    position: absolute;
    width: 1920px;
    height: 1200px;
    left: 0px;
    top: 0px;
    background: #f3d03e;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  `,
};
