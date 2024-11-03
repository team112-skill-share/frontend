import { Categories } from "../types/categories";
import { client } from "./httpClient";

export const apiGetCategories = async () => {
  try {
    const response = await client.get("/categories");

    console.log("Success in get categories:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiAddCategory = async (data: Omit<Categories, "id">) => {
  try {
    const response = await client.post("/categories", {
      name: data.name,
    });

    console.log("Success in add category:", response.data);
  } catch (error) {
    throw error;
  }
};

export const apiDeleteCategory = async (id: number) => {
  try {
    const response = await client.delete(`/categories/${id}`);

    console.log("Success in delete category:", response.data);
  } catch (error) {
    throw error;
  }
};
