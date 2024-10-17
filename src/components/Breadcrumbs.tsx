import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbsElements = pathname.split("/").filter((item) => item !== "");

  return (
    <div className="capitalize font-poppins text-secondary text-grey mt-10 flex items-center gap-1">
      <Link to="/home">
        <Icon icon="basil:home-outline" width="24px" height="24px" />
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
            <p className="font-poppins text-secondary text-grey">{elem}</p>
          ) : (
            <Link to={elem} className="font-poppins text-secondary text-grey">
              {elem}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
