import { Icon } from "@iconify/react";

export const SearchInput = () => {
  return (
    <div className="relative h-14">
      <input
        className="h-full w-full p-2 border border-grey rounded-xl bg-transparent placeholder:text-grey50"
        type="text"
        placeholder="Enter the name of the course or area of ​​interest here"
      />
      <button className="absolute right-0 top-0 bg-primary-blue rounded-xl h-full w-24 text-white flex justify-center items-center">
        <Icon icon="basil:search-outline" width="40px" height="40px" />
      </button>
    </div>
  );
};
