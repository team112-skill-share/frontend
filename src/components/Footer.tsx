import { Icon } from "@iconify/react";

const socials = [
  {
    href: "https://facebook.com",
    icon: "basil:facebook-outline",
  },
  {
    href: "https://telegram.com",
    icon: "basil:telegram-outline",
  },
  {
    href: "https://instagram.com",
    icon: "basil:instagram-outline",
  },
];

const emails = [
  { label: "Having problems with the course?", email: "connect@s-share.com" },
  { label: "Shall we work together?", email: "partnerships@s-share.com" },
];

const supportLinks = ["FAQs", "Privacy Policy", "Help"];

export const Footer = () => {
  return (
    <footer className="mt-16 bg-darkgrey pt-6 pb-7 px-28">
      <div className="flex justify-between h-56">
        <div className="flex flex-col justify-between">
          <ul className="flex flex-col gap-3">
            {emails.map(({ label, email }, index) => (
              <li className="flex flex-col text-main" key={index}>
                <span className="text-white">{label}</span>
                <a href={`mailto:${email}`} className="text-grey50">
                  {email}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-6">
            {supportLinks.map((link, index) => (
              <li
                className="text-secondary text-grey50 cursor-pointer"
                key={index}
                onClick={() => alert("It will be availiable soon :)")}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between items-end">
          <img
            className="w-[164px] h-[72px]"
            src={`${process.env.PUBLIC_URL}/img/skill-share-logo.svg`}
            alt="logo"
            //onClick to scroll up
          />

          <ul className="flex items-center gap-5">
            {socials.map(({ href, icon }) => (
              <li className="w-8 h-8" key={href}>
                <a href={href}>
                  <Icon
                    icon={icon}
                    width="32px"
                    height="32px"
                    className="text-grey50"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
