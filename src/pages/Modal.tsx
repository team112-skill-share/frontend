import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";

const requirements = [
  "Minimum 8 characters",
  "At least 1 capital letter",
  "At least 1 digit",
  "Must be the same",
];

type Props = {
  type: "login" | "register";
};

export const Modal: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isVisiblePassword, setIsVisiblePassword] = useState([false, false]);

  const handleVisiblePassword = (index: number) => {
    if (index === 0) {
      setIsVisiblePassword([!isVisiblePassword[0], isVisiblePassword[1]]);
    } else {
      setIsVisiblePassword([isVisiblePassword[0], !isVisiblePassword[1]]);
    }
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-[#0E0D0D40] backdrop-blur-lg flex justify-center items-center"
      onClick={() => navigate(-1)}
    >
      <div
        className="bg-lightgrey w-[554px] py-10 px-20 flex flex-col gap-2 max-h-svh object-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <h4 className="relative font-libre-baskerville text-h4 text-center uppercase">
            {type === "login" ? "Log in" : "Sign Up"}
            <Icon
              icon="basil:cross-outline"
              width="32px"
              height="32px"
              className="absolute top-0 right-0 cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </h4>

          <span className="font-poppins text-main">
            {type === "login"
              ? "Don’t have an account yet? "
              : "Have an account? "}
            <Link
              className="inline text-primary-blue"
              to={location.pathname.endsWith("/login") ? "/register" : "/login"}
              replace
            >
              {type === "login" ? "Create one" : "Log in"}
            </Link>
          </span>
        </div>

        <form
          className="flex flex-col gap-6"
          method="POST"
          action=""
          name="loginForm"
          autoComplete="on"
        >
          <div className="flex flex-col gap-4">
            <div className="relative flex flex-col gap-2">
              <label className="font-poppins text-secondary text-grey">
                Email
              </label>
              <input
                className="bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 placeholder:font-poppins placeholder:text-main placeholder:text-grey50"
                type="email"
                placeholder="rubinov@gmail.com"
              />
            </div>

            <div className="relative flex flex-col gap-2">
              <label className="font-poppins text-secondary text-grey">
                Password
              </label>
              <input
                className="bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 placeholder:font-poppins placeholder:text-main placeholder:text-grey50"
                type={isVisiblePassword[0] ? "text" : "password"}
                placeholder={
                  type === "login" ? "Enter your password" : "Create password"
                }
              />
              <button
                type="button"
                className="border-none w-fit absolute right-3 top-1/2 cursor-pointer"
                onClick={() => handleVisiblePassword(0)}
              >
                {isVisiblePassword[0] ? (
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

            {type === "login" && (
              <a
                className="w-fit font-poppins text-secondary text-grey"
                href="213"
              >
                I forgot my password
              </a>
            )}

            {type === "register" && (
              <>
                <div className="relative flex flex-col gap-2">
                  <label className="font-poppins text-secondary text-grey">
                    Password again
                  </label>
                  <input
                    className="bg-transparent w-full border border-solid text-darkgrey rounded-lg py-2 px-4 h-14 placeholder:font-poppins placeholder:text-main placeholder:text-grey50"
                    type={isVisiblePassword[1] ? "text" : "password"}
                    placeholder="Enter the same password"
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
                  {requirements.map((requirement, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <Icon
                        icon="basil:check-solid"
                        width="16px"
                        height="16px"
                        className="text-grey"
                      />
                      <span className="font-poppins text-secondary text-grey">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            className="h-16 p-2 uppercase border-0 bg-blue text-button-text-color font-poppins text-button text-center"
          >
            {type === "login" ? "Log in" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center gap-8 w-full p-3">
            <div className="h-px bg-black w-full" />
            <span>or</span>
            <div className="h-px bg-black w-full" />
          </div>

          <button className="flex gap-1 justify-center items-center py-3 border border-solid border-darkgrey rounded-xl cursor-pointer">
            <span className="font-poppins text-grey">Continue with</span>
            <Icon icon="basil:google-alt-outline" width="32px" height="32px" />
          </button>
        </form>
      </div>
    </div>
  );
};
