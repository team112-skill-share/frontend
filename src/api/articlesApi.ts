import { CreateArticle } from "../types/articles";
import { client } from "./httpClient";

export const apiGetArticles = async () => {
  try {
    const response = await client.get("/articles");

    console.log("Success in getting articles:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiAddArticle = async (data: Omit<CreateArticle, "id">) => {
  try {
    const response = await client.post("/articles", {
      author: data.author,
      title: data.title,
      cardImage: data.cardImage,
      description: data.description,
      source: data.source,
      subtitles: data.subtitles,
      contents: data.contents,
      images: data.images,
    });

    console.log("Success in adding articles:", response.data);
  } catch (error) {
    throw error;
  }
};

export const apiGetCurrentArticle = async (articleId: number) => {
  try {
    const response = await client.get(`/articles/${articleId}`);

    console.log("Success in getting current article:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDeleteCurrentArticle = async (articleId: number) => {
  try {
    const response = await client.delete(`/articles/${articleId}`);

    console.log("Success in deleting current article:", response.data);
  } catch (error) {
    throw error;
  }
};
