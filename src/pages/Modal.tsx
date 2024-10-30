import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AuthForm } from "../components/AuthForm";
import { useEffect, useState } from "react";
import { apiGoogleLogin } from "../api/authentification";

type Props = {
  type: "login" | "register";
};

export const Modal: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [initialPreviousLocation] = useState(location);

  const state = location.state as { previousLocation?: Location };
  const previousLocation = state?.previousLocation || initialPreviousLocation;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // const handleGoogleLogin = () => {
  //   apiGoogleLogin().then().catch();
  // };

  return (
    <div
      className="fixed z-50 inset-0 bg-[#0E0D0D40] backdrop-blur-lg flex justify-center items-center overflow-y-auto"
      onClick={() => navigate(-1)}
    >
      <div
        className="bg-lightgrey w-[554px] py-10 px-20 flex flex-col gap-2 object-contain"
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
              state={{ previousLocation: previousLocation }}
            >
              {type === "login" ? "Create one" : "Log in"}
            </Link>
          </span>
        </div>

        <AuthForm type={type} previousLocation={previousLocation} />

        <div className="flex justify-between items-center gap-8 w-full p-3">
          <div className="h-px bg-black w-full" />
          <span>or</span>
          <div className="h-px bg-black w-full" />
        </div>

        <button
          className="flex gap-1 justify-center items-center py-3 border border-solid border-darkgrey rounded-xl cursor-pointer"
          onClick={apiGoogleLogin}
        >
          <span className="font-poppins text-grey">Continue with</span>
          <Icon icon="basil:google-alt-outline" width="32px" height="32px" />
        </button>
      </div>
    </div>
  );
};
