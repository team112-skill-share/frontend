import { LoginData, RegisterData } from "../types/authentification";
import { client } from "./httpClient";

export const apiLogin = async ({ email, password }: LoginData) => {
  try {
    const response = await client.post("/auth/login", {
      email: email,
      password: password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return { success: true };
  } catch (error) {
    console.error("Error:", error);
    return { success: false };
  }
};

export const apiRegister = async ({
  email,
  password,
  repeatPassword,
}: RegisterData) => {
  try {
    const response = await client.post("/auth/register", {
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    });
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
