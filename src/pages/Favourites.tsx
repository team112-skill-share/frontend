import { Course } from "../types/courses";
import { Card } from "../components/Card";
import { Categories } from "../types/categories";

type Props = {
  categories: Categories[];
  favourites: Course[] | undefined;
};

export const Favourites: React.FC<Props> = ({ categories, favourites }) => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <h1 className="text-h1">Favourites</h1>
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-12">
        {favourites &&
          favourites.map((course) => (
            <Card
              key={course.id}
              course={course}
              categories={categories}
              favourites={favourites}
            />
          ))}
      </div>
    </div>
  );
};
