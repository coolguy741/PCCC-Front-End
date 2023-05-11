import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BackButton } from "../../../components/Global/BackButton";
import { Input } from "../../../components/Global/Input";
import { Select } from "../../../components/Global/Select";
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
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>
      <h2>Profile Settings</h2>
      <Style.Content>
        <Style.AccountInfo>
          <h3>Edit account info</h3>
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
      margin-top: 32px;
      font-weight: 600;
      font-size: 33px;
      line-height: 40px;
      color: var(--neutral-800);
    }

    h3 {
      font-weight: 600;
      font-size: 28px;
      line-height: 32px;
      color: var(--neutral-800);
    }

    .back-button-container {
      height: 52px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  Content: styled.div`
    margin-top: 16px;
    display: flex;
    gap: 25px;
  `,
  AccountInfo: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 48px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    width: 60%;

    .info-settings {
      width: 100%;
      display: flex;
      gap: 32px;

      .avatar {
        width: 200px;
        height: 200px;
      }

      .input-group {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 32px;

        label {
          width: 30%;
          font-weight: 500;
          font-size: 1rem;
          line-height: 28px;
          color: var(--neutral-700);
        }

        .username-selection-container {
          display: flex;
          align-items: center;

          .username-selection-inputs {
            width: 70%;
            height: 52px;
            display: flex;
            gap: 12px;
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
            height: 52px;
            flex-grow: 1;
          }
        }
      }
    }

    .choose-avatar {
      label {
        font-weight: 500;
        font-size: 1rem;
        line-height: 28px;
        color: var(--neutral-700);
      }
      .avatars {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: 32px;
        gap: 32px 40px;

        button {
          width: 80px;
          height: 80px;
          margin-bottom: ;
        }
      }
    }

    button {
      align-self: flex-end;
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
    padding: 24px;
    gap: 48px;

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 32px;

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
          line-height: 24px;
        }

        input {
          height: 48px;
        }
      }
    }

    button {
      align-self: flex-end;
    }
  `,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 100%;
    padding-right: 16px;
    margin-right: -24px;
  `,
  AvatarButton: styled.button`
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
