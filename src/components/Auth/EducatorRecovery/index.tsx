import styled from "styled-components";

export function EducatorRecovery() {
  return (
    <Style.Container>
      <h1>Educator Code Recovery</h1>
      <p>Contact your school’s administrator to get your educator code </p>
      <p> Reach us at Lorem@Ipsum.com</p>
    </Style.Container>
  );
}

const Style = {
  Container: styled.main`
    max-width: 36%;
    height: auto;

    h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      color: #2e2e2e;
      margin-bottom: 24px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      color: #505050;
      margin-bottom: 12px;
    }
  `,
};
