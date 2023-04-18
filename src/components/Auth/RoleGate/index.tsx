import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useSignUpStore } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

export const RoleGate = () => {
  const [_schoolId, _setSchoolId] = useState("");
  const [_schoolName, _setSchoolName] = useState("");
  const setIsCoordinator = useSignUpStore((state) => state.setIsCoordinator);
  const isCoordinator = useSignUpStore((state) => state.isCoordinator);
  const changeStep = useSignUpStore((state) => state.changeStep);
  const setSchoolId = useSignUpStore((state) => state.setSchoolId);
  const setSchoolName = useSignUpStore((state) => state.setSchoolName);

  const [height, setHeight] = useState("368px");

  const submitHandler = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (_schoolId) setSchoolId(_schoolId);
    if (_schoolName) setSchoolName(_schoolName);

    changeStep(2);
  };

  function changeCoordinator(coor: boolean) {
    if (coor) {
      setIsCoordinator(true);
      setHeight("540px");
    } else {
      setIsCoordinator(false);
      setHeight("410px");
    }
  }

  useEffect(() => {
    if (isCoordinator === true) {
      setHeight("540px");
    } else if (isCoordinator === false) {
      setHeight("410px");
    }
  }, [isCoordinator]);

  return (
    <Style.Container
      height={height}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sign Up</h1>
      <p className="sign-up-p">
        Are you a teacher or food coordinator who is part of of a school
        currently running a power full kids program
      </p>
      <form onSubmit={submitHandler}>
        <div className="radio-buttons">
          <fieldset>
            {" "}
            <Input
              type="radio"
              checked={isCoordinator === true}
              onChange={() => changeCoordinator(true)}
              required
            />
            <label>Yes</label>
          </fieldset>

          <fieldset>
            <Input
              type="radio"
              checked={isCoordinator === false}
              onChange={() => changeCoordinator(false)}
              required
            />
            <label>No</label>
          </fieldset>
        </div>
        {isCoordinator && (
          <section className="role-coordinator">
            <p className="school-id">Please enter your School ID Code</p>

            <div className="rc-split">
              <Input
                type="text"
                onChange={(e) => _setSchoolId(e.target.value)}
                value={_schoolId}
                placeholder="1234"
              />
              <Input
                type="text"
                onChange={(e) => _setSchoolName(e.target.value)}
                value={_schoolName}
                placeholder="Enter Name Here"
              />
            </div>
            <p className="forgot-code" onClick={() => changeStep(4)}>
              Forgot Educator Code?
            </p>
          </section>
        )}
        {typeof isCoordinator === "boolean" && (
          <Button size="small" fullWidth type="submit">
            Continue to the next step
            <ArrowRight width="15" />
          </Button>
        )}
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)<{ height: string }>`
    ${glassBackground}
    padding: 40px;
    width: 500px;
    height: ${({ height }) => height};
    transition: height 0.2s linear;
    position: relative;

    h1 {
      font-weight: 600;
      font-size: 30px;
    }

    p {
      font-size: 20px;
      line-height: 24px;
      color: #505050;
      margin-top: 12px;
    }

    .radio-buttons {
      display: flex;
      flex-direction: column;
      height: 70px;
      margin: 30px 0;
      justify-content: space-between;

      fieldset {
        display: flex;
        align-items: center;

        label {
          margin-left: 10px;
          font-size: 18px;
          line-height: 24px;
          color: #2e2e2e;
        }
      }
    }

    .school-id {
      margin-bottom: 12px;
    }

    form {
      p {
        color: #505050;
      }

      p:nth-of-type(2) {
        text-align: right;
      }

      button {
        margin-top: 50px;
        svg {
          margin-left: 10px;
        }
      }
    }

    .rc-split {
      display: flex;
      align-items: center;
      justify-content: space-between;

      input:first-of-type {
        width: 35%;
      }

      input:nth-of-type(2) {
        width: 60%;
      }
    }

    p.forgot-code {
      font-size: 15px;
    }
  `,
};
