import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BackButton } from "../../../components/Global/BackButton";
import { Input } from "../../../components/Global/Input";
import { Select } from "../../../components/Global/Select";
import { OrangeBG } from "../../../components/Icons";
import { useAPI } from "../../../hooks/useAPI";
import { avatars_data } from "../../../lib/avatars/data";

export const ProfileSettingsPage = () => {
  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );

  const navigate = useNavigate();
  const {
    control,
    watch,
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
        <Style.AccountInfo>
          <h3>Edit account info</h3>
          <div className="account-info-content">
            <article className="info-settings">
              <img
                className="avatar"
                src="/images/avatars/apple-avatar.svg"
                alt="avatar"
              />
              <div className="input-group">
                <div className="username-selection-container">
                  <label>Username</label>
                  <div className="username-selection-inputs">
                    <Controller
                      name="firstUsername"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <Select
                          data-testid="first-username"
                          className={`${
                            errors.email ? "has-error" : ""
                          } username-select`}
                          {...field}
                        >
                          {firstNames &&
                            firstNames.map((name, index) => (
                              <option key={`firstName-${index}`} value={name}>
                                {name}
                              </option>
                            ))}
                        </Select>
                      )}
                    />
                    <Controller
                      name="secondUsername"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field }) => (
                        <Select
                          data-testid="second-username"
                          className={`${
                            errors.email ? "has-error" : ""
                          } username-select`}
                          {...field}
                        >
                          {secondNames &&
                            secondNames.map((name, index) => (
                              <option key={`secondName-${index}`} value={name}>
                                {name}
                              </option>
                            ))}
                        </Select>
                      )}
                    />
                    <Controller
                      name="thirdUsername"
                      control={control}
                      render={({ field }) => (
                        <Input
                          placeholder="12345"
                          type="text"
                          data-testid="third-username"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Input
                        width="60%"
                        placeholder="John"
                        type="text"
                        id="name"
                        className={errors.name ? "has-error" : ""}
                        {...field}
                      />
                    )}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email">Email Address</label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <Input
                        width="60%"
                        placeholder="Johndoe@gmail.com"
                        type="email"
                        id="email"
                        className={errors.email ? "has-error" : ""}
                        {...field}
                      />
                    )}
                  />
                </fieldset>
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
            <Button size="large">Save changes</Button>
          </div>
        </Style.AccountInfo>
        <Style.PasswordSettingContainer>
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
          <Button size="large">Save changes</Button>
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
  AccountInfo: styled.div`
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
          flex-direction: column;
          gap: 2.66vh;

          label {
            width: 30%;
            font-weight: 500;
            font-size: 1rem;
            color: var(--neutral-700);
          }

          .username-selection-container {
            display: flex;
            align-items: center;

            .username-selection-inputs {
              width: 70%;
              height: 4.33vh;
              display: flex;
              gap: 1vh;
              align-items: center;
              justify-content: space-between;

              input {
                width: 60%;
              }
            }
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
          margin-top: 2.5vh;
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
  PasswordSettingContainer: styled.div`
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
        align-items: center;
        justify-content: space-between;

        label {
          width: 35%;
          color: var(--neutral-600);
          font-weight: 500;
          font-size: 1rem;
        }

        input {
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
    height: 100%;
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
      position: absolute;
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
