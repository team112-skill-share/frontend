// import headImg from "./article-cosmetologist.png";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const Article = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-full relative w-[1440px] mx-auto left-1/2 -translate-x-1/2 -z-50">
        <img
          src="/img/article/article.png"
          alt="article-1"
          className="absolute left-0 w-full h-[705px] object-cover"
        />
      </div>
      <div className="col-span-full h-[705px] pt-3 pb-16 flex flex-col justify-between">
        <h1 className="font-libre-baskerville text-h1 text-white uppercase">
          Profession of a cosmetologist. What skills and education are needed?
        </h1>

        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <Icon
              icon="basil:calendar-outline"
              width="16px"
              height="16px"
              className="text-grey50"
            />
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
            <span className="text-secondary text-white">0</span>
          </div>
        </div>
      </div>
      <p className="col-span-8 text-grey self-center">
        The profession of a cosmetologist is increasingly in demand as more
        people seek professional help for skin care, beauty treatments, and
        overall aesthetic enhancement. A cosmetologist provides a wide range of
        services that enhance clients’ physical appearance, including skincare
        treatments, makeup application, and sometimes even medical procedures
        like chemical peels or injectables. To succeed in this profession, one
        must have specific skills and educational qualifications. Here’s a
        breakdown of what’s needed to become a successful cosmetologist.
      </p>
      <img
        src="img/article/article-2.png"
        alt="article-2"
        className="col-span-4 w-80 h-56 object-contain"
      />
      <h4 className="col-span-full font-libre-baskerville text-h4 uppercase mt-10">
        Essential Skills for a Cosmetologist
      </h4>
      <div className="col-span-6 flex flex-col gap-8 self-center">
        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">1</span>
          <p className="text-grey">
            <span className="text-darkgrey">
              In-depth Knowledge of Skin Anatomy and Physiology Cosmetologists
            </span>
            must understand how the skin works, including various skin
            conditions and how different factors (like aging, environment, and
            health) affect skin health. This knowledge helps in diagnosing skin
            issues and recommending appropriate treatments.
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">3</span>
          <p className="text-grey">
            <span className="text-darkgrey">
              Proficiency in Cosmetic Procedures
            </span>
            <br />
            Modern cosmetology involves using advanced treatments, from facials
            and waxing to more specialized procedures like laser treatments,
            microdermabrasion, and chemical peels. Some cosmetologists may also
            be trained in injection techniques (like Botox or fillers),
            depending on their level of education and licensing.
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">5</span>
          <p className="text-grey">
            <span className="text-darkgrey">
              Communication and Interpersonal Skills
            </span>
            <br />A cosmetologist interacts with clients daily, so strong
            communication skills are essential. Building trust, explaining
            procedures, offering aftercare advice, and providing excellent
            customer service ensure client satisfaction and repeat business.
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">7</span>
          <p className="text-grey">
            <span className="text-darkgrey">Sales and Marketing Abilities</span>
            <br />
            Many cosmetologists sell skincare products or additional services.
            The ability to market products effectively and offer upselling
            services is a valuable skill for increasing revenue. Social media
            presence and branding can also help in growing a clientele.
          </p>
        </div>
      </div>
      <div className="col-span-6 flex flex-col gap-8 self-center">
        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">2</span>
          <p className="text-grey">
            <span className="text-darkgrey">Skin Analysis and Treatment</span>
            <br />
            Skin Analysis and Treatment The ability to analyze different skin
            types and identify problems such as acne, dry skin, pigmentation, or
            sensitivity is crucial. Cosmetologists must offer personalized
            solutions, selecting the right treatments and products for each
            client.
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">4</span>
          <p className="text-grey">
            <span className="text-darkgrey">Product Knowledge</span>
            <br />
            Understanding various cosmetic products is key. Cosmetologists must
            be able to recommend skincare and beauty products based on a
            client’s specific needs. This includes knowing about ingredients and
            how they affect the skin.
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">6</span>
          <p className="text-grey">
            <span className="text-darkgrey">
              Attention to Detail and Precision
            </span>
            <br />
            Whether applying makeup, shaping eyebrows, or performing more
            complex treatments, precision and an eye for detail are necessary to
            achieve the desired results. A strong sense of aesthetics helps
            cosmetologists create balanced and harmonious looks.
          </p>
        </div>

        <div className="flex gap-3 items-center p-4 bg-white">
          <span className="text-7xl text-primary-blue">8</span>
          <p className="text-grey">
            <span className="text-darkgrey">
              Business Management (for Salon Owners)
            </span>
            <br />
            For those looking to open their own practice or salon, management
            skills are necessary. Understanding finances, customer service, and
            scheduling are important for running a successful business.
          </p>
        </div>
      </div>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase mt-10">
        Education and Certification Requirements
      </h5>

      <p className="col-span-6 text-grey self-center">
        To become a licensed cosmetologist, formal education and certification
        are essential. The specific requirements may vary depending on the
        country or state, but generally, the path includes:
      </p>

      <img
        src="img/article/article-3.png"
        alt="article-3"
        className="col-span-6 h-60 object-contain"
      />

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>Cosmetology School</span>
        <p className="text-grey">
          Aspiring cosmetologists typically start by enrolling in a cosmetology
          program at a vocational school or specialized beauty academy. These
          programs provide comprehensive training in skincare, makeup, hair
          removal, and more advanced treatments like chemical peels and
          microdermabrasion. The curriculum includes both theoretical knowledge
          and hands-on practical training.
        </p>
      </div>

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>Licensing Requirements</span>
        <p className="text-grey">
          In most countries, cosmetologists must pass a licensing exam to
          practice professionally. This ensures that the cosmetologist meets
          industry standards for safety, hygiene, and technical competence. In
          some regions, the license must be renewed periodically, often
          requiring continuing education to keep up with new techniques and
          trends.
        </p>
      </div>

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>Advanced Certifications</span>
        <p className="text-grey">
          For those looking to specialize, advanced training and certifications
          are available in areas such as medical cosmetology (involving more
          invasive procedures), laser treatments, or specific product lines.
          This can enhance a cosmetologist’s expertise and allow them to offer a
          broader range of services.
        </p>
      </div>

      <div className="col-span-6 py-2 px-4 border border-primary-blue">
        <span>Medical Education (for Medical Aesthetic Procedures)</span>
        <p className="text-grey">
          In some countries, cosmetologists who wish to perform more invasive
          procedures, such as injections or laser treatments, may need medical
          training. For example, in Russia, only licensed doctors or nurses with
          additional cosmetology certification can perform medical aesthetic
          procedures like Botox or dermal fillers.
        </p>
      </div>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase mt-10">
        Career Outlook and Opportunities
      </h5>

      <p className="col-span-full text-grey">
        The field of cosmetology offers diverse career paths. Some
        cosmetologists work in salons, spas, or dermatology clinics, while
        others may run their own businesses or specialize in high-demand areas
        like medical aesthetics or luxury skincare treatments. The career offers
        flexibility, the potential for entrepreneurship, and ongoing growth as
        the beauty industry evolves with new products and technologies. In
        conclusion, becoming a cosmetologist requires a combination of technical
        skills, a deep understanding of skin and beauty treatments, excellent
        interpersonal skills, and formal education. It's a fulfilling career for
        those who are passionate about helping others look and feel their best.
      </p>

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
