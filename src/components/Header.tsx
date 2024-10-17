import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const nav = [
  { link: "courses", name: "Courses" },
  { link: "/", name: "About us" },
  { link: "work-with-us", name: "Work with us" },
];

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  console.log(isMenuActive);

  const location = useLocation();

  return (
    <header className="bg-darkgrey px-4 flex justify-between m-0 mx-auto items-center">
      <Link to="home">
        <img
          className="box-content py-[9px] w-[164px] h-[72px] object-contain"
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
                className="font-poppins text-main text-lightgrey py-2"
                key={link}
              >
                <li>{name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center cursor-pointer">
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
            <Icon
              icon="basil:heart-outline"
              width="24"
              height="24"
              className="text-primary-blue cursor-pointer"
            />
            <Icon
              icon="basil:user-outline"
              width="24px"
              height="24px"
              className="text-grey50 relative cursor-pointer"
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
            {isMenuActive && (
              <div className="absolute cursor-default w-44 p-3 top-20 right-3 bg-white border border-solid text-[#dee2e6] rounded-xl shadow-md">
                <Link
                  to="login"
                  className="flex items-center gap-2 w-full cursor-pointer"
                  state={{ backgroundLocation: location }}
                >
                  <Icon
                    icon="basil:login-outline"
                    width="16px"
                    height="16px"
                    className="text-grey"
                  />
                  <span className="font-poppins text-secondary">Log in</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
