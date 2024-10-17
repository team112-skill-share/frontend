export const PreArticle = () => {
  return (
    <article className="flex flex-col gap-3 w-[600px] border border-grey50">
      <img
        className="w-full h-72 object-cover"
        src={`${process.env.PUBLIC_URL}/img/homepage/article.png`}
        alt="article"
      />

      <div className="flex flex-col gap-2 px-8 pb-2">
        <h4 className="font-libre-baskerville text-h4 uppercase">
          Profession of a cosmetologist. What skills and education are needed?
        </h4>
        <p>
          The profession of a cosmetologist has gained significant popularity as
          people increasingly prioritize their appearance and skin health.
          Cosmetology combines science, medicine, and aesthetics, providing
          services ...
        </p>
      </div>
    </article>
  );
};
