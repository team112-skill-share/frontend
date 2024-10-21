import { useForm } from "react-hook-form";
import { ChangePassword } from "../types/user";
import { updateUserPassword } from "../api/users";
import { Icon } from "@iconify/react";
import { useState } from "react";
import classNames from "classnames";
import { regexPassword } from "../assets/constants";

export const ChangeUserPassword = () => {
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState([
    false,
    false,
    false,
  ]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  const password = watch("newPassword");

  const handleVisiblePassword = (index: number) => {
    setIsVisiblePassword((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleCurrentPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue("currentPassword", e.target.value);
    clearErrors("currentPassword");
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("newPassword", e.target.value);
    clearErrors("newPassword");
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue("repeatPassword", e.target.value);
    clearErrors("repeatPassword");
  };

  const onSubmit = (newPassword: ChangePassword) => {
    setIsIncorrectPassword(false);

    const newPass = {
      currentPassword: newPassword.currentPassword,
      newPassword: newPassword.newPassword,
      repeatPassword: newPassword.repeatPassword,
    };

    updateUserPassword(newPass)
      .then(() => {
        setIsSuccess(true);
        reset();

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      })
      .catch(() => {
        setIsIncorrectPassword(true);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-96 flex flex-col gap-4"
    >
      <h5 className="text-h5 uppercase">Change password</h5>

      <div className="flex flex-col gap-6">
        <div className="relative flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="currentPass">
            Current password
          </label>
          <input
            className={classNames(
              "bg-transparent py-2 px-4 h-14 border rounded-xl outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
              {
                "border-red": errors.currentPassword?.message,
                "outline-red": errors.currentPassword?.message,
              }
            )}
            id="currentPass"
            type={isVisiblePassword[0] ? "text" : "password"}
            placeholder="Enter current password"
            {...register("currentPassword", {
              required: "Current password is required",
              minLength: {
                value: 8,
                message: "More than 8 need",
              },
            })}
            onChange={handleCurrentPasswordChange}
          />

          <button
            type="button"
            className={classNames(
              "border-none w-fit absolute right-3 top-1/2 cursor-pointer",
              {
                "-translate-y-1/2": errors.currentPassword,
              }
            )}
            onClick={() => handleVisiblePassword(0)}
          >
            {isVisiblePassword[0] ? (
              <Icon icon="basil:eye-outline" width="24" height="24" />
            ) : (
              <Icon icon="basil:eye-closed-outline" width="24" height="24" />
            )}
          </button>

          {errors.currentPassword && (
            <div className="flex gap-1">
              <Icon
                icon="clarity:error-solid"
                width="16px"
                height="16px"
                className="text-red"
              />
              <p className="text-secondary text-red">
                {errors.currentPassword.message as String}
              </p>
            </div>
          )}
        </div>

        <p className="text-small">
          *New password must contains at least 1 uppercase letter, 1 lowercase
          letter and 1 digit
        </p>

        <div className="relative flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="newPass">
            New password
          </label>
          <input
            className={classNames(
              "bg-transparent py-2 px-4 h-14 border rounded-xl outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
              {
                "border-red": errors.newPassword?.message,
                "outline-red": errors.newPassword?.message,
              }
            )}
            id="newPass"
            type={isVisiblePassword[1] ? "text" : "password"}
            placeholder="Enter new password"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 8,
                message: "Need more than 8",
              },
              pattern: {
                value: regexPassword,
                message: "Not meet the requirements",
              },
            })}
            onChange={handleNewPasswordChange}
          />

          <button
            type="button"
            className={classNames(
              "border-none w-fit absolute right-3 top-1/2 cursor-pointer",
              {
                "-translate-y-1/2": errors.newPassword,
              }
            )}
            onClick={() => handleVisiblePassword(1)}
          >
            {isVisiblePassword[1] ? (
              <Icon icon="basil:eye-outline" width="24" height="24" />
            ) : (
              <Icon icon="basil:eye-closed-outline" width="24" height="24" />
            )}
          </button>

          {errors.newPassword && (
            <div className="flex gap-1">
              <Icon
                icon="clarity:error-solid"
                width="16px"
                height="16px"
                className="text-red"
              />
              <p className="text-secondary text-red">
                {errors.newPassword.message as String}
              </p>
            </div>
          )}
        </div>

        <div className="relative flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="repeatPass">
            Again password
          </label>
          <input
            className={classNames(
              "bg-transparent py-2 px-4 h-14 border rounded-xl outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
              {
                "border-red": errors.repeatPassword?.message,
                "outline-red": errors.repeatPassword?.message,
              }
            )}
            id="repeatPass"
            type={isVisiblePassword[2] ? "text" : "password"}
            placeholder="Enter the same password"
            {...register("repeatPassword", {
              required: "Again password must be the same",
              validate: (value) => value === password || "Not same",
            })}
            onChange={handleRepeatPasswordChange}
          />

          <button
            type="button"
            className={classNames(
              "border-none w-fit absolute right-3 top-1/2 cursor-pointer",
              {
                "-translate-y-1/2": errors.repeatPassword,
              }
            )}
            onClick={() => handleVisiblePassword(2)}
          >
            {isVisiblePassword[2] ? (
              <Icon icon="basil:eye-outline" width="24" height="24" />
            ) : (
              <Icon icon="basil:eye-closed-outline" width="24" height="24" />
            )}
          </button>

          {errors.repeatPassword && (
            <div className="flex gap-1">
              <Icon
                icon="clarity:error-solid"
                width="16px"
                height="16px"
                className="text-red"
              />
              <p className="text-secondary text-red">
                {errors.repeatPassword.message as String}
              </p>
            </div>
          )}
        </div>
      </div>

      <button
        className="bg-primary-blue text-lightgrey h-14 p-2 rounded-xl"
        type="submit"
      >
        Change password
      </button>

      {isIncorrectPassword && (
        <p className="bg-red text-secondary w-fit inline-block p-1 absolute -bottom-10">
          Incorrect password. Please, try again
        </p>
      )}
      {isSuccess && (
        <p className="bg-green text-secondary w-fit inline-block p-1 absolute -bottom-10">
          Succesfully updated!
        </p>
      )}
    </form>
  );
};
