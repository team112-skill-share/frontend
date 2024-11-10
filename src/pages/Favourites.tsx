import { Course } from "../types/courses";
import { Card } from "../components/Card";
import { Categories } from "../types/categories";
// import { useEffect, useState } from "react";
// import { getUserInfo } from "../api/usersApi";

type Props = {
  categories: Categories[];
  favourites: Course[] | undefined;
  handleDeleteCourseFromFavourite: (courseId: number) => void;
  handleAddCourseToFavourites: (courseId: number) => void;
};

export const Favourites: React.FC<Props> = ({
  categories,
  favourites,
  handleDeleteCourseFromFavourite,
  handleAddCourseToFavourites,
}) => {
  // const [localFavourites, setLocalFavourites] = useState<Course[]>([]);

  // useEffect(() => {
  //   getUserInfo().then((data) => setLocalFavourites(data.favourites));
  // }, []);

  return (
    <div className="flex flex-col gap-10 mt-10">
      <h1 className="text-h1">Favourites</h1>
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-12">
        {favourites &&
          favourites.map((course) => {
            console.log(course);

            return (
              <Card
                key={course.id}
                course={course}
                categories={categories}
                favourites={favourites}
                handleDeleteCourseFromFavourite={
                  handleDeleteCourseFromFavourite
                }
                handleAddCourseToFavourites={handleAddCourseToFavourites}
              />
            );
          })}
      </div>
    </div>
  );
};
