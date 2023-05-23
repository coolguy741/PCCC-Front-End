import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BackButton } from "../../../components/Global/BackButton";
import { DropdownSelect } from "../../../components/Global/DropdownSelect";
import { Input } from "../../../components/Global/Input";
import { OrangeBG } from "../../../components/Icons";
import { useAPI } from "../../../hooks/useAPI";
import { avatars_data } from "../../../lib/avatars/data";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

export const ProfileSettingsPage = () => {
  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );

  const navigate = useNavigate();
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    navigate(-1);
  };

  const { api } = useAPI();

  const getUsernames = async () => {
    const { data } = await api.appUsernameChoicesUsernameChoicesList();
    setFirstNames(data.firstNames);
    setSecondNames(data.secondNames);

    return data;
  };

  const saveAccountInfo = () => {
    console.log("Save account information");
  };

  const saveChangedPassword = () => {
    console.log("Save changed password");
  };

  useEffect(() => {
    getUsernames();
  }, []);

  return (
    <Style.PageContainer>
      <div className="accounts-bg">
        <OrangeBG width="41vh" height="40vh" />
      </div>
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>
      <h2>Profile Settings</h2>
      <Style.Content>
        <Style.AccountInfo onSubmit={handleSubmit(saveAccountInfo)}>
          <h3>Edit account info</h3>
          <div className="account-info-content">
            <article className="info-settings">
              <img
                className="avatar"
                src="/images/avatars/apple-avatar.svg"
                alt="avatar"
              />
              <div className="input-group">
                <Style.LabeledInput width="32%">
                  <label>Username</label>
                  <Controller
                    name="firstUsername"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <DropdownSelect
                        options={firstNames ? firstNames : [""]}
                        placeholder="First name"
                        className={errors.firstUsername ? "has-error" : ""}
                        onChange={(selectedOption) =>
                          field.onChange(selectedOption)
                        }
                        height={convertToRelativeUnit(48, "vh")}
                      />
                    )}
                  />
                </Style.LabeledInput>
                <Controller
                  name="secondUsername"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <DropdownSelect
                      options={secondNames ? secondNames : [""]}
                      placeholder="Second name"
                      className={errors.secondUsername ? "has-error" : ""}
                      onChange={(selectedOption) =>
                        field.onChange(selectedOption)
                      }
                      height={convertToRelativeUnit(48, "vh")}
                      width="32%"
                    />
                  )}
                />
                <Controller
                  name="thirdUsername"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <Input
                      placeholder="12345"
                      type="text"
                      {...field}
                      height={convertToRelativeUnit(48, "vh")}
                      width="32%"
                    />
                  )}
                />
                <Style.LabeledInput width="49%">
                  <label htmlFor="name">Name</label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Input
                        placeholder="John"
                        type="text"
                        id="name"
                        className={errors.name ? "has-error" : ""}
                        {...field}
                      />
                    )}
                  />
                </Style.LabeledInput>
                <Style.LabeledInput width="49%">
                  <label htmlFor="birth-year">Birth year</label>
                  <Controller
                    name="birth-year"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Input
                        placeholder="1986"
                        type="text"
                        id="name"
                        className={errors.name ? "has-error" : ""}
                        {...field}
                      />
                    )}
                  />
                </Style.LabeledInput>
                <Style.LabeledInput width="49%">
                  <label htmlFor="email">Email Address</label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Input
                        placeholder="Johndoe@gmail.com"
                        type="email"
                        id="email"
                        className={errors.email ? "has-error" : ""}
                        {...field}
                      />
                    )}
                  />
                </Style.LabeledInput>
              </div>
            </article>
            <article className="choose-avatar">
              <label>Change profile picture</label>
              <Style.ScrollContainer>
                <div className="avatars">
                  {/* TODO: Improve avatar animations */}
                  {avatars_data.map((avatar, index) => (
                    <Style.AvatarButton
                      className="avatar"
                      key={`avatar-${index}`}
                    >
                      {avatar.icon()}
                    </Style.AvatarButton>
                  ))}
                </div>
              </Style.ScrollContainer>
            </article>
            <Button type="submit" size="large">
              Save changes
            </Button>
          </div>
        </Style.AccountInfo>
        <Style.PasswordSettingContainer
          onSubmit={handleSubmit(saveChangedPassword)}
        >
          <h3>Change password</h3>
          <div className="input-group">
            <fieldset>
              <label>Old password</label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Input
                    width="65%"
                    type="password"
                    data-testid="password"
                    id="password"
                    className={errors.password ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </fieldset>
            <fieldset>
              <label>New password</label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <Input
                    width="65%"
                    type="password"
                    data-testid="password"
                    id="password"
                    className={errors.password ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </fieldset>
            <fieldset>
              <label>Retype new password</label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: true,
                  validate: (value: string) => watch("password") === value,
                }}
                render={({ field }) => (
                  <Input
                    width="65%"
                    type="password"
                    data-testid="confirm-password"
                    className={errors.confirmPassword ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </fieldset>
          </div>
          <Button size="large" type="submit">
            Save changes
          </Button>
        </Style.PasswordSettingContainer>
      </Style.Content>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;

    h2 {
      padding-top: 2.5vh;
      font-weight: 600;
      color: var(--neutral-800);
    }

    h3 {
      font-weight: 600;
      color: var(--neutral-800);
    }

    .back-button-container {
      height: 4.33vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .accounts-bg {
      position: fixed;
      z-index: 0;
      bottom: -10vh;
      right: -5vh;
    }
  `,
  Content: styled.div`
    margin-top: 1.25vh;
    display: flex;
    gap: 2vh;
  `,
  AccountInfo: styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vh;
    gap: 3vh;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 60%;

    .account-info-content {
      display: flex;
      flex-direction: column;
      gap: 4vh;

      .info-settings {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2.66vh;

        .avatar {
          width: 16.6vh;
          height: 16.6vh;
        }

        .input-group {
          flex-grow: 1;
          display: flex;
          flex-wrap: wrap;
          row-gap: ${convertToRelativeUnit(24, "vh")};
          justify-content: space-between;
          align-items: end;

          label {
            font-weight: 500;
            font-size: 1rem;
            color: var(--neutral-700);
          }

          fieldset {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            input {
              height: 4.33vh;
              flex-grow: 1;
            }
          }
        }
      }

      .choose-avatar {
        display: flex;
        flex-direction: column;
        gap: 1.5vh;

        label {
          font-weight: 500;
          font-size: 1rem;
          color: var(--neutral-700);
        }
        .avatars {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 2.5vh 3.33vh;

          button {
            width: 6.66vh;
            height: 6.66vh;
            margin-bottom: 0;
          }
        }
      }

      button {
        align-self: self-end;
      }
    }
  `,
  LabeledInput: styled.div<{ width?: string }>`
    width: ${(props) => (props.width ? props.width : "100%")};
    display: flex;
    flex-direction: column;
    gap: ${convertToRelativeUnit(8, "vh")};
  `,
  PasswordSettingContainer: styled.form`
    flex-grow: 1;
    align-self: self-start;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vh;
    gap: 4vh;

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.5vh;

      fieldset {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: ${convertToRelativeUnit(8, "vh")};
        align-items: start;
        justify-content: space-between;

        label {
          color: var(--neutral-600);
          font-weight: 500;
          font-size: 1rem;
        }

        input {
          width: 100%;
          height: 4vh;
        }
      }
    }

    button {
      align-self: self-end;
    }
  `,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 16vh;
    padding-right: 16px;
    margin-right: -24px;
  `,
  AvatarButton: styled.button`
    width: 6.66vh;
    height: 6.66vh;
    display: grid;
    place-items: center;
    background: none;
    border: 4px solid white;
    border-radius: 50%;
    transition: border 0.25s ease-in;

    svg {
      width: 6vh;
      height: 6vh;
      transition: width 0.25s linear, height 0.25s linear,
        transform 0.3s ease-out;
    }

    &:hover {
      border: 4px solid rgba(0, 0, 0, 0.75);
      svg {
        width: 6.3vh;
        height: 6.3vh;
        transform: translate(2px, -2px);
      }
    }
  `,
};
