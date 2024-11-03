import { RestoreData } from "../types/authentification";
import { ChangePassword, User } from "../types/user";
import { client } from "./httpClient";

export const getUserInfo = async () => {
  try {
    const response = await client.get("/users/me");

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
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

export const apiResetUserPassword = async ({
  token,
  newPassword,
  repeatPassword,
}: RestoreData) => {
  try {
    const response = await client.post("/users/me/resetPassword", {
      token: token,
      newPassword: newPassword,
      repeatPassword: repeatPassword,
    });

    console.log(response.data);
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};
