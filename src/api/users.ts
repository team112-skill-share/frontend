import { ChangePassword, User } from "../types/user";
import { client } from "./httpClient";

export const getUserInfo = async () => {
  try {
    const response = await client.get("/users/me");

    return response.data;
  } catch (error) {}
};

export const updateUserInfo = async ({
  fullName,
  birthDate,
  phoneNumber,
}: Omit<User, "email">) => {
  try {
    await client.put("/users/me", {
      fullName: fullName,
      birthDate: birthDate,
      phoneNumber: phoneNumber,
    });
  } catch (error) {
    console.log("Error during update User Info:", error);
  }
};

export const updateUserPassword = async ({
  currentPassword,
  newPassword,
  repeatPassword,
}: ChangePassword) => {
  try {
    const response = await client.patch("/users/me/password", {
      currentPassword: currentPassword,
      newPassword: newPassword,
      repeatPassword: repeatPassword,
    });

    console.log(response);
  } catch (error) {
    console.log("Error during change User Password", error);
    throw error;
  }
};
