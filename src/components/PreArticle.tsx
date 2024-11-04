import { ArticleType } from "../types/articles";

type Props = {
  article: ArticleType;
};

export const PreArticle: React.FC<Props> = ({ article }) => {
  return (
    <article className="flex flex-col gap-3 w-[600px] border border-grey50">
      <img
        className="w-full h-72 object-cover"
        src={article.cardImage}
        alt="article main"
      />

      <div className="flex flex-col gap-2 px-8 pb-2">
        <h4 className="font-libre-baskerville text-h4 uppercase">
          {article.title}
        </h4>
        <p className="line-clamp-6">{article.description}</p>
      </div>
    </article>
  );
};
