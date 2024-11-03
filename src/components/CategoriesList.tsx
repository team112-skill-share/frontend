import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import { Categories } from "../types/categories";

type Props = {
  categories: Categories[];
};

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      setCurrentCategory(category);
    } else {
      setCurrentCategory(null);
    }
  }, [category]);

  return (
    <ul className="flex flex-wrap gap-2">
      <Link to="/courses">
        <li
          className={classNames(
            "inline-block p-4 border cursor-pointer hover:bg-blue hover:scale-102 transition-all",
            {
              "bg-blue hover:": currentCategory === null,
            }
          )}
        >
          All courses
        </li>
      </Link>
      {categories.map(({ name }, index) => (
        <Link to={`/courses/${name}`} key={index}>
          <li
            className={classNames(
              "inline-block p-4 border cursor-pointer hover:bg-blue hover:scale-102 transition-all",
              {
                "bg-blue hover:": currentCategory === name,
              }
            )}
          >
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
