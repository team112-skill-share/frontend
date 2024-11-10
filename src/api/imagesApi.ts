import { client } from "./httpClient";

export const apiChangeImage = async (imgId: number, newImg: string) => {
  try {
    const response = await client.put(`/images/${imgId}`, {
      url: newImg,
    });

    console.log("Image succesfully updated", response.data);
  } catch (error) {
    throw error;
  }
};
