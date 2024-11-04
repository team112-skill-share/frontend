import { Comments } from "./comment";
import { Content, Image, Subtitle } from "./content";

export interface ArticleType {
  id: 0;
  author: string;
  title: string;
  cardImage: string;
  description: string;
}

export interface CreateArticle extends Omit<ArticleType, "id"> {
  source: string;
  subtitles: Omit<Subtitle, "id">[];
  contents: Omit<Content, "id">[];
  images: Omit<Image, "id">[];
}

export interface CurrentArticle extends Omit<ArticleType, "cardImage"> {
  source: string;
  subtitles: Subtitle[];
  contents: Content[];
  images: Image[];
  comments: Comments[];
}
