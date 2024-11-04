import {
  apiAddArticle,
  apiDeleteCurrentArticle,
  apiGetArticles,
} from "../api/articlesApi";
import { CreateArticle } from "../types/articles";

export const ArticlesAdminPanel = () => {
  const handleAddArticle = (newCourse: Omit<CreateArticle, "id">) => {
    apiAddArticle(newCourse);
  };

  const data = {
    author: "Emma Watson",
    title:
      "Profession of a cosmetologist. What skills and education are needed?",
    cardImage: "/img/article/article-1.png",
    description:
      "The profession of a cosmetologist is increasingly in demand as more people seek professional help for skin care, beauty treatments, and overall aesthetic enhancement. A cosmetologist provides a wide range of services that enhance clients’ physical appearance, including skincare treatments, makeup application, and sometimes even medical procedures like chemical peels or injectables. To succeed in this profession, one must have specific skills and educational qualifications. Here’s a breakdown of what’s needed to become a successful cosmetologist.",
    source: "",
    subtitles: [
      {
        subtitle: "Essential Skills for a Cosmetologist",
      },
      {
        subtitle: "Education and Certification Requirements",
      },
      {
        subtitle: "Career Outlook and Opportunities",
      },
    ],
    contents: [
      {
        name: "In-depth Knowledge of Skin Anatomy and Physiology",
        text: "Cosmetologists must understand how the skin works, including various skin conditions and how different factors (like aging, environment, and health) affect skin health. This knowledge helps in diagnosing skin issues and recommending appropriate treatments.",
      },
      {
        name: "Skin Analysis and Treatment",
        text: "Skin Analysis and Treatment The ability to analyze different skin types and identify problems such as acne, dry skin, pigmentation, or sensitivity is crucial. Cosmetologists must offer personalized solutions, selecting the right treatments and products for each client.",
      },
      {
        name: "Proficiency in Cosmetic Procedures",
        text: "Modern cosmetology involves using advanced treatments, from facials and waxing to more specialized procedures like laser treatments, microdermabrasion, and chemical peels. Some cosmetologists may also be trained in injection techniques (like Botox or fillers), depending on their level of education and licensing.",
      },
      {
        name: "Product Knowledge",
        text: "Understanding various cosmetic products is key. Cosmetologists must be able to recommend skincare and beauty products based on a client’s specific needs. This includes knowing about ingredients and how they affect the skin.",
      },
      {
        name: "Communication and Interpersonal Skills",
        text: "A cosmetologist interacts with clients daily, so strong communication skills are essential. Building trust, explaining procedures, offering aftercare advice, and providing excellent customer service ensure client satisfaction and repeat business.",
      },
      {
        name: "Attention to Detail and Precision",
        text: "Whether applying makeup, shaping eyebrows, or performing more complex treatments, precision and an eye for detail are necessary to achieve the desired results. A strong sense of aesthetics helps cosmetologists create balanced and harmonious looks.",
      },
      {
        name: "",
        text: "To become a licensed cosmetologist, formal education and certification are essential. The specific requirements may vary depending on the country or state, but generally, the path includes:",
      },
      {
        name: "Cosmetology School",
        text: "Aspiring cosmetologists typically start by enrolling in a cosmetology program at a vocational school or specialized beauty academy. These programs provide comprehensive training in skincare, makeup, hair removal, and more advanced treatments like chemical peels and microdermabrasion. The curriculum includes both theoretical knowledge and hands-on practical training.",
      },
      {
        name: "Licensing Requirements",
        text: "In most countries, cosmetologists must pass a licensing exam to practice professionally. This ensures that the cosmetologist meets industry standards for safety, hygiene, and technical competence. In some regions, the license must be renewed periodically, often requiring continuing education to keep up with new techniques and trends.",
      },
      {
        name: "Advanced Certifications",
        text: "For those looking to specialize, advanced training and certifications are available in areas such as medical cosmetology (involving more invasive procedures), laser treatments, or specific product lines. This can enhance a cosmetologist’s expertise and allow them to offer a broader range of services.",
      },
      {
        name: "Medical Education (for Medical Aesthetic Procedures)",
        text: "In some countries, cosmetologists who wish to perform more invasive procedures, such as injections or laser treatments, may need medical training. For example, in Russia, only licensed doctors or nurses with additional cosmetology certification can perform medical aesthetic procedures like Botox or dermal fillers.",
      },
      {
        name: "",
        text: "The field of cosmetology offers diverse career paths. Some cosmetologists work in salons, spas, or dermatology clinics, while others may run their own businesses or specialize in high-demand areas like medical aesthetics or luxury skincare treatments. The career offers flexibility, the potential for entrepreneurship, and ongoing growth as the beauty industry evolves with new products and technologies. In conclusion, becoming a cosmetologist requires a combination of technical skills, a deep understanding of skin and beauty treatments, excellent interpersonal skills, and formal education. It's a fulfilling career for those who are passionate about helping others look and feel their best.",
      },
    ],
    images: [
      {
        url: "/img/article/article-1.png",
      },
      {
        url: "/img/article/article-2.png",
      },
      {
        url: "/img/article/article-3.png",
      },
      {
        url: "/img/article/frontend-dev-3.png",
      },
    ],
  };

  return (
    <div className="flex gap-8">
      <button
        className="w-52 h-28 bg-blue"
        onClick={() => handleAddArticle(data)}
      >
        Add article
      </button>

      <button className="w-52 h-28 bg-green" onClick={apiGetArticles}>
        Get articles
      </button>

      <button
        className="w-52 h-28 bg-red"
        onClick={() => apiDeleteCurrentArticle(3)}
      >
        Delete article
      </button>
    </div>
  );
};
