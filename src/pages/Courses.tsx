import { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Card } from "../components/Card";
import { CategoriesList } from "../components/CategoriesList";
import { SearchInput } from "../components/SearchInput";
import { Course } from "../types/courses";
import { Categories } from "../types/categories";
import { useParams } from "react-router-dom";
// import { AdminPanel } from "../components/CourseAdminPanel";

type Props = {
  courses: Course[];
  categories: Categories[];
  favourites: Course[] | undefined;
  handleDeleteCourseFromFavourite: (courseId: number) => void;
  handleAddCourseToFavourites: (courseId:number) => void;
};

export const Courses: React.FC<Props> = ({
  courses,
  categories,
  favourites,
  handleDeleteCourseFromFavourite,
  handleAddCourseToFavourites
}) => {
  const [query, setQuery] = useState("");
  const { category } = useParams();

  const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const categoryId = categories.find((item) => item.name === category)?.id;

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = category ? course.categoryId === categoryId : true;
    const matchesQuery = query
      ? (["title", "author"] as Array<keyof Course>).some((field) =>
          (course[field] as string).toLowerCase().includes(query.toLowerCase())
        )
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs />

      <CategoriesList categories={categories} />

      <div className="w-3/5 flex flex-col gap-2">
        <SearchInput query={query} onSetQuery={handleSetQuery} />

        <div className="flex items-center gap-20 text-small text-grey">
          <span>Total courses: 30</span>
          <span>Last Update: 03.10.2024</span>
        </div>
      </div>

      {/* <AdminPanel /> */}

      {/* Think about sorting, how to change it */}
      <div className="flex justify-end gap-9">
        <div className="flex items-center gap-4">
          <label className="text-secondary text-grey" htmlFor="select1">
            Sort By1
          </label>
          <select
            className="bg-transparent p-2 h-10 w-48 border border-grey text-center cursor-pointer"
            id="select1"
            name="select1"
          >
            <option value="1">Popularity</option>
            <option value="2">From cheap to expensive</option>
            <option value="3">From expensive to cheap</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-secondary text-grey" htmlFor="select2">
            Sort By2
          </label>
          <select
            className="bg-transparent p-2 h-10 w-48 border border-grey text-center cursor-pointer"
            id="select2"
            name="select2"
          >
            <option value="1">Popularity</option>
            <option value="2">From cheap to expensive</option>
            <option value="3">From expensive to cheap</option>
          </select>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-12">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            course={course}
            categories={categories}
            favourites={favourites}
            handleDeleteCourseFromFavourite={handleDeleteCourseFromFavourite}
            handleAddCourseToFavourites={handleAddCourseToFavourites}
          />
        ))}
      </div>
    </div>
  );
};
