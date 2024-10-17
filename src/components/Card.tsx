import { Icon } from "@iconify/react";

const specs = [
  { icon: "basil:timer-outline", text: "9 months" },
  { icon: "basil:group-151-outline", text: "Group" },
  { icon: "basil:university-outline", text: "Certificate is issued" },
];

export const Card = () => {
  return (
    <div className="w-[600px] p-4 border border-solid border-primary-blue flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Icon
              icon="basil:star-solid"
              width="24px"
              height="24px"
              className="text-primary-blue"
            />
            <span className="font-poppins text-secondary text-center text-grey">
              4.7
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Icon icon="basil:comment-outline" width="24px" height="24px" />
            <span className="font-poppins text-secondary text-center text-grey">
              2
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon
            icon="basil:share-box-outline"
            width="24px"
            height="24px"
            className="text-grey"
          />
          <Icon
            icon="basil:heart-outline"
            width="24px"
            height="24px"
            className="text-primary-blue"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-6">
          <img
            className="border border-blue w-[270px] h-60 object-contain"
            src={`${process.env.PUBLIC_URL}/img/courses/card-img.png`}
            alt="course img"
          />

          <div className="flex flex-col gap-4">
            <h5 className="font-libre-baskerville text-h5 uppercase">
              Fullstack Python Developer (from scratch)
            </h5>
            <img
              className="w-fit h-8 object-contain"
              src={`${process.env.PUBLIC_URL}/img/homepage/eduquest.png`}
              alt="company logo"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="flex flex-col gap-1">
            {specs.map(({ icon, text }, index) => (
              <li className="flex items-center gap-4">
                <Icon icon={icon} width="24px" height="24px" />
                <span className="font-poppins text-secondary">{text}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-nowrap self-end font-libre-baskerville text-h3">
            <span className="font-poppins text-secondary">From</span> 22 000
          </h3>
        </div>
      </div>

      {/* Incorrect Icon! */}
      <button
        type="button"
        className="border-0 flex justify-center items-center gap-3 my-0 mx-auto py-4 w-[400px] bg-primary-blue text-lightgrey uppercase font-poppins text-button"
      >
        Go to course{" "}
        <Icon
          icon="eva:diagonal-arrow-right-up-outline"
          width="16px"
          height="16px"
          className="text-white"
        />
      </button>
    </div>
  );
};
