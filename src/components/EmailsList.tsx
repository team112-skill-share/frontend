import { ourEmails } from "../assets/lists";

export const EmailsList = () => {
  return (
    <ul className="flex flex-col gap-3">
      {ourEmails.map(({ label, email }, index) => (
        <li className="flex flex-col text-main" key={index}>
          <span className="text-white">{label}</span>
          <a
            href={`mailto:${email}`}
            className="text-grey50 hover:text-primary-blue hover:scale-101 transition-all"
            title="Write email for us"
          >
            {email}
          </a>
        </li>
      ))}
    </ul>
  );
};
