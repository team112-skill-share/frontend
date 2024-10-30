import { supportLinks } from "../assets/lists";

export const SupportLinksList = () => {
  return (
    <ul className="flex gap-6">
      {supportLinks.map((link, index) => (
        <li
          className="text-secondary text-grey50 cursor-pointer hover:text-grey hover:scale-101 transition-all"
          key={index}
          onClick={() => alert("It will be availiable soon :)")}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};
