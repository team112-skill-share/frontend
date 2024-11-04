import React, { useEffect, useState } from "react";
import { User } from "../types/user";
import { updateUserInfo } from "../api/usersApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type Props = {
  user: User | undefined;
};

export const ChangeUserDataForm: React.FC<Props> = ({ user }) => {
  const location = useLocation();
  const [initialPreviousLocation] = useState(location);

  const state = location.state as { previousLocation?: Location };
  const previousLocation = state?.previousLocation || initialPreviousLocation;

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      birthDate: "",
      phoneNumber: "",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("fullName", user.fullName);
      setValue("birthDate", user.birthDate);
      setValue("phoneNumber", user.phoneNumber);
    }
  }, [user, navigate, setValue, previousLocation]);

  const onSubmit = (updatedUser: Omit<User, "email" | "id" | "favourites">) => {
    const updatedInfo = {
      fullName: updatedUser.fullName ? updatedUser.fullName.trim() : "",
      birthDate: updatedUser.birthDate,
      phoneNumber: updatedUser.phoneNumber
        ? updatedUser.phoneNumber.trim()
        : "",
    };

    updateUserInfo(updatedInfo).then(() => {
      setValue("fullName", updatedInfo.fullName);
      setValue("birthDate", updatedInfo.birthDate);
      setValue("phoneNumber", updatedInfo.phoneNumber);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    });
  };

  return (
    <form
      className="relative w-96 flex flex-col gap-4"
      name="about-you"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h5 className="text-h5 uppercase">About you</h5>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent py-2 px-4 h-14 border rounded-xl"
            id="email"
            type="email"
            placeholder="Email"
            disabled
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="name">
            Full name
          </label>
          <input
            className="bg-transparent py-2 px-4 h-14 border rounded-xl"
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            {...register("fullName")}
            onChange={(e) => setValue("fullName", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="phone">
            Phone number
          </label>
          <input
            className="bg-transparent py-2 px-4 h-14 border rounded-xl"
            id="phone"
            type="tel"
            placeholder="+380 123 45 67"
            autoComplete="tel"
            {...register("phoneNumber")}
            onChange={(e) => setValue("phoneNumber", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-secondary text-grey" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="bg-transparent py-2 px-4 h-14 border rounded-xl"
            id="birthday"
            type="date"
            placeholder="dd/mm/yy"
            {...register("birthDate")}
            onChange={(e) => setValue("birthDate", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary-blue text-lightgrey h-14 p-2 rounded-xl hover:bg-dark-blue transition-all"
      >
        Save
      </button>

      {isSuccess && (
        <p className="bg-green text-secondary w-fit inline-block p-1 absolute -bottom-10">
          Succesfully updated!
        </p>
      )}
    </form>
  );
};
