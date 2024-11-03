import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbsElements = pathname.split("/").filter((item) => item !== "");

  console.log(breadcrumbsElements);

  return (
    <div className="capitalize font-poppins text-secondary text-grey mt-10 flex items-center gap-1">
      <Link to="/home">
        <Icon
          icon="basil:home-outline"
          width="24px"
          height="24px"
          className="hover:text-primary-blue hover:scale-101 hover:font-semibold transition-all"
        />
      </Link>
      {breadcrumbsElements.map((elem, index) => (
        <div className="flex items-center gap-1" key={index}>
          <Icon
            icon="weui:arrow-filled"
            width="24px"
            height="24px"
            className="text-grey"
          />
          {breadcrumbsElements.length - 1 === index ? (
            <p className="font-poppins text-secondary text-grey">
              {elem.replaceAll("%20", " ")}
            </p>
          ) : (
            <Link
              to={`/${breadcrumbsElements.slice(0, index + 1).join("/")}`}
              className="font-poppins text-secondary text-grey hover:text-primary-blue hover:scale-101 hover:font-semibold transition-all"
            >
              {elem.replaceAll("%20", " ")}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
