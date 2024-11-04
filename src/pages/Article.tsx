import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CurrentArticle } from "../types/articles";
import { apiGetCurrentArticle } from "../api/articlesApi";
import { Content, Image, Subtitle } from "../types/content";
import { Comments } from "../types/comment";

export const Article = () => {
  const [article, setArticle] = useState<CurrentArticle>();
  const { articleId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (articleId) {
      apiGetCurrentArticle(+articleId).then((data) =>
        setArticle({
          ...data,
          subtitles: data.subtitles.sort(
            (a: Subtitle, b: Subtitle) => a.id - b.id
          ),
          contents: data.contents.sort((a: Content, b: Content) => a.id - b.id),
          images: data.images.sort((a: Image, b: Image) => a.id - b.id),
          comments: data.comments.sort(
            (a: Comments, b: Comments) => b.id - a.id
          ),
        })
      );
    }
  }, [articleId]);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-full relative w-[1440px] mx-auto left-1/2 -translate-x-1/2 -z-50">
        <img
          src={`${article?.images[0].url}`}
          alt="article-1"
          className="absolute left-0 w-full h-[705px] object-cover"
        />
      </div>
      <div className="col-span-full h-[705px] pt-3 pb-16 flex flex-col justify-between">
        <h1 className="font-libre-baskerville text-h1 text-white uppercase">
          {article?.title}
        </h1>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Icon
              icon="basil:calendar-outline"
              width="16px"
              height="16px"
              className="text-grey50"
            />
            {/* {Try to fix it} */}
            <span className="text-secondary text-white">12.05.2024</span>
          </div>

          <div className="flex gap-2 items-center">
            <Icon
              icon="basil:eye-outline"
              width="16px"
              height="16px"
              className="text-grey50"
            />
            <span className="text-secondary text-white">127</span>
          </div>

          <div className="flex gap-2 items-center">
            <Icon
              icon="basil:comment-outline"
              width="16px"
              height="16px"
              className="text-grey50"
            />
            {/* {Fix it after creating comments} */}
            <span className="text-secondary text-white">0</span>
          </div>
        </div>
      </div>
      <p className="col-span-8 text-grey self-center">{article?.description}</p>
      <img
        src={`${article?.images[1].url}`}
        alt="article-2"
        className="col-span-4 w-80 h-56 object-contain"
      />
      <h4 className="col-span-full font-libre-baskerville text-h4 uppercase mt-10">
        {article?.subtitles[0].subtitle}
      </h4>
      <div className="col-span-6 flex flex-col gap-8 self-center">
        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">1</span>
          <p className="text-grey">
            <span className="text-darkgrey">{article?.contents[0].name}</span>
            <br />
            {article?.contents[0].text}
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">3</span>
          <p className="text-grey">
            <span className="text-darkgrey">{article?.contents[1].name}</span>
            <br />
            {article?.contents[1].text}
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">5</span>
          <p className="text-grey">
            <span className="text-darkgrey">{article?.contents[2].name}</span>
            <br />
            {article?.contents[2].text}
          </p>
        </div>
      </div>
      <div className="col-span-6 flex flex-col gap-8 self-center">
        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">2</span>
          <p className="text-grey">
            <span className="text-darkgrey">{article?.contents[3].name}</span>
            <br />
            {article?.contents[3].text}
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">4</span>
          <p className="text-grey">
            <span className="text-darkgrey">{article?.contents[4].name}</span>
            <br />
            {article?.contents[4].text}
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">6</span>
          <p className="text-grey">
            <span className="text-darkgrey">{article?.contents[5].name}</span>
            <br />
            {article?.contents[5].text}
          </p>
        </div>
      </div>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase mt-10">
        {article?.subtitles[1].subtitle}
      </h5>

      <p className="col-span-6 text-grey self-center">
        {article?.contents[6].text}
      </p>

      <img
        src={`${article?.images[2].url}`}
        alt="article-3"
        className="col-span-6 h-60 object-contain"
      />

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>{article?.contents[7].name}</span>
        <p className="text-grey">{article?.contents[7].text}</p>
      </div>

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>{article?.contents[8].name}</span>
        <p className="text-grey">{article?.contents[8].text}</p>
      </div>

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>{article?.contents[9].name}</span>
        <p className="text-grey">{article?.contents[9].text}</p>
      </div>

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>{article?.contents[10].name}</span>
        <p className="text-grey">{article?.contents[10].text}</p>
      </div>

      <h5 className="col-span-6 font-libre-baskerville text-h5 uppercase mt-10">
        {article?.subtitles[2].subtitle}
      </h5>

      <img
        src={`${article?.images[3].url}`}
        alt="article-4"
        className="col-span-6 row-span-2 h-60 mt-10 object-contain"
      />
      <p className=" col-span-6 text-grey">{article?.contents[11].text}</p>

      {/* Make a component */}
      <h5 className="col-span-2 font-libre-baskerville text-h4 uppercase w-fit flex items-center mt-10">
        Comments <span className="text-secondary ml-3">(0)</span>
      </h5>

      <span className="col-start-1 col-end-7 text-secondary text-grey">
        Only registered users can leave a review, please{" "}
        <Link to="login" className="text-primary-blue inline">
          log in
        </Link>{" "}
        or{" "}
        <Link to="register" className="text-primary-blue inline">
          register
        </Link>
        .
      </span>
    </div>
  );
};
