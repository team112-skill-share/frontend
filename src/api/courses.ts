import { CreateCourse, RequestCourse } from "../types/courses";
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

export const apiGetCourses = async () => {
  try {
    const response = await client.get("/courses");

    console.log("Course getting success:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiAddCourse = async (data: Omit<CreateCourse, "id">) => {
  try {
    const response = await client.post("/courses", {
      author: data.author,
      title: data.title,
      cardImage: data.cardImage,
      duration: data.duration,
      type: data.type,
      format: data.format,
      certificate: data.certificate,
      trial: data.trial,
      price: data.price,
      categoryId: data.categoryId,
      source: data.source,
      contents: data.contents,
      images: data.images,
    });

    console.log("Course success added:", response.data);
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export const apiGetCurrentCourse = async (courseId: number) => {
  try {
    const response = await client.get(`/courses/${courseId}`);

    console.log("Current course getting success:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDeleteCurrentCourse = async (courseId: number) => {
  try {
    const response = await client.delete(`/courses/${courseId}`);

    console.log("Current course deleting success:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
