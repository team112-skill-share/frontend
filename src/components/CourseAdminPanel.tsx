import { useState } from "react";
import {
  apiAddCategory,
  apiDeleteCategory,
  apiGetCategories,
} from "../api/categoriesApi";
import {
  apiAddCourse,
  apiChangeCurrentCourse,
  apiDeleteCurrentCourse,
  apiGetCourses,
  apiGetCurrentCourse,
} from "../api/coursesApi";
import {
  CourseType,
  CreateCourse,
  CurrentCourse,
  Format,
} from "../types/courses";
import { apiChangeImage } from "../api/imagesApi";

export const AdminPanel = () => {
  const handleAddCourse = (newCourse: Omit<CreateCourse, "id">) => {
    apiAddCourse(newCourse);
  };

  const [currentCourse, setCurrentCourse] = useState<CurrentCourse>();

  const data = {
    author: "CodeAcademy",
    title: "JavaScript for Beginners",
    cardImage: "img/courses/card-img.png",
    duration: "6 weeks",
    type: CourseType.Online,
    format: Format.Group,
    certificate: true,
    trial: false,
    price: 250,
    categoryId: 3,
    source: "",
    contents: [
      {
        name: "Course Overview",
        text: "This foundational course provides a comprehensive introduction to JavaScript, focusing on the language's essential features and uses in modern web development. Throughout the course, students will explore everything from syntax basics to building fully interactive web applications. Key topics include JavaScript variables, data types, loops, functions, and manipulating the Document Object Model (DOM) to create dynamic and engaging websites. Emphasis is placed on practical applications and problem-solving, ensuring that participants not only understand the theory but can implement solutions in real-world scenarios.",
      },
      {
        name: "Audience: Aspiring Frontend Developers",
        text: "Ideal for beginners looking to start a career in frontend development. This course lays the groundwork for understanding core JavaScript and building interactive web experiences.",
      },
      {
        name: "Audience: Web Designers transitioning to Development",
        text: "Perfect for designers who want to add interactivity to their designs, enabling them to handle both aesthetic and functional aspects of web projects.",
      },
      {
        name: "Audience: Students and Tech Enthusiasts",
        text: "Great for anyone interested in coding or expanding their technical skill set, providing foundational knowledge to explore further in the field of web development.",
      },
      {
        name: "Key Feature: JavaScript Fundamentals",
        text: "This module covers essential syntax and constructs of JavaScript, such as variables, data types, operators, and control structures. Students will understand the building blocks necessary for any JavaScript application.",
      },
      {
        name: "Key Feature: DOM Manipulation",
        text: "Students learn how to interact with the Document Object Model (DOM) to dynamically update content on a webpage. This includes selecting elements, changing their properties, and modifying HTML structures to make sites interactive.",
      },
      {
        name: "Key Feature: Event Handling",
        text: "This feature teaches how to respond to user interactions like clicks, text input, and keyboard actions. Students gain skills to create responsive designs that enhance user experience.",
      },
      {
        name: "Key Feature: Functions in JavaScript",
        text: "In-depth look at function creation, parameters, and return values. Students will learn how to break down code into manageable chunks, making it easier to organize and reuse.",
      },
      {
        name: "Key Feature: Practical Exercises",
        text: "Real-world problems and coding challenges are provided to practice skills learned, helping to cement knowledge through hands-on experience.",
      },
      {
        name: "Key Feature: Project Work",
        text: "At the course’s end, students undertake a project to build an interactive web application, applying all course concepts and creating a portfolio-ready project.",
      },
      {
        name: "Key Feature: Knowledge Checks",
        text: "Each module includes quizzes and assignments to assess understanding and track progress, ensuring students grasp each concept thoroughly before moving forward.",
      },
      {
        name: "Course Outcomes",
        text: "By completing this course, students will have a strong understanding of JavaScript fundamentals, enabling them to build interactive web pages. They will be equipped to manipulate HTML elements, handle user events, and develop dynamic websites. Additionally, students will gain experience with coding structure and modular design through functions, allowing them to create organized, efficient applications. Practical exercises and a final project ensure that they’re ready to apply these skills in real projects or continue to more advanced studies in JavaScript and frontend development.",
      },
    ],
    images: [{ url: "img-1" }, { url: "img-2" }, { url: "img-3" }],
  };

  const getCurrent = () =>
    apiGetCurrentCourse(12).then((data) => setCurrentCourse(data));

  const handleEditCourse = () => {
    const getCurrentCourse = () => {
      if (currentCourse) {
        const { id, contents, images, reviews, ...rest } = currentCourse;

        return {
          ...rest,
          images: images.map(({ id, ...imageWithoutId }) => imageWithoutId),
          contents: contents.map(
            ({ id, ...contentWithoutId }) => contentWithoutId
          ),
        };
      }
    };

    const newCourse = getCurrentCourse();

    if (newCourse) {
      apiChangeCurrentCourse(12, {
        ...newCourse,
        cardImage: "/img/courses/id12/id12_1.jpg",
      });
    }
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

        <button className="w-52 h-28 bg-lightblue" onClick={getCurrent}>
          Get Current Course
        </button>

        <button className="w-52 h-28 bg-lightblue" onClick={handleEditCourse}>
          Change Current Course
        </button>

        <button
          className="w-52 h-28 bg-lightblue"
          onClick={() => apiChangeImage(40, "/img/courses/id12/id12_2.jpg")}
        >
          Change image 2
        </button>
        <button
          className="w-52 h-28 bg-lightblue"
          onClick={() => apiChangeImage(41, "/img/courses/id12/id12_3.jpg")}
        >
          Change image 3
        </button>
        <button
          className="w-52 h-28 bg-lightblue"
          onClick={() => apiChangeImage(42, "/img/courses/id12/id12_4.jpg")}
        >
          Change image 4
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
