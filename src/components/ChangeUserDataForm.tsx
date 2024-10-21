import React, { useEffect, useState } from "react";
import { User } from "../types/user";
import { getUserInfo, updateUserInfo } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const ChangeUserDataForm = () => {
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
    getUserInfo().then((data) => {
      if (data) {
        setValue("email", data.email);
        setValue("fullName", data.fullName);
        setValue("birthDate", data.birthDate);
        setValue("phoneNumber", data.phoneNumber);
      } else {
        navigate("/login");
      }
    });
  }, []);

  const onSubmit = (updatedUser: Omit<User, "email">) => {
    const updatedInfo = {
      fullName: updatedUser.fullName,
      birthDate: updatedUser.birthDate,
      phoneNumber: updatedUser.phoneNumber,
    };

    updateUserInfo(updatedInfo).then(() => {
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
        className="bg-primary-blue text-lightgrey h-14 p-2 rounded-xl"
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