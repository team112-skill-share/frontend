import { Link, useLocation, useNavigate } from "react-router-dom";
import "./modal.scss";
import { useState } from "react";

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
    <div className="modal-overlay" onClick={() => navigate(-1)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <h4 className="title_login">
            {type === "login" ? "Log in" : "Sign Up"}
          </h4>

          <span className="title_register">
            {type === "login"
              ? "Don’t have an account yet? "
              : "Have an account? "}
            <Link
              className="title_register_link"
              to={location.pathname.endsWith("/login") ? "/register" : "/login"}
              replace
            >
              {type === "login" ? "Create one" : "Log in"}
            </Link>
          </span>
        </div>

        <form
          className="form"
          method="POST"
          action=""
          name="loginForm"
          autoComplete="on"
        >
          <div className="form_inputs">
            <div className="input">
              <label className="input_label">Email</label>
              <input
                className="input_field"
                type="email"
                placeholder="rubinov@gmail.com"
              />
            </div>

            <div className="input">
              <label className="input_label">Password</label>
              <input
                className="input_field"
                type={isVisiblePassword[0] ? "text" : "password"}
                placeholder={
                  type === "login" ? "Enter your password" : "Create password"
                }
              />
              <button
                type="button"
                className="input_button"
                onClick={() => handleVisiblePassword(0)}
              >
                <img
                  src={
                    isVisiblePassword[0]
                      ? `${process.env.PUBLIC_URL}/img/icons/eye-open.svg`
                      : `${process.env.PUBLIC_URL}/img/icons/eye-close.svg`
                  }
                  alt="open password"
                  className="input_button_img"
                />
              </button>
            </div>

            {type === "login" && (
              <a className="input_forgot-password" href="213">
                I forgot my password
              </a>
            )}

            {type === "register" && (
              <>
                <div className="input">
                  <label className="input_label">Password again</label>
                  <input
                    className="input_field"
                    type={isVisiblePassword[1] ? "text" : "password"}
                    placeholder="Enter the same password"
                  />
                  <button
                    type="button"
                    className="input_button"
                    onClick={() => handleVisiblePassword(1)}
                  >
                    <img
                      src={
                        isVisiblePassword[1]
                          ? `${process.env.PUBLIC_URL}/img/icons/eye-open.svg`
                          : `${process.env.PUBLIC_URL}/img/icons/eye-close.svg`
                      }
                      alt="open password"
                      className="input_button_img"
                    />
                  </button>
                </div>

                <div className="requirements">
                  <div className="condition">
                    <div className="condition_checkmark" />
                    <span className="condition_text">Minimum 8 characters</span>
                  </div>

                  <div className="condition">
                    <div className="condition_checkmark" />
                    <span className="condition_text">
                      At least 1 capital letter
                    </span>
                  </div>

                  <div className="condition">
                    <div className="condition_checkmark" />
                    <span className="condition_text">At least 1 digit</span>
                  </div>

                  <div className="condition">
                    <div className="condition_checkmark" />
                    <span className="condition_text">Must be the same</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="form_divider">
            <div className="divide" />
            <span className="or">or</span>
            <div className="divide" />
          </div>

          <div className="form_social-login">
            <a className="login-link" href="https://google.com">
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/google.svg`}
                alt="google login"
                className="login_link_img"
              />
            </a>

            <a className="login-link" href="https://google.com">
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/google.svg`}
                alt="google login"
                className="login_link_img"
              />
            </a>

            <a className="login-link" href="https://google.com">
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/google.svg`}
                alt="google login"
                className="login_link_img"
              />
            </a>
          </div>

          <button type="submit" className="form_submit">
            {type === "login" ? "Log in" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};
