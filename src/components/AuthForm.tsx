/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { regexEmail, regexPassword, requirements } from "../assets/constants";
import classNames from "classnames";
import { apiLogin, apiRegister } from "../api/authentification";
import { Link, useNavigate } from "react-router-dom";
import { Location as RouterLocation } from "react-router-dom";

type Props = {
  type: "login" | "register";
  previousLocation: RouterLocation | Location;
};

export const AuthForm: React.FC<Props> = ({ type, previousLocation }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState([false, false]);

  const [incorectPasswordError, setIncorectPasswordError] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [isRegisterSucceed, setIsRegisterSucceed] = useState(false);

  const handleVisiblePassword = (index: number) => {
    if (index === 0) {
      setIsVisiblePassword([!isVisiblePassword[0], isVisiblePassword[1]]);
    } else {
      setIsVisiblePassword([isVisiblePassword[0], !isVisiblePassword[1]]);
    }
  };

  const navigate = useNavigate();

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
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  useEffect(() => {
    reset();
    setIsAlreadyRegistered(false);
    setIncorectPasswordError(false);
    setIsRegisterSucceed(false);
  }, [type]);

  const email = watch("email");
  const password = watch("password");
  const repeatPassword = type === "register" ? watch("repeatPassword") : "";

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncorectPasswordError(false);
    setValue("email", event.target.value);
    clearErrors("email");
    setIsAlreadyRegistered(false);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncorectPasswordError(false);
    setValue("password", event.target.value);
    clearErrors("password");
  };

  const handleRepeatPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIncorectPasswordError(false);
    setValue("repeatPassword", event.target.value);
    clearErrors("repeatPassword");
  };

  const onSubmit = async (data: any) => {
    if (type === "login") {
      const result = await apiLogin({
        email: data.email,
        password: data.password,
      });

      if (!result.success) {
        setIncorectPasswordError(true);
      } else {
        navigate(-1);
      }
    } else {
      apiRegister({
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
      })
        .then(() => {
          setIsRegisterSucceed(true);

          setTimeout(() => {
            navigate("/login", { state: { previousLocation }, replace: true });
          }, 1500);
        })
        .catch(() => setIsAlreadyRegistered(true));
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      method="POST"
      action=""
      name="loginForm"
      autoComplete="on"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <div className="relative flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-poppins text-secondary text-grey"
          >
            Email
          </label>
          <input
            id="email"
            className={classNames(
              "bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
              {
                "border-red": errors.email?.message,
                "outline-red": errors.email?.message,
              }
            )}
            type="email"
            placeholder="rubinov@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: regexEmail,
                message: "Please, enter valid email",
              },
            })}
            onChange={handleEmailChange}
          />
          {errors.email && (
            <div className="flex gap-1">
              <Icon
                icon="clarity:error-solid"
                width="16px"
                height="16px"
                className="text-red"
              />
              <p className="text-secondary text-red">
                {errors.email.message as String}
              </p>
            </div>
          )}
        </div>

        <div className="relative flex flex-col gap-2">
          <label
            htmlFor="password"
            className="font-poppins text-secondary text-grey"
          >
            Password
          </label>
          <input
            id="password"
            className={classNames(
              "bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
              {
                "border-red": errors.password?.message,
                "outline-red": errors.password?.message,
              }
            )}
            type={isVisiblePassword[0] ? "text" : "password"}
            placeholder={
              type === "login" ? "Enter your password" : "Create password"
            }
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must contain at least 8 characters",
              },
              pattern: {
                value: regexPassword,
                message: " ",
              },
            })}
            onChange={handlePasswordChange}
          />

          {errors.password && type !== "register" && (
            <div className="flex gap-1">
              <Icon
                icon="clarity:error-solid"
                width="16px"
                height="16px"
                className="text-red"
              />
              <p className="text-secondary text-red">
                {errors.password.message as String}
              </p>
            </div>
          )}

          <button
            type="button"
            className={classNames(
              "border-none w-fit absolute right-3 top-1/2 cursor-pointer",
              {
                "-translate-y-1/2": errors.password && type !== "register",
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

        {type === "login" && (
          <Link
            className="w-fit font-poppins text-secondary text-grey"
            to="/forgot-password"
            state={{ previousLocation }}
          >
            I forgot my password
          </Link>
        )}

        {type === "register" && (
          <>
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
              <button
                type="button"
                className="border-none w-fit absolute right-3 top-1/2 cursor-pointer"
                onClick={() => handleVisiblePassword(1)}
              >
                {isVisiblePassword[1] ? (
                  <Icon icon="basil:eye-outline" width="24" height="24" />
                ) : (
                  <Icon
                    icon="basil:eye-closed-outline"
                    width="24"
                    height="24"
                  />
                )}
              </button>
            </div>

            {/* Make correct collors */}
            <div className="flex flex-col gap-1">
              {requirements.map(({ text, isTrue }, index) => (
                <div
                  key={index}
                  className={"flex items-center gap-2 text-grey"}
                >
                  <Icon
                    icon="basil:check-solid"
                    width="16px"
                    height="16px"
                    className={classNames({
                      "text-green": isTrue(password, repeatPassword),
                    })}
                  />
                  <span className="font-poppins text-secondary ">{text}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {incorectPasswordError && (
        <p className="text-red text-secondary">Incorrect Email or Password</p>
      )}

      {isAlreadyRegistered && (
        <p className="text-red text-secondary">
          User with this email is already registered, try to log in
        </p>
      )}

      {isRegisterSucceed && (
        <p className=" bg-green text-white text-secondary w-fit inline-block p-1">
          Succesfuly registered! Now - log in.
        </p>
      )}

      <button
        type="submit"
        className={classNames(
          "h-16 p-2 uppercase border-0 bg-blue text-button-text-color font-poppins text-button text-center",
          {
            "bg-primary-blue text-lightgrey":
              type === "login"
                ? email && password
                : email && password && repeatPassword,
          }
        )}
        disabled={
          type === "login"
            ? !(email && password)
            : !(email && password && repeatPassword)
        }
      >
        {type === "login" ? "Log in" : "Sign Up"}
      </button>
    </form>
  );
};
