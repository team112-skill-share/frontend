import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Course, Format } from "../types/courses";
import { Categories } from "../types/categories";
import classNames from "classnames";
import { useState } from "react";

type Props = {
  course: Course;
  categories: Categories[];
  favourites: Course[] | undefined;
  handleDeleteCourseFromFavourite: (courseId: number) => void;
  handleAddCourseToFavourites: (courseId: number) => void;
};

export const Card: React.FC<Props> = ({
  course,
  categories,
  favourites,
  handleDeleteCourseFromFavourite,
  handleAddCourseToFavourites,
}) => {
  const [isInFavorites, setIsInFavorites] = useState(
    !!favourites && favourites.some((item) => item.id === course.id)
  );

  const categoryName = categories.find(
    (category) => category.id === course.categoryId
  )?.name;

  return (
    <div className="w-[600px] p-4 border border-solid border-primary-blue flex flex-col gap-10 hover:bg-lightblue transition-all">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
            <span className="font-poppins text-secondary text-center text-grey">
              {course.averageRating || 0}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Icon icon="basil:comment-outline" width="24px" height="24px" />
            <span className="font-poppins text-secondary text-center text-grey">
              {course.reviewsCount || 0}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon
            icon="basil:share-box-outline"
            width="24px"
            height="24px"
            className="text-grey"
          />
          <Icon
            icon="basil:heart-solid"
            width="24px"
            height="24px"
            className={classNames(
              "stroke-primary-blue stroke-2 cursor-pointer hover:scale-105 hover:text-primary-blue transition-all",
              {
                "text-primary-blue": isInFavorites,
                "text-transparent": !isInFavorites,
              }
            )}
            onClick={() => {
              if (isInFavorites) {
                handleDeleteCourseFromFavourite(course.id);
                setIsInFavorites(false);
              } else {
                handleAddCourseToFavourites(course.id);
                setIsInFavorites(true);
              }
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-6">
          <img
            className="border border-blue w-[270px] h-60 object-contain"
            src={`${course.cardImage}`}
            alt="course img"
          />

          <div className="flex flex-col gap-4">
            <Link
              to={`/courses/${categoryName}/${course.title}`}
              className="font-libre-baskerville text-h5 uppercase hover:text-grey transition-all"
            >
              {course.title}
            </Link>
            <h5 className="text-h5">{course.author}</h5>
            {/* <img
              className="w-fit h-8 object-contain"
              src={`${process.env.PUBLIC_URL}/img/homepage/eduquest.png`}
              alt="company logo"
            /> */}
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <Icon icon="basil:timer-outline" width="24px" height="24px" />
              <span className="font-poppins text-secondary">
                {course.duration}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Icon
                icon={
                  course.format === Format.Group
                    ? "basil:group-151-outline"
                    : "material-symbols:person-outline"
                }
                width="24px"
                height="24px"
              />
              <span className="font-poppins text-secondary lowercase first-letter:uppercase">
                {course.format}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Icon
                icon="basil:university-outline"
                width="24px"
                height="24px"
              />
              <span className="font-poppins text-secondary">
                {course.certificate
                  ? "Certificate is issued"
                  : "Without certificate"}
              </span>
            </li>
          </ul>

          <h3 className="text-nowrap self-end font-libre-baskerville text-h3">
            <span className="font-poppins text-secondary">From</span> $
            {course.price}
          </h3>
        </div>
      </div>

      <Link
        to={`/courses/${categoryName}/${course.title}`}
        role="button"
        className="border-0 flex justify-center items-center my-0 mx-auto py-4 w-[400px] bg-primary-blue text-lightgrey uppercase font-poppins text-button hover:bg-dark-blue transition-all"
      >
        Go to course{" "}
        <Icon
          icon="eva:diagonal-arrow-right-up-outline"
          width="16px"
          height="16px"
          className="text-white"
        />
      </Link>
    </div>
  );
};
