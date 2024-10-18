import { Icon } from "@iconify/react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

export const CourseInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-full">
        <Breadcrumbs />
      </div>

      <div className="col-span-full flex justify-between">
        <h5 className="font-libre-baskerville text-h5 uppercase">
          Course: Fullstack Python Developer (from scratch)
        </h5>

        <h4 className="text-nowrap self-end font-libre-baskerville text-h4">
          <span className="font-poppins text-secondary text-grey">
            Price per course
          </span>{" "}
          $2200
        </h4>
      </div>

      <div className="col-span-5 text-secondary text-grey flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Icon icon="basil:eye-outline" width="24px" height="24px" />
          <span className="text-secondary text-grey">918 views</span>
        </div>

        <div className="flex items-center gap-2">
          <Icon icon="basil:heart-outline" width="24px" height="24px" />
          <span className="add">Add to favourites</span>
        </div>
      </div>

      <div className="col-span-full bg-lightblue py-8 relative w-screen left-1/2 -translate-x-1/2 rounded-t-[200px]">
        <div className="col-span-full max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="h-52 flex flex-wrap flex-col gap-4 gap-x-8">
            <div>
              <span className="text-grey">Course type: </span>
              <span>online</span>
            </div>

            <div>
              <span className="text-grey">Training: </span>
              <span>by group</span>
            </div>

            <div>
              <span className="text-grey">
                At the end, the following is issued:{" "}
              </span>
              <span>certificate</span>
            </div>

            <div>
              <span className="text-grey">Trial lesson: </span>
              <span>no</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-96 h-32 flex items-center justify-center px-10 py-8 border border-grey">
              <img
                src={`img/courses/upskillery.png`}
                alt="company"
                className="h-16 object-cover"
              />
            </div>

            <button className="self-end w-96 h-14 p-2 bg-primary-blue text-center text-button text-lightgrey uppercase rounded-xl">
              Get started
            </button>
          </div>
        </div>
      </div>

      <h4 className="col-span-3 font-libre-baskerville text-h4 uppercase">
        Description
      </h4>

      <img
        src={`${process.env.PUBLIC_URL}/img/courses/coursepage-1.png`}
        alt="coursepage 1"
        className="-col-start-1 -col-end-7 row-span-2 w-[596px] h-[336px] object-contain"
      />

      <p className="col-start-1 col-end-7">
        <span className="text-primary-blue">
          The Fullstack Python Developer (from scratch)
        </span>
        <br />
        course is designed for individuals who want to gain comprehensive skills
        in both front-end and back-end development using Python, even if they
        have little or no prior programming experience. The course covers a
        broad range of topics essential for becoming a full-stack developer,
        ensuring a well-rounded understanding of Python’s application in web
        development.
      </p>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase">
        Who is This Course For?
      </h5>

      <div className="col-span-6 border border-grey p-3">
        <p className="text-grey">
          <span className="text-darkgrey">Career Changers: </span>Suitable for
          individuals transitioning into tech and looking for a comprehensive
          program that covers everything needed to start a career in
          development.
        </p>
      </div>

      <img
        src={`img/courses/coursepage-2.png`}
        alt="coursepage 2"
        className="col-start-1 col-end-4 row-span-2"
      />

      <div className="col-span-6 border border-grey p-3">
        <p className="text-grey">
          <span className="text-darkgrey">Aspiring Developers: </span>Perfect
          for anyone looking to become a Python-based full-stack developer,
          mastering both front-end and back-end technologies.
        </p>
      </div>

      <div className="-col-start-1 -col-end-7 border border-grey p-3">
        <p className="text-grey">
          <span className="text-darkgrey">Beginners: </span>Ideal for those with
          no coding background who want to enter the field of web development.
        </p>
      </div>

      <h5 className="col-span-full font-libre-baskerville text-h5 uppercase">
        Key Features:
      </h5>

      <div className="col-span-4 flex flex-col gap-16 self-center">
        <div className="bg-lightblue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Python Fundamentals</span>
          <br />
          The course begins with an introduction to Python, focusing on core
          programming concepts such as variables, data types, control
          structures, functions, and object-oriented programming (OOP). This
          provides a solid foundation for more advanced topics.
        </div>

        <div className="bg-blue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Deployment and Version Control</span>
          <br />
          The course also covers important deployment practices, including cloud
          deployment on platforms like Heroku, AWS, or Google Cloud.
          Additionally, you’ll learn about version control systems such as Git
          and how to collaborate on projects using GitHub.
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-8">
        <div className="bg-white text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Back-End Development</span>
          <br />
          Students learn how to build server-side applications using frameworks
          like Django or Flask, two of the most popular Python web development
          frameworks. Topics covered include creating APIs, managing databases
          with SQL (often using PostgreSQL or SQLite), and handling user
          authentication.
        </div>

        <div className="bg-lightblue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Database Management</span>
          <br />A significant focus is placed on how to integrate databases with
          Python applications. You will work with SQL and NoSQL databases (like
          MongoDB), learning to perform CRUD operations (Create, Read, Update,
          Delete) and optimize database queries.
        </div>

        <div className="bg-white text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Career Preparation</span>
          <br />
          Many courses include career guidance, helping students with resume
          preparation, building a developer portfolio, and practicing coding
          interviews, making graduates more marketable for full-stack
          development roles.
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-16 self-center">
        <div className="bg-blue text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Front-End Technologies</span>
          <br />
          To build fully functional web applications, the course covers
          front-end development using HTML, CSS, and JavaScript. You’ll also
          learn how to work with frameworks like React.js or Vue.js to create
          interactive and responsive user interfaces.
        </div>

        <div className="bg-white text-center text-grey py-4 px-6">
          <span className="text-darkgrey">Full-Stack Project Development</span>
          <br />
          Toward the end of the course, students typically engage in building
          real-world projects. This may involve developing a fully functional
          web application from scratch, combining everything learned—front-end
          design, back-end logic, and database integration.
        </div>
      </div>

      <h5 className="col-span-6 font-libre-baskerville self-end text-h5 uppercase">
        Outcomes
      </h5>

      <img
        src={`img/courses/coursepage-3.png`}
        alt="coursepage 3"
        className="col-span-6 row-span-2 object-contain h-80"
      />

      <p className="col-span-6 text-grey">
        By the end of the Fullstack Python Developer course, students will have
        built multiple full-stack applications and have a deep understanding of
        Python’s role in web development. Graduates can pursue careers as
        Fullstack Developers, Python Developers, or Web Developers.
      </p>

      <h4 className="col-span-2 text-h4 uppercase w-fit flex items-center">
        Reviews <span className="text-secondary ml-3">(0)</span>
      </h4>

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
