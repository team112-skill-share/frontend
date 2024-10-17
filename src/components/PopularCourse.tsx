import { Icon } from "@iconify/react";
import React from "react";

export const PopularCourse = () => {
  return (
    <article className="py-5 px-4 border border-blue flex flex-col items-center gap-4">
      <img
        className="w-full h-14 object-contain"
        src={`${process.env.PUBLIC_URL}/img/homepage/eduquest.png`}
        alt="eduquest"
      />

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span>4.72</span>
            <div className="flex items-center gap-1">
              <Icon
                icon="basil:star-solid"
                width="16px"
                height="16px"
                className="text-primary-blue"
              />
              <Icon
                icon="basil:star-solid"
                width="16px"
                height="16px"
                className="text-primary-blue"
              />
              <Icon
                icon="basil:star-solid"
                width="16px"
                height="16px"
                className="text-primary-blue"
              />
              <Icon
                icon="basil:star-solid"
                width="16px"
                height="16px"
                className="text-primary-blue"
              />
              <Icon
                icon="basil:star-solid"
                width="16px"
                height="16px"
                className="text-primary-blue"
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Icon icon="basil:comment-outline" width="24px" height="24px" />
            <span>123</span>
          </div>
        </div>

        <button className="flex items-center gap-1">
          <span>75 courses</span>
          <Icon
            icon="basil:arrow-right-outline"
            width="16px"
            height="16px"
            className="text-grey50"
          />
        </button>
      </div>
    </article>
  );
};
