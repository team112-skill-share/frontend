import { PopularCourse } from "../components/PopularCourse";
import { PreArticle } from "../components/PreArticle";
import { Review } from "../components/Review";
import { SearchInput } from "../components/SearchInput";
import { CategoriesList } from "../components/CategoriesList";
import { Link } from "react-router-dom";
import { HomePageSectionTitle } from "../components/HomePageSectionTitle";
import { HomePageStatsList } from "../components/StatsList";
import { Categories } from "../types/categories";

type Props = {
  categories: Categories[];
};

export const HomePage: React.FC<Props> = ({ categories }) => {
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

              <CategoriesList categories={categories} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center gap-32">
        <p>
          Ukraine's largest aggregator of online courses. Our team carefully
          monitors all current offers on the market and does everything possible
          so that you can find the ideal option for yourself without extra
          effort.{" "}
          <span className="text-primary-blue font-semibold">Skill Share</span>{" "}
          is open to anyone who wants to create and sell a course. It offers
          over 9,000 courses on a variety of topics, making it one of the
          largest marketplaces for online learning. Strengths: It covers a broad
          range of skills, from technical subjects like programming to personal
          development and hobbies. Its flexible pricing and frequent discounts
          make courses accessible.
        </p>

        <img
          src={`${process.env.PUBLIC_URL}/img/homepage/about-us.png`}
          alt="about us"
        />
      </section>

      <section className="w-screen relative left-1/2 -translate-x-1/2 bg-blue rounded-t-[200px]">
        <h2 className="max-w-screen-xl mx-auto font-libre-baskerville text-h3 uppercase pt-8">
          About us
        </h2>
        <HomePageStatsList />
      </section>

      <section className="flex flex-col gap-4">
        <HomePageSectionTitle type="popular" />

        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex gap-5 animate-scroll hover:pause-animation">
            <PopularCourse />
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
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <HomePageSectionTitle type="recommended" />

        <div className="flex gap-6">
          <Link
            to="/article"
            className="hover:bg-white hover:scale-101 transition-all"
          >
            <PreArticle />
          </Link>
          <Link
            to="/article"
            className="hover:bg-white hover:scale-101 transition-all"
          >
            <PreArticle />
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <HomePageSectionTitle type="reviews" />

        <div className="flex gap-6">
          <Review />
          <Review />
        </div>
      </section>
    </div>
  );
};
