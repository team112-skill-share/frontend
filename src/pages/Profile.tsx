import { ChangeUserDataForm } from "../components/ChangeUserDataForm";
import { ChangeUserPassword } from "../components/ChangeUserPassword";

export const Profile = () => {
  return (
    <div className="my-9 flex justify-between items-center">
      <ChangeUserDataForm />

      <img
        className="w-[392px] h-80 object-cover"
        src={`${process.env.PUBLIC_URL}/img/profile/profile.png`}
        alt="profile"
      />

      <ChangeUserPassword />
    </div>
  );
};
