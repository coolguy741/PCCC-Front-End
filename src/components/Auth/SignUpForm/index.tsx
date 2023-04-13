import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useSignUpStore } from "../../../stores/signUpStore";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";
import { Select } from "../../Global/Select";

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
    <Container>
      <div className="signup-form">
        <div className="signup-form--left">
          {over18 && (
            <label>
              <span>Name</span>
              <Input type="text" />
            </label>
          )}
          {over18 && (
            <label>
              <span>Title</span>
              <Input type="text" />
            </label>
          )}
          <label>
            <span>Birth year</span>
            <Input type="text" />
          </label>
          {over18 && (
            <label>
              <span>School ID Code</span>
              <Input type="text" />
            </label>
          )}
          {over18 && (
            <label>
              <span>School</span>
              <Input type="text" />
            </label>
          )}
          <label>
            <span>Province</span>
            <Input
              type="text"
              onChange={(e) => setProvince(e.target.value)}
              value={province}
            />
          </label>
          {over18 && (
            <label>
              <span>Email address</span>
              <Input type="text" />
            </label>
          )}
        </div>
        <div className="signup-form--right">
          <label>
            <span>User name</span>
            <Select>
              {firstNames &&
                firstNames.map((name, index) => (
                  <option key={index}>{name}</option>
                ))}
            </Select>
            <Select>
              {secondNames &&
                secondNames.map((name, index) => (
                  <option key={index}>{name}</option>
                ))}
            </Select>
            <Input type="text" />
          </label>

          <span>Choose avatar</span>
          <div className="avatars">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="back-button">
        <Button
          onClick={() => (over18 ? changeStep("role") : changeStep("age"))}
        >
          Back
        </Button>
      </div>
      <div className="next-button">
        <Button onClick={() => changeStep("input-account")}>Next</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.2rem;

  .signup-form {
    display: flex;
    gap: 10vw;

    .signup-form {
      &--left,
      &--right {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
          display: flex;
          align-items: center;

          span {
            width: 15vw;
          }
        }
      }

      &--right {
        label {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        span {
        }

        label span {
          width: 120px;
        }

        input {
          width: 100px;
        }

        .avatars {
          display: flex;
          gap: 1rem;
          max-width: 30vw;
          flex-wrap: wrap;

          div {
            width: 50px;
            height: 50px;
            background-color: var(--red);
          }
        }
      }
    }
  }

  .back-button {
    position: absolute;
    top: 8rem;
    left: 2rem;
  }

  .next-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
