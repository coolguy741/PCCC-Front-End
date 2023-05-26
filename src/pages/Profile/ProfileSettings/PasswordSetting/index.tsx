import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { Input } from "../../../../components/Global/Input";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";

export const PasswordSetting = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveChangedPassword = () => {
    console.log("Save changed password");
  };

  return (
    <Style.PasswordSettingContainer
      onSubmit={handleSubmit(saveChangedPassword)}
    >
      <h3>Change password</h3>
      <div className="input-group">
        <fieldset>
          <label>Old password</label>
          <Controller
            name="oldPassword"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="65%"
                type="password"
                data-testid="old-password"
                id="old-password"
                className={errors.oldPassword ? "has-error" : ""}
                {...field}
              />
            )}
          />
        </fieldset>
        <fieldset>
          <label>New password</label>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                width="65%"
                type="password"
                data-testid="new-password"
                id="new-password"
                className={errors.newPassword ? "has-error" : ""}
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
              validate: (value: string) => watch("newPassword") === value,
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
  );
};

const Style = {
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
};
