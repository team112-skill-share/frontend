import { categories } from "../assets/lists";

export const CategoriesList = () => {
  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <li className="inline-block p-4 border" key={index}>
          {category}
        </li>
      ))}
    </ul>
  );
};
