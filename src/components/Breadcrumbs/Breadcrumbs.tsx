import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const breadcrumbsElements = pathname.split("/").filter((item) => item !== "");

  return (
    <div className="breadcrumbs">
      <Link to="/home" className="home">
        <img
          src={`${process.env.PUBLIC_URL}/img/icons/home.svg`}
          alt="Home page"
        />
      </Link>
      {breadcrumbsElements.map((elem, index) => (
        <div className="group" key={index}>
          <div className="arrow" />
          {breadcrumbsElements.length - 1 === index ? (
            <p className="elem">{elem}</p>
          ) : (
            <Link to={elem} className="elem">
              {elem}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
