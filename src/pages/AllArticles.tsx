import { Link } from "react-router-dom";
import { PreArticle } from "../components/PreArticle";
import { ArticlesAdminPanel } from "../components/ArticlesAdminPanel";
import { ArticleType } from "../types/articles";

type Props = {
  articles: ArticleType[];
};

export const AllArticles: React.FC<Props> = ({ articles }) => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <h1 className="text-h1">All Articles</h1>
      <ArticlesAdminPanel />

      <ul className="flex gap-6">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              to={article.id.toString()}
              className="hover:bg-white hover:scale-101 transition-all"
            >
              <PreArticle article={article} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
