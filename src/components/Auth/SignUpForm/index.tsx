import { motion } from "framer-motion";
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
  const [_name, _setName] = useState("");
  const [_title, _setTitle] = useState("");
  const [_email, _setEmail] = useState("");
  const [_birthDay, _setBirthDay] = useState("");
  const [_province, _setProvince] = useState("");
  const [_birthYear, _setBirthYear] = useState("");
  const [_birthMonth, _setBirthMonth] = useState("");
  const [_schoolName, _setSchoolName] = useState("");
  const [_schoolIdCode, _setSchoolIdCode] = useState("");
  const [_thirdUserName, _setThirdUserName] = useState("");
  const [_firstUserName, _setFirstUserName] = useState("Awesome");
  const [_secondUserName, _setSecondUserName] = useState("Apple");
  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );
  const setName = useSignUpStore((state) => state.setName);
  const setTitle = useSignUpStore((state) => state.setTitle);
  const changeStep = useSignUpStore((state) => state.changeStep);
  const setBirthYear = useSignUpStore((state) => state.setBirthYear);
  const isCoordinator = useSignUpStore((state) => state.isCoordinator);
  const setFirstUserName = useSignUpStore((state) => state.setFirstUserName);
  const setSecondUserName = useSignUpStore((state) => state.setSecondUserName);
  const setThirdUserName = useSignUpStore((state) => state.setThirdUserName);
  const setSchoolIdCode = useSignUpStore((state) => state.setSchoolIdCode);
  const setSchoolName = useSignUpStore((state) => state.setSchoolName);
  const setProvince = useSignUpStore((state) => state.setProvince);
  const setEmail = useSignUpStore((state) => state.setEmail);

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
    console.log("submitted");
    event.preventDefault();
    if (isCoordinator) {
      setName(_name);
      setTitle(_title);
      setSchoolIdCode(_schoolIdCode);
      setSchoolIdCode(_schoolIdCode);
      setSchoolName(_schoolName);
      setEmail(_email);
    }

    setProvince(_province);
    setBirthYear(parseInt(_birthYear));
    setFirstUserName(_firstUserName);
    setSecondUserName(_secondUserName);
    setThirdUserName(_thirdUserName);
    changeStep(3);
  };

  return (
    <Style.Container
      onSubmit={submitHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="signup-form"
    >
      <section className="sign-up">
        <h1>Sign Up</h1>
        <section className="form">
          <legend>Account Info</legend>
          {isCoordinator && (
            <>
              <fieldset>
                <label htmlFor="name">Name</label>
                <Input
                  width="60%"
                  placeholder="John"
                  onChange={(e) => _setName(e.target.value)}
                  value={_name}
                  id="name"
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="title">Title</label>
                <Input
                  width="60%"
                  placeholder="Student"
                  onChange={(e) => _setTitle(e.target.value)}
                  value={_title}
                  id="title"
                  required
                />
              </fieldset>
            </>
          )}
          <fieldset>
            <label>Date of Birth</label>
            <div className="birth-split">
              <Input
                width="25%"
                placeholder="MM"
                onChange={(e) => _setBirthDay(e.target.value)}
                value={_birthDay}
                type="number"
                min="1"
                max="12"
                data-testid="day"
                required
              />
              <Input
                width="25%"
                placeholder="DD"
                onChange={(e) => _setBirthMonth(e.target.value)}
                value={_birthMonth}
                required
                type="number"
                data-testid="month"
                min="1"
                max="31"
              />
              <Input
                width="40%"
                placeholder="YYYY"
                onChange={(e) => _setBirthYear(e.target.value)}
                value={_birthYear}
                required
                data-testid="year"
                type="number"
                min="1900"
                max="2023"
              />
            </div>
          </fieldset>
          {isCoordinator && (
            <>
              <fieldset>
                <label>School ID Code</label>
                <Input
                  width="60%"
                  placeholder="1234567890"
                  onChange={(e) => _setSchoolIdCode(e.target.value)}
                  value={_schoolIdCode}
                  data-testid="school-code"
                  required
                />
              </fieldset>
              <fieldset>
                <label>School</label>
                <Input
                  width="60%"
                  placeholder="George Collage"
                  onChange={(e) => _setSchoolName(e.target.value)}
                  value={_schoolName}
                  data-testid="school-name"
                  required
                />
              </fieldset>
            </>
          )}
          <fieldset>
            <label>Province</label>
            <Input
              width="60%"
              placeholder="Ontario"
              onChange={(e) => _setProvince(e.target.value)}
              value={_province}
              data-testid="province"
              required
            />
          </fieldset>
          {isCoordinator && (
            <fieldset>
              <label htmlFor="email">Email Address</label>
              <Input
                width="60%"
                placeholder="Johndoe@gmail.com"
                onChange={(e) => _setEmail(e.target.value)}
                value={_email}
                id="email"
                required
              />
            </fieldset>
          )}
        </section>
      </section>
      <section className="avatar-selection">
        <h2>Avatar Selection</h2>
        <article className="username-selection">
          <label>Username</label>
          <Select
            onChange={(e) => _setFirstUserName(e.target.value)}
            value={_firstUserName}
            className="username-select"
            data-testid="first-username"
            required
          >
            {firstNames &&
              firstNames.map((name, index) => (
                <option key={`firstName-${index}`} value={name}>
                  {name}
                </option>
              ))}
          </Select>
          <Select
            onChange={(e) => {
              console.log(e.target.value);
              _setSecondUserName(e.target.value);
            }}
            value={_secondUserName}
            className="username-select"
            data-testid="second-username"
            required
          >
            {secondNames &&
              secondNames.map((name, index) => (
                <option key={`secondName-${index}`} value={name}>
                  {name}
                </option>
              ))}
          </Select>
          <Input
            type="text"
            onChange={(e) => _setThirdUserName(e.target.value)}
            value={_thirdUserName}
            data-testid="third-username"
            placeholder="12345"
          />
        </article>
        <article className="choose-avatar">
          <label>Choose Avatar</label>
          <div className="avatars">
            {/* TODO: Improve avatar animations */}
            {avatars_data.map((avatar, index) => (
              <Style.Button className="avatar" key={`avatar-${index}`}>
                {avatar.icon()}
              </Style.Button>
            ))}
          </div>
        </article>
        <Button
          className="next"
          size="small"
          type="submit"
          data-testid="submit"
        >
          Next
          <ArrowRight />
        </Button>
      </section>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)`
    width: 80%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: calc(- (108px / 2));

    h1 {
      font-weight: 600;
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 20px;
    }

    .sign-up {
      width: 45%;
      height: 100%;
    }

    .avatar-selection {
      width: 50%;
      height: auto;
      align-self: flex-end;
      display: flex;
      flex-direction: column;
      padding-top: 100px;

      h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
      }
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

      fieldset {
        width: 100%;
        height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .birth-split {
          width: 60%;
          display: flex;
          justify-content: space-between;
          height: 100%;
        }

        label {
          width: 35%;
          color: var(--neutral-700);
          font-weight: 400;
          font-size: 1rem;
          line-height: 25px;
        }
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
      margin: 15px 0;
      align-items: center;
      justify-content: space-between;
      height: 52px;

      label {
        width: 20%;
      }

      fieldset {
        width: 25%;
      }

      input {
        width: 20%;
      }
    }

    button.next {
      margin-top: 20px;
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
      transition: width 0.25s linear, height 0.25s linear,
        transform 0.3s ease-out;
    }

    &:hover {
      border: 4px solid rgba(0, 0, 0, 0.75);
      svg {
        width: 75px;
        height: 75px;
        transform: translate(2px, -2px);
      }
    }
  `,
};
