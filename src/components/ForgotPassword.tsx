import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiForgotPassword } from "../api/authentificationApi";
import { regexEmail } from "../assets/constants";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (email: string) => {
    setEmailError("");

    if (!regexEmail.test(email)) {
      setEmailError("Please enter correct email");
      return;
    }

    apiForgotPassword(email)
      .then(() => setIsSuccess(true))
      .catch((error) => setEmailError(error.response.data.message));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  return (
    <div className="fixed z-50 inset-0 bg-[#0E0D0D40] backdrop-blur-lg flex justify-center items-center">
      <div className="bg-lightgrey w-[554px] py-10 px-20 flex flex-col gap-4 max-h-svh object-contain">
        <h4 className="relative font-libre-baskerville text-h4 text-center uppercase flex justify-between">
          Password assistance
          <Icon
            icon="basil:cross-outline"
            width="32px"
            height="32px"
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </h4>
        <p>Enter email address associated with your Skill Share account.</p>

        <div className="relative flex flex-col gap-2">
          <label
            htmlFor="forgetEmail"
            className="font-poppins text-secondary text-grey"
          >
            Email
          </label>
          <input
            id="forgetEmail"
            className={classNames(
              "bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 outline outline-1 placeholder:font-poppins placeholder:text-main placeholder:text-grey50",
              {
                "border-red": emailError,
                "outline-red": emailError,
              }
            )}
            type="email"
            placeholder="your.email@gmail.com"
            autoComplete="email"
            value={email}
            onChange={handleChange}
            disabled={isSuccess}
          />

          {emailError && <p className="text-red text-small">{emailError}</p>}
        </div>

        {isSuccess && (
          <p className="text-secondary text-green">
            Password reset link sent to email. Please check it
          </p>
        )}

        <button
          type="submit"
          className={classNames(
            "h-16 p-2 uppercase border-0 bg-primary-blue text-lightgrey font-poppins text-button text-center hover:bg-dark-blue disabled:bg-blue disabled:text-button-text-color"
          )}
          disabled={!email || isSuccess}
          onClick={() => handleSubmit(email)}
        >
          Restore password
        </button>
      </div>
    </div>
  );
};
