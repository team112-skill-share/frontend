import { ChangeUserDataForm } from "../components/ChangeUserDataForm";
import { ChangeUserPassword } from "../components/ChangeUserPassword";
import { User } from "../types/user";

type Props = {
  user: User | undefined;
};

export const Profile: React.FC<Props> = ({ user }) => {
  return (
    <div className="my-9 flex justify-between items-center">
      <ChangeUserDataForm user={user} />

      <img
        className="w-[392px] h-80 object-cover"
        src={`${process.env.PUBLIC_URL}/img/profile/profile.png`}
        alt="profile"
      />

      <ChangeUserPassword />
    </div>
  );
};
