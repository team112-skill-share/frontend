import { Icon } from "@iconify/react";
import { useState } from "react";
import { PopularCourse } from "../components/PopularCourse";
import { PreArticle } from "../components/PreArticle";
import { Review } from "../components/Review";
import { stats } from "../assets/lists";
import { SearchInput } from "../components/SearchInput";
import { CategoriesList } from "../components/CategoriesList";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [currentStats, setCurrentStats] = useState(stats);

  const handleCurrentStat = (newId: number) => {
    const newStats = currentStats
      .map((stat) => {
        if (stat.id === 0) {
          return { ...stat, id: newId };
        } else if (stat.id === newId) {
          return { ...stat, id: 0 };
        } else {
          return stat;
        }
      })
      .sort((a, b) => a.id - b.id);

    console.log(newStats);

    setCurrentStats(newStats);
  };

  return (
    <div className="flex flex-col gap-16">
      <section className="w-screen relative left-1/2 -translate-x-1/2 bg-lightblue h-[600px] rounded-br-[200px] rounded-bl-[200px]">
        <div className="max-w-screen-xl py-10 mx-auto flex">
          <img
            src={`${process.env.PUBLIC_URL}/img/homepage/home-start-1.png`}
            alt="woman sit at the table"
          />

          <div className="flex flex-col gap-12">
            <h1 className="font-libre-baskerville text-h1">
              Course search platform{" "}
              <span className="text-primary-blue">Skill Share</span>
            </h1>

            <div className="flex flex-col gap-4">
              <SearchInput />

              <CategoriesList />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between gap-32">
        <div className="flex flex-col justify-between">
          <p>
            Ukraine's largest aggregator of online courses. Our team carefully
            monitors all current offers on the market and does everything
            possible so that you can find the ideal option for yourself without
            extra effort.{" "}
            <span className="text-primary-blue font-semibold">Skill Share</span>{" "}
            is open to anyone who wants to create and sell a course. It offers
            over 9,000 courses on a variety of topics, making it one of the
            largest marketplaces for online learning. Strengths: It covers a
            broad range of skills, from technical subjects like programming to
            personal development and hobbies. Its flexible pricing and frequent
            discounts make courses accessible.
          </p>

          <button className="border-2 border-button-text-color uppercase h-14">
            About us
          </button>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/img/homepage/about-us.png`}
          alt="about us"
        />
      </section>

      <section className="w-screen relative left-1/2 -translate-x-1/2 bg-blue rounded-t-[200px]">
        <div className="max-w-screen-xl py-14 mx-auto flex justify-between">
          {currentStats.map(
            ({ id, title, img, count, description }) =>
              id === 0 && (
                <div
                  className="w-[496px] p-4 bg-lightgrey flex flex-col gap-4"
                  key={id}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-libre-baskerville text-h4 uppercase">
                      {title}
                    </h4>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/homepage/${img}`}
                      alt="satisfied clients"
                      className="w-[85px] h-16 object-contain"
                    />
                  </div>

                  <h2 className="text-h2">{count}</h2>

                  <p className="text-grey">{description}</p>
                </div>
              )
          )}

          <div className="flex flex-col justify-between">
            {currentStats.map(
              ({ id, title, img, count }) =>
                id !== 0 && (
                  <div
                    className="w-[600px] p-4 bg-lightgrey flex justify-between items-center cursor-pointer"
                    key={id}
                    onClick={() => handleCurrentStat(id)}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/homepage/${img}`}
                        alt="real reviews"
                        className="w-[85px] h-16 object-contain"
                      />
                      <span className="font-libre-baskerville text-h5 uppercase">
                        {title}
                      </span>
                    </div>

                    <h2 className="text-h2">{count}</h2>
                  </div>
                )
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="font-libre-baskerville text-h3 uppercase">
            Popular courses on Skill Share
          </h3>

          <div className="flex gap-2">
            <Icon icon="basil:arrow-left-outline" width="32px" height="32px" />
            <Icon icon="basil:arrow-right-outline" width="32px" height="32px" />
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto">
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
          <PopularCourse />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        {/* make a component */}
        <div className="flex justify-between">
          <h3 className="font-libre-baskerville text-h3 uppercase">
            Recommended Articles
          </h3>

          <button className="flex items-center gap-2">
            <span className="underline text-secondary">See all</span>
            <Icon icon="basil:arrow-right-outline" width="16px" height="16px" />
          </button>
        </div>

        <div className="flex gap-6">
          <Link to="/article">
            <PreArticle />
          </Link>
          <PreArticle />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        {/* make a component */}
        <div className="flex justify-between">
          <h3 className="font-libre-baskerville text-h3 uppercase">
            Reviews of courses
          </h3>
          <button className="flex items-center gap-2">
            <span className="underline text-secondary">See all</span>
            <Icon icon="basil:arrow-right-outline" width="16px" height="16px" />
          </button>
        </div>

        <div className="flex gap-6">
          <Review />
          <Review />
        </div>
      </section>
    </div>
  );
};
