import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";

export const SignUpForm = () => {
  const over18 = useSignUpStore((state) => state.over18);
  const province = useSignUpStore((state) => state.province);
  const setProvince = useSignUpStore((state) => state.setProvince);
  const changeStep = useSignUpStore((state) => state.changeStep);

  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );
  const api = useAPI();

  const getUsernames = async () => {
    const { data } = await api.appCustomUsernameChoicesUsernameChoicesList();

    setFirstNames(data.firstNames);
    setSecondNames(data.secondNames);

    return data;
  };

  useEffect(() => {
    getUsernames();
  }, []);

  return (
    <Style.Container>
      <section className="sign-up">
        <h1>Sign Up</h1>
        <form>
          <legend>Account Info</legend>
          <fieldset>
            <label>Name</label>
            <input />
          </fieldset>
          <fieldset>
            <label>Title</label>
            <input />
          </fieldset>
          <fieldset>
            <label>Birth Year</label>
            <input />
          </fieldset>
          <fieldset>
            <label>School ID Code</label>
            <input />
          </fieldset>
          <fieldset>
            <label>School</label>
            <input />
          </fieldset>
          <fieldset>
            <label>Province</label>
            <input />
          </fieldset>
          <fieldset>
            <label>Email Address</label>
            <input />
          </fieldset>
        </form>
      </section>
      <section className="avatar-selection"></section>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    border: 1px solid red;
    width: 80%;
    height: 75%;

    h1 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 20px;
    }

    .sign-up {
      width: 45%;
      height: 100%;
    }

    form {
      ${glassBackground};
      padding: 40px 20px;
      height: auto;

      legend {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 25px;
      }
    }

    fieldset {
      width: 100%;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      label {
        width: 35%;
        color: #505050;
        font-weight: 400;
        font-size: 1rem;
        line-height: 25px;
      }

      input {
        width: 60%;
        height: 100%;
        background: #ffffff;
        box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border: 0;
      }
    }
  `,
};
