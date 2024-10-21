import axios from "axios";

export const client = axios.create({
  baseURL: "http://ec2-16-171-10-48.eu-north-1.compute.amazonaws.com/api",
});

