import styled from "styled-components";
import { Input } from "../../Global/Input";

interface AgeGateProps {
  setNav: (nav: number) => void;
  setOver18: (over18: boolean) => void;
}

export const AgeGate = ({ setNav, setOver18 }: AgeGateProps) => {
  // const [birthYear, setBirthYear] = useState<number | null>(null);

  // const submitHandler = () => {
  //   const currentYear = new Date().getFullYear();

  //   if (birthYear !== null) {
  //     if (currentYear - birthYear >= 18) {
  //       setOver18(true);
  //       setNav(1);
  //     } else {
  //       setOver18(false);
  //       setNav(2);
  //     }
  //   }
  // };

  return (
    <Style.Container>
      <h1>Welcome</h1>
      <p>We will need some basic information to setup your account</p>
      <form>
        <h2>Sign up</h2>
        <fieldset>
          <label>What year were you born?</label>
          <Input type="text" />
        </fieldset>
        <fieldset>
          <label>What is your province?</label>
          <Input type="text" />
        </fieldset>
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 7.78814px 19.4703px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    padding: 45px 40px;
    border-radius: 24px;
    height: 60vh;
    width: 440px;
    height: 540px;

    h1 {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 45px;
      line-height: 52px;
    }

    label {
      font-family: "NoirStd-Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 32px;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: none;
      margin-bottom: 15px;
    }
  `,
};
