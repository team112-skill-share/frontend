import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
// import axios from "axios";

const nav = [
  { link: "courses", name: "Courses" },
  { link: "/", name: "About us" },
  { link: "work-with-us", name: "Work with us" },
];

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // const handleRegister = async () => {
  //   const url =
  //     "https://cors-anywhere.herokuapp.com/http://ec2-16-171-10-48.eu-north-1.compute.amazonaws.com/api/auth/register";

  //   const data = {
  //     email: "nazzarin565@gmail.com",
  //     password: "12345",
  //     repeatPassword: "12345",
  //   };

  //   try {
  //     const response = await axios.post(url, data);
  //     console.log("Success:", response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const handleLogin = async () => {
  //   const url =
  //     "https://cors-anywhere.herokuapp.com/http://ec2-16-171-10-48.eu-north-1.compute.amazonaws.com/api/auth/login";
  //   const data = {
  //     email: "nazzarin565@gmail.com",
  //     password: "12345",
  //   };

  //   try {
  //     const response = await axios.post(url, data);
  //     console.log("Succes:", response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   const handleGetRequest = async () => {
  //     const url =
  //       "https://cors-anywhere.herokuapp.com/http://ec2-16-171-10-48.eu-north-1.compute.amazonaws.com/api/articles";

  //     try {
  //       const response = await axios.get(url);
  //       console.log("Data:", response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   const handleGetUser = async () => {
  //     const url =
  //       "https://cors-anywhere.herokuapp.com/http://ec2-16-171-10-48.eu-north-1.compute.amazonaws.com/api/users/me";

  //     try {
  //       const response = await axios.get(url);
  //       console.log("Data User:", response.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   handleGetRequest();
  //   handleGetUser();
  // }, []);

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
              // onClick={() => handlePostRequest()}
            />
            {/* <button onClick={() => handleRegister()} className="bg-lightgrey">
              register
            </button>
            <button onClick={() => handleLogin()} className="bg-lightgrey">
              Login
            </button> */}
            <div ref={menuRef}>
              <Icon
                icon="basil:user-outline"
                width="24px"
                height="24px"
                onClick={() => setIsMenuActive(!isMenuActive)}
                className="text-grey50 relative cursor-pointer"
              />
            </div>
            {isMenuActive && (
              <div className="absolute cursor-default w-44 p-3 top-20 right-3 bg-white border border-solid text-[#dee2e6] rounded-xl shadow-md z-50 flex flex-col gap-4">
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
                  <span className="font-poppins text-secondary text-grey">
                    Log in
                  </span>
                </Link>

                <Link
                  to="register"
                  className="flex items-center gap-2 w-full cursor-pointer"
                  state={{ backgroundLocation: location }}
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
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
