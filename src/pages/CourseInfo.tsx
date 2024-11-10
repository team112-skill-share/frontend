import { Icon } from "@iconify/react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGetCurrentCourse } from "../api/coursesApi";
import { Course, CurrentCourse } from "../types/courses";
import { ReviewOfCurrentCourse } from "../types/reviews";
import classNames from "classnames";
import {
  apiAddCourseToFavourites,
  apiDeleteCourseFromFavourites,
} from "../api/usersApi";
import { Content, Image } from "../types/content";

type Props = {
  courses: Course[];
  favourites: Course[] | undefined;
};

export const CourseInfo: React.FC<Props> = ({ courses, favourites }) => {
  const [course, setCourse] = useState<CurrentCourse>();
  const { courseName } = useParams();
  const location = useLocation();

  const currentCourse = courses.find((course) => course.title === courseName);

  const [initialPreviousLocation] = useState(location);

  const state = location.state as { previousLocation?: Location };
  const previousLocation = state?.previousLocation || initialPreviousLocation;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (currentCourse) {
      apiGetCurrentCourse(currentCourse.id).then((data) =>
        setCourse({
          ...data,
          contents: data.contents.sort((a: Content, b: Content) => a.id - b.id),
          images: data.images.sort((a: Image, b: Image) => a.id - b.id),
          reviews: data.reviews.sort(
            (a: ReviewOfCurrentCourse, b: ReviewOfCurrentCourse) => b.id - a.id
          ),
        })
      );
    }
  }, [courseName, currentCourse]);

  const isInFavorites =
    favourites && course && favourites.some((item) => item.id === course.id);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-full">
        <Breadcrumbs />
      </div>

      <div className="col-span-full flex justify-between">
        <h5 className="font-libre-baskerville text-h5 uppercase">
          {course?.title}
        </h5>

        <h4 className="text-nowrap self-end font-libre-baskerville text-h4">
          <span className="font-poppins text-secondary text-grey">
            Price per course
          </span>{" "}
          ${course?.price}
        </h4>
      </div>

      <div className="col-span-5 text-secondary text-grey flex items-center gap-8">
        {/* {Make correct to add to favourite} */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-primary-blue hover:font-medium transition-all"
          onClick={() => {
            if (course) {
              if (isInFavorites) {
                apiDeleteCourseFromFavourites(course.id);
              } else {
                apiAddCourseToFavourites(course.id);
              }
            }
          }}
        >
          <Icon
            icon="basil:heart-solid"
            width="24px"
            height="24px"
            className={classNames(
              "stroke-primary-blue stroke-2 cursor-pointer hover:text-primary-blue transition-all",
              {
                "text-primary-blue": isInFavorites,
                "text-transparent": !isInFavorites,
              }
            )}
          />
          <span>Add to favourites</span>
        </div>
      </div>

      <div className="col-span-full bg-lightblue py-8 relative w-screen left-1/2 -translate-x-1/2 rounded-t-[200px]">
        <div className="col-span-full max-w-screen-xl mx-auto flex justify-between items-center">
          <ul className="h-52 flex flex-wrap flex-col gap-4 gap-x-8">
            <li>
              <span className="text-grey">Course type: </span>
              <span className="lowercase first-letter:uppercase">
                {course?.type}
              </span>
            </li>

            <li>
              <span className="text-grey">Training: </span>
              <span className="lowercase first-letter:uppercase">
                {course?.format}
              </span>
            </li>

            <li>
              <span className="text-grey">
                At the end, the following is issued:{" "}
              </span>
              <span>
                {course?.certificate ? "certificate" : "without certificate"}
              </span>
            </li>

            <li>
              <span className="text-grey">Trial lesson: </span>
              <span>{course?.trial ? "Yes" : "No"}</span>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-8">
            <div className="w-96 h-32 flex items-center justify-center px-10 py-8 border border-grey">
              <h3 className="text-h3">{course?.author}</h3>
              {/* <img
                src={`img/courses/upskillery.png`}
                alt="course company"
                className="h-16 object-cover"
              /> */}
            </div>

            <button
              onClick={() => alert("Redirecting to course platform")}
              className="self-end w-96 h-14 p-2 bg-primary-blue text-center text-button text-lightgrey uppercase rounded-xl hover:bg-dark-blue transition-all"
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      <h4 className="col-span-3 font-libre-baskerville text-h4 uppercase">
        Description
      </h4>

      <img
        src={`${course?.images[0].url}`}
        alt="coursepage 1"
        className="-col-start-1 -col-end-7 row-span-2 w-[596px] h-[336px] object-contain"
      />

      <p className="col-start-1 col-end-7">
        <span className="text-primary-blue">{course?.contents[0].name} </span>
        {course?.contents[0].text}
      </p>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase">
        Who is This Course For?
      </h5>

      <div className="col-span-6 border border-grey p-3">
        <p className="text-grey">
          <span className="text-darkgrey">{course?.contents[1].name}: </span>
          {course?.contents[1].text}
        </p>
      </div>

      <img
        src={`${course?.images[1].url}`}
        alt="coursepage 2"
        className="col-start-1 col-end-4 row-span-2"
      />

      <div className="col-span-6 border border-grey p-3">
        <p className="text-grey">
          <span className="text-darkgrey">{course?.contents[2].name}: </span>
          {course?.contents[2].text}
        </p>
      </div>

      <div className="-col-start-1 -col-end-7 border border-grey p-3">
        <p className="text-grey">
          <span className="text-darkgrey">{course?.contents[3].name}: </span>
          {course?.contents[3].text}
        </p>
      </div>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase">
        Key Features:
      </h5>

      <div className="col-span-4 flex flex-col gap-16 self-center">
        <div className="bg-lightblue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[4].name}</span>
          <br />
          {course?.contents[4].text}
        </div>

        <div className="bg-blue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[5].name}</span>
          <br />
          {course?.contents[5].text}
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-8">
        <div className="bg-white text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[6].name}</span>
          <br />
          {course?.contents[6].text}
        </div>

        <div className="bg-lightblue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[7].name}</span>
          <br />
          {course?.contents[7].text}
        </div>

        <div className="bg-white text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[8].name}</span>
          <br />
          {course?.contents[8].text}
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-16 self-center">
        <div className="bg-blue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[9].name}</span>
          <br />
          {course?.contents[9].text}
        </div>

        <div className="bg-white text-center text-grey py-4 px-6">
          <span className="text-darkgrey">{course?.contents[10].name}</span>
          <br />
          {course?.contents[10].text}
        </div>
      </div>

      <h5 className="col-span-6 font-libre-baskerville self-end text-h5 uppercase">
        Outcomes
      </h5>

      <img
        src={`${course?.images[2].url}`}
        alt="coursepage 3"
        className="col-span-6 row-span-2 object-contain h-80"
      />

      <p className="col-span-6 text-grey">{course?.contents[11].text}</p>

      {/* Make a component */}
      <h5 className="col-span-2 font-libre-baskerville text-h4 uppercase w-fit flex items-center">
        Reviews <span className="text-secondary ml-3">(0)</span>
      </h5>

      <span className="col-start-1 col-end-7 text-secondary text-grey">
        Only registered users can leave a review, please{" "}
        <Link
          to="/login"
          className="relative text-primary-blue inline after:absolute after:left-0 after:bottom-0 after:h-px after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:font-medium transition-all"
          state={{ previousLocation }}
        >
          log in
        </Link>{" "}
        or{" "}
        <Link
          to="/register"
          className="relative text-primary-blue inline after:absolute after:left-0 after:bottom-0 after:h-px after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:font-medium transition-all"
          state={{ previousLocation }}
        >
          register
        </Link>
        .
      </span>
    </div>
  );
};
