import {
  apiAddCategory,
  apiDeleteCategory,
  apiGetCategories,
} from "../api/categoriesApi";
import {
  apiAddCourse,
  apiDeleteCurrentCourse,
  apiGetCourses,
} from "../api/coursesApi";
import { CourseType, CreateCourse, Format } from "../types/courses";

export const AdminPanel = () => {
  const handleAddCourse = (newCourse: Omit<CreateCourse, "id">) => {
    apiAddCourse(newCourse);
  };

  const data = {
    author: "Mind & Body Institute",
    title: "Introduction to Psychology: Understanding Human Behavior",
    cardImage: "img/courses/psychology-intro-card-img.png",
    duration: "8 weeks",
    type: CourseType.Online,
    format: Format.Group,
    certificate: true,
    trial: false,
    price: 300,
    categoryId: 8,
    source: "",
    contents: [
      {
        name: "",
        text: "This foundational course provides an overview of the key concepts, theories, and research in psychology. Students will explore human behavior, cognition, emotions, and the factors influencing mental health and well-being.",
      },
      {
        name: "Students Interested in Psychology",
        text: "Ideal for those looking to begin their journey in psychology or to understand the basics of human behavior.",
      },
      {
        name: "Professionals Seeking Insight",
        text: "Perfect for individuals in other fields who wish to gain insights into psychological principles to enhance their personal and professional relationships.",
      },
      {
        name: "Lifelong Learners",
        text: "Great for anyone curious about psychology and its applications in everyday life, enhancing understanding of self and others.",
      },
      {
        name: "Foundations of Psychology",
        text: "Covers the history of psychology, major psychological perspectives, and the scientific methods used in psychological research.",
      },
      {
        name: "Cognitive Psychology",
        text: "Explores how people think, learn, and remember, focusing on perception, attention, memory, and problem-solving.",
      },
      {
        name: "Developmental Psychology",
        text: "Examines human development across the lifespan, including cognitive, emotional, and social development from infancy to adulthood.",
      },
      {
        name: "Social Psychology",
        text: "Analyzes how individuals influence and are influenced by others, discussing topics such as group behavior, conformity, and prejudice.",
      },
      {
        name: "Research Methods in Psychology",
        text: "Discusses various research methods used in psychology, including experiments, surveys, and observational studies, highlighting their strengths and weaknesses.",
      },
      {
        name: "Applications of Psychology",
        text: "Encourages students to apply psychological concepts to real-life situations, enhancing their understanding of interpersonal dynamics and mental health.",
      },
      {
        name: "Ethics in Psychology",
        text: "Introduces the ethical considerations and dilemmas faced by psychologists, including informed consent, confidentiality, and the treatment of vulnerable populations.",
      },
      {
        name: "",
        text: "By completing this course, students will gain a solid foundation in psychology, enabling them to understand the complexities of human behavior. They will be equipped to think critically about psychological research and its implications for individuals and society.",
      },
    ],
    images: [
      {
        url: "img-1",
      },
      {
        url: "img-2",
      },
      {
        url: "img-3",
      },
    ],
  };
  return (
    <>
      <div className="flex gap-8">
        <button
          className="w-52 h-28 bg-blue"
          onClick={() => handleAddCourse(data)}
        >
          Add course
        </button>

        <button className="w-52 h-28 bg-green" onClick={apiGetCourses}>
          Get courses
        </button>

        <button
          className="w-52 h-28 bg-red"
          onClick={() => apiDeleteCurrentCourse(8)}
        >
          Delete course
        </button>
      </div>

      <div className="flex gap-8">
        <button
          className="inline-block w-20 h-14 bg-blue"
          onClick={() => apiAddCategory({ name: "Psychology and Medicine" })}
        >
          Add category
        </button>

        <button
          className="inline-block w-20 h-14 bg-green"
          onClick={apiGetCategories}
        >
          Get category
        </button>

        <button
          className="inline-block w-20 h-14 bg-red"
          onClick={() => apiDeleteCategory(2)}
        >
          Delete category
        </button>
      </div>
    </>
  );
};
