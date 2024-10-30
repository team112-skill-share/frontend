import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useEffect, useState } from "react";

export const SearchInput = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
  }, []);
  return (
    <div className="relative h-14">
      <input
        className="h-full w-full p-2 border border-grey rounded-xl bg-transparent placeholder:text-grey50"
        type="text"
        placeholder="Enter the name of the course or area of ​​interest here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="absolute right-px top-0.5 bottom-px bg-primary-blue rounded-xl h-[93%] w-24 text-white flex justify-center items-center hover:bg-dark-blue disabled:bg-blue transition-all"
        disabled={!query}
      >
        <Icon
          icon="basil:search-outline"
          width="40px"
          height="40px"
          className={classNames({ "text-grey": !query })}
        />
      </button>
    </div>
  );
};
