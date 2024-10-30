import { ourSocials } from "../assets/lists";
import { Icon } from "@iconify/react";

export const SocialsList = () => {
  return (
    <ul className="flex items-center gap-5">
      {ourSocials.map(({ href, icon }) => (
        <li className="w-8 h-8" key={href}>
          <a href={href}>
            <Icon
              icon={icon}
              width="32px"
              height="32px"
              className="text-grey50 hover:text-grey hover:scale-101 transition-all"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
