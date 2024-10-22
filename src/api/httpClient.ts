import axios from "axios";

export const client = axios.create({
  baseURL: "https://skillshare112.online/api",
});
