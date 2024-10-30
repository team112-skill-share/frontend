import { RequestCourse } from "../types/courses";
import { client } from "./httpClient";

export const apiRequestCourse = async (data: RequestCourse) => {
  try {
    const response = await client.post("/courses/request", {
      company: data.company,
      phoneNumber: data.phoneNumber,
      email: data.email,
      workField: data.workField,
      description: data.description,
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
