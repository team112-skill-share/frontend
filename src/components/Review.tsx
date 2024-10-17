import { Icon } from "@iconify/react";

export const Review = () => {
  return (
    <article className="w-[600px] h-[336px] border border-grey p-6 flex gap-4">
      <div className="w-32 flex flex-col items-center flex-shrink-0 gap-8">
        <div className="flex flex-col items-center gap-3">
          <img
            className="h-[100px] w-[100px] rounded-full"
            src={`${process.env.PUBLIC_URL}/img/homepage/review_img.png`}
            alt="David Anderson"
          />

          <span className="text-center text-secondary">David Anderson</span>
        </div>

        <span className="text-small text-center text-grey">27.09.2024</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-between gap-3">
            <img
              className="h-8 w-fit object-contain"
              src={`${process.env.PUBLIC_URL}/img/homepage/eduquest.png`}
              alt="eduquest logo"
            />

            <span>“Good courses great approach to learning!”</span>
          </div>

          <div className="flex gap-1">
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
          </div>
        </div>

        <p className="text-grey">
          I took the course "Graphic Design" and was very pleased. The
          information was presented in a very interesting way, which allowed me
          to feel progress with each lesson.
        </p>
      </div>
    </article>
  );
};
