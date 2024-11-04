import classNames from "classnames";
import { useState } from "react";
import { regexPassword } from "../assets/constants";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RestoreData, RestorePassword } from "../types/authentification";
import { apiResetUserPassword } from "../api/usersApi";

export const ResetPassword = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState([false, false]);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      newPassword: "",
      repeatPassword: "",
    },
  });

  const password = watch("newPassword");
  const repeatPassword = watch("repeatPassword");

  const handleVisiblePassword = (index: number) => {
    if (index === 0) {
      setIsVisiblePassword([!isVisiblePassword[0], isVisiblePassword[1]]);
    } else {
      setIsVisiblePassword([isVisiblePassword[0], !isVisiblePassword[1]]);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("newPassword", event.target.value);
    clearErrors("newPassword");
  };

  const handleRepeatPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue("repeatPassword", event.target.value);
    clearErrors("repeatPassword");
  };

  const onSubmit = (restoreData: RestorePassword) => {
    setError("");

    if (!token) {
      setError("Error. Please use restore link again");
      return;
    }

    const restoreForm: RestoreData = {
      token: token,
      newPassword: restoreData.newPassword,
      repeatPassword: restoreData.repeatPassword,
    };

    apiResetUserPassword(restoreForm)
      .then(() => {
        setIsSuccess(true);

        setTimeout(() => {
          navigate("/home", { replace: true });
        }, 1500);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="fixed z-50 inset-0 bg-[#0E0D0D40] backdrop-blur-lg flex justify-center items-center">
      <div className="bg-lightgrey w-[554px] py-10 px-20 flex flex-col gap-4 max-h-svh object-contain">
        <h4 className="relative font-libre-baskerville text-h4 text-center uppercase">
          Create your new password
        </h4>

        <form
          className="flex flex-col gap-5"
          method="POST"
          name="ResetPassword"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex flex-col gap-2">
            <label
              htmlFor="newPassword"
              className="font-poppins text-secondary text-grey"
            >
              Password
            </label>
            <input
              id="newPassword"
              className={classNames(
                "bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
                {
                  "border-red": errors.newPassword?.message,
                  "outline-red": errors.newPassword?.message,
                }
              )}
              type={isVisiblePassword[0] ? "text" : "password"}
              placeholder={"Enter new password"}
              {...register("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Must contain at least 8 characters",
                },
                pattern: {
                  value: regexPassword,
                  message:
                    "Must contain at least 1 uppercase, 1 lowercase and 1 digit",
                },
              })}
              onChange={handlePasswordChange}
            />

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

            <button
              type="button"
              className={classNames(
                "border-none w-fit absolute right-3 top-1/2 cursor-pointer",
                {
                  "-translate-y-1/2": errors.newPassword,
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
          </div>

          <div className="relative flex flex-col gap-2">
            <label
              htmlFor="repeatPassword"
              className="font-poppins text-secondary text-grey"
            >
              Password again
            </label>
            <input
              id="repeatPassword"
              className={classNames(
                "bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
                {
                  "border-red": errors.repeatPassword?.message,
                  "outline-red": errors.repeatPassword?.message,
                }
              )}
              type={isVisiblePassword[1] ? "text" : "password"}
              placeholder="Enter the same password"
              {...register("repeatPassword", {
                required: "Repeat password",
                validate: (value) => value === password || "Not same",
              })}
              onChange={handleRepeatPasswordChange}
            />

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

            <button
              type="button"
              className={classNames(
                "border-none w-fit absolute right-3 top-1/2 cursor-pointer",
                {
                  "-translate-y-1/2": errors.repeatPassword,
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
          </div>

          {error && <p className="text-red text-secondary">{error}</p>}

          {isSuccess && (
            <p className="text-green text-secondary">
              Your password successfuly updated! <br /> Redirecting to Home Page
            </p>
          )}

          <button
            type="submit"
            className={classNames(
              "h-16 p-2 uppercase border-0 bg-primary-blue text-lightgrey font-poppins text-button text-center disabled:text-button-text-color disabled:bg-blue hover:bg-dark-blue transition-all"
            )}
            disabled={!(password && repeatPassword)}
          >
            Create new password
          </button>
        </form>
      </div>
    </div>
  );
};
