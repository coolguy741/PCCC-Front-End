import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { DropdownSelect } from "../../../../components/Global/DropdownSelect";
import { Input } from "../../../../components/Global/Input";
import { useAPI } from "../../../../hooks/useAPI";
import { avatars_data } from "../../../../lib/avatars/data";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";
import { PROVINCES } from "../../../consts";

export const AccountInfoSetting = () => {
  const [firstNames, setFirstNames] = useState<string[] | null | undefined>([]);
  const [secondNames, setSecondNames] = useState<string[] | null | undefined>(
    [],
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { api } = useAPI();

  const getUsernames = useCallback(async () => {
    const { data } = await api.appUsernameChoicesUsernameChoicesList();
    setFirstNames(data.firstNames);
    setSecondNames(data.secondNames);

    return data;
  }, [api]);

  const saveAccountInfo = () => {
    console.log("Save account information");
  };

  useEffect(() => {
    getUsernames();
  }, [getUsernames]);

  return (
    <Style.AccountInfoSetting onSubmit={handleSubmit(saveAccountInfo)}>
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
                    height="4vh"
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
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                  height="4vh"
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
                  height="4vh"
                  className={errors.thirdUsername ? "has-error" : ""}
                  width="32%"
                  {...field}
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
                    height="4vh"
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
                    height="4vh"
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
                    height="4vh"
                    className={errors.email ? "has-error" : ""}
                    {...field}
                  />
                )}
              />
            </Style.LabeledInput>
            <Style.LabeledInput width="49%">
              <label htmlFor="province">Province</label>
              <Controller
                name="province"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <DropdownSelect
                    data-testid="province"
                    options={PROVINCES}
                    placeholder="Select Province"
                    className={errors.province ? "has-error" : ""}
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                    width="100%"
                    height="4vh"
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
                <Style.AvatarButton className="avatar" key={`avatar-${index}`}>
                  {avatar.icon({})}
                </Style.AvatarButton>
              ))}
            </div>
          </Style.ScrollContainer>
        </article>
        <Button type="submit" size="large">
          Save changes
        </Button>
      </div>
    </Style.AccountInfoSetting>
  );
};

const Style = {
  AccountInfoSetting: styled.form`
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
              height: 4vh;
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
