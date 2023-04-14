import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { avatars_data } from "../../../lib/avatars/data";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";
import { ArrowRight } from "../../Icons";

export const SignUpForm = () => {
  const [_firstUserName, _setFirstUserName] = useState("");
  const [_secondUserName, _setSecondUserName] = useState("");
  const [_thirdUserName, _setThirdUserName] = useState("");
  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );
  const changeStep = useSignUpStore((state) => state.changeStep);
  const firstUserName = useSignUpStore((state) => state.firstUserName);
  const secondUserName = useSignUpStore((state) => state.secondUserName);
  const thirdUserName = useSignUpStore((state) => state.thirdUserName);
  const setFirstUserName = useSignUpStore((state) => state.setFirstUserName);
  const setSecondUserName = useSignUpStore((state) => state.setSecondUserName);
  const setThirdUserName = useSignUpStore((state) => state.setThirdUserName);

  const { api } = useAPI();

  const getUsernames = async () => {
    const { data } = await api.appCustomUsernameChoicesUsernameChoicesList();

    setFirstNames(data.firstNames);
    setSecondNames(data.secondNames);

    return data;
  };

  useEffect(() => {
    getUsernames();
  }, []);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFirstUserName(_firstUserName);
    setSecondUserName(_secondUserName);
    setThirdUserName(_thirdUserName);

    changeStep("input-security");
  };

  return (
    <Style.Container onSubmit={submitHandler}>
      <section className="sign-up">
        <h1>Sign Up</h1>
        <section className="form">
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
        </section>
      </section>
      <section className="avatar-selection">
        <h2>Avatar Selection</h2>
        <article className="username-selection">
          <label>Username</label>
          <Select
            onChange={(e) => _setFirstUserName(e.target.value)}
            value={_firstUserName}
          >
            {firstNames &&
              firstNames.map((name, index) => (
                <option key={index}>{name}</option>
              ))}
          </Select>
          <Select
            onChange={(e) => _setSecondUserName(e.target.value)}
            value={_secondUserName}
          >
            {secondNames &&
              secondNames.map((name, index) => (
                <option key={index}>{name}</option>
              ))}
          </Select>
          <Input
            type="text"
            onChange={(e) => _setThirdUserName(e.target.value)}
            value={_thirdUserName}
          />
        </article>
        <article className="choose-avatar">
          <label>Choose Avatar</label>
          <div className="avatars">
            {/* TODO: Improve avatar animations */}
            {avatars_data.map((avatar) => (
              <Style.Button className="avatar">{avatar.icon()}</Style.Button>
            ))}
          </div>
        </article>
        <Button className="next" size="small" type="submit">
          Next
          <ArrowRight />
        </Button>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled.form`
    width: 80%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

    .avatar-selection {
      width: 50%;
      height: 90%;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
    }

    .form {
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

    .avatars {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }

    .username-selection {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;

      input:first-of-type,
      input:nth-of-type(2),
      select {
        width: 25%;
      }

      input:nth-of-type(3) {
        width: 20%;
      }
    }

    button.next {
      margin-top: auto;
      margin-left: auto;
      width: 237px;

      svg {
        margin-left: 10px;
      }
    }
  `,
  Button: styled.button`
    width: 75px;
    height: 75px;
    display: grid;
    place-items: center;
    background: none;
    border: 4px solid white;
    border-radius: 50%;
    margin-bottom: 20px;
    transition: border 0.25s ease-in;

    svg {
      position: absolute;
      width: 69px;
      height: 69px;
      transition: width 0.25s linear, height 0.25s linear;
    }

    &:hover {
      border: 4px solid grey;
      svg {
        width: 75px;
        height: 75px;
      }
    }
  `,
};
