import { Breadcrumbs } from "../components/Breadcrumbs";
import { Card } from "../components/Card";
import { CategoriesList } from "../components/CategoriesList";
import { SearchInput } from "../components/SearchInput";

export const Courses = () => {
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs />

      <CategoriesList />

      <div className="w-3/5">
        <SearchInput />
      </div>

      <div className="flex flex-col gap-4 w-3/5">
        <p>
          Online Course Catalog in 2024. We select and check lessons from more
          than 400 schools, rank them according to a special formula so that you
          can choose the best training option for yourself. The rating is
          updated every day based on all reviews on the RuNet. Choose the best
          course
        </p>
        <div className="flex items-center gap-20 text-small text-grey">
          <span>Total courses: 30</span>
          <span>Last Update: 03.10.2024</span>
        </div>
      </div>

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
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
