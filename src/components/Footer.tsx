import { EmailsList } from "./EmailsList";
import { SupportLinksList } from "./SupportLinksList";
import { SocialsList } from "./SocialsList";

export const Footer = () => {
  return (
    <footer className="mt-16 bg-darkgrey pt-6 pb-7 px-28">
      <div className="flex justify-between h-56">
        <div className="flex flex-col justify-between">
          <EmailsList />

          <SupportLinksList />
        </div>

        <div className="flex flex-col justify-between items-end">
          <img
            src={`${process.env.PUBLIC_URL}/img/skill-share-logo.svg`}
            alt="logo"
            className="w-[164px] h-[72px] cursor-pointer hover:scale-105 transition-all"
            onClick={() => window.scrollTo({ top: 0 })}
          />

          <SocialsList />
        </div>
      </div>
    </footer>
  );
};
