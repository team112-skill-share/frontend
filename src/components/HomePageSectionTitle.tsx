import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

type Props = {
  type: "popular" | "recommended" | "reviews";
};

export const HomePageSectionTitle: React.FC<Props> = ({ type }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (type) {
      case "popular":
        setTitle("Popular courses on Skill Share");
        break;

      case "recommended":
        setTitle("Recommended articles");
        break;

      case "reviews":
        setTitle("Reviews of courses");
    }
  }, [type]);

  return (
    <div className="flex justify-between">
      <h3 className="font-libre-baskerville text-h3 uppercase">{title}</h3>

      {type !== "popular" ? (
        <button className="relative flex items-center gap-2 after:absolute after:left-0 after:bottom-2 after:h-px after:bg-current after:w-0 after:transition-all after:duration-300 hover:after:w-2/3 hover:scale-102 transition-all">
          <span className="text-secondary">See all</span>
          <Icon icon="basil:arrow-right-outline" width="16px" height="16px" />
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <Icon
            icon="basil:arrow-left-outline"
            width="32px"
            height="32px"
            className="text-grey cursor-pointer hover:scale-105 hover:text-darkgrey transition-all"
          />
          <Icon
            icon="basil:arrow-right-outline"
            width="32px"
            height="32px"
            className="text-grey cursor-pointer hover:scale-105 hover:text-darkgrey transition-all"
          />
        </div>
      )}
    </div>
  );
};
