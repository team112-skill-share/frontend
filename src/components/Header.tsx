import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { nav } from "../assets/constants";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const location = useLocation();
  const [initialPreviousLocation] = useState(location);

  const state = location.state as { previousLocation?: Location };
  const previousLocation = state?.previousLocation || initialPreviousLocation;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuActive(false);
      }
    };
    console.log(123);

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleOpenMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuActive(!isMenuActive);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <header className="w-full bg-darkgrey px-4 flex justify-between m-0 mx-auto items-center">
      <Link to="home">
        <img
          className="box-content py-[9px] w-[164px] h-[72px] object-contain hover:scale-105 transition-all"
          src={`${process.env.PUBLIC_URL}/img/skill-share-logo.svg`}
          alt="logo"
        />
      </Link>

      <div className="flex justify-between gap-32">
        <nav className="h-full">
          <ul className="h-full flex gap-8 items-center">
            {nav.map(({ link, name }) => (
              <Link
                to={link}
                className="font-poppins text-main text-lightgrey py-2 hover:text-primary-blue hover:scale-105 transition-all"
                key={link}
              >
                <li>{name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center cursor-pointer hover:scale-110 transition-all">
            <Icon
              icon="la:flag-usa"
              width="24px"
              height="24px"
              className="text-grey50" //Improve it!!!
            />
            <Icon
              icon="basil:caret-down-solid"
              width="24"
              height="24"
              className="text-grey50"
            />
          </div>

          <div className="flex gap-2 border border-solid border-[#bababa] rounded-xl p-2">
            <Link
              {...(token
                ? { to: "favourites" }
                : { to: "login", state: { previousLocation } })}
            >
              <Icon
                icon="basil:heart-solid"
                width="24"
                height="24"
                className="text-transparent stroke-primary-blue cursor-pointer hover:scale-105 hover:text-primary-blue transition-all"
              />
            </Link>

            <button ref={menuRef}>
              <Icon
                icon="basil:user-solid"
                width="24px"
                height="24px"
                className="text-transparent stroke-grey50 cursor-pointer hover:scale-105 hover:text-grey50 transition-all"
                onClick={handleOpenMenu}
              />
            </button>
            {isMenuActive && (
              <div className="absolute cursor-default w-44 top-20 right-3 bg-white border border-solid text-[#dee2e6] rounded-xl shadow-md z-50">
                {token ? (
                  <>
                    <Link
                      to="profile"
                      className="flex items-center gap-2 w-full p-3 cursor-pointer rounded-xl hover:bg-lightgrey transition-all"
                    >
                      <Icon
                        icon="iconamoon:profile"
                        width="16px"
                        height="16px"
                        className="text-grey"
                      />
                      <span className="font-poppins text-secondary text-grey">
                        Profile
                      </span>
                    </Link>

                    <button
                      className="flex items-center gap-2 w-full p-3 cursor-pointer rounded-xl hover:bg-lightgrey transition-all"
                      onClick={handleLogout}
                    >
                      <Icon
                        icon="basil:logout-outline"
                        width="16px"
                        height="16px"
                        className="text-red"
                      />
                      <span className="font-poppins text-secondary text-red">
                        Log out
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="login"
                      className="flex items-center gap-2 w-full p-3 cursor-pointer rounded-xl hover:bg-lightgrey transition-all"
                      state={{ previousLocation: location }}
                    >
                      <Icon
                        icon="basil:login-outline"
                        width="16px"
                        height="16px"
                        className="text-grey"
                      />
                      <span className="font-poppins text-secondary text-grey">
                        Log in
                      </span>
                    </Link>

                    <Link
                      to="register"
                      className="flex items-center gap-2 w-full p-3 cursor-pointer rounded-xl hover:bg-lightgrey transition-all"
                      state={{ previousLocation: location }}
                    >
                      <Icon
                        icon="fluent-mdl2:signin"
                        width="16px"
                        height="16px"
                        className="text-grey"
                      />
                      <span className="font-poppins text-secondary text-grey">
                        Sign Up
                      </span>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
