import "./index.css";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { Courses } from "./pages/Courses";
import { WorkWithUs } from "./pages/WorkWithUs";
import { Profile } from "./pages/Profile";
import { Modal } from "./pages/Modal";
import { CourseInfo } from "./pages/CourseInfo";
import { Article } from "./pages/Article";
import { ForgotPassword } from "./components/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { Favourites } from "./pages/Favourites";
import { useEffect, useLayoutEffect, useState } from "react";
import { Course } from "./types/courses";
import { apiGetCourses } from "./api/coursesApi";
import { apiGetCategories } from "./api/categoriesApi";
import { Categories } from "./types/categories";
import {
  apiAddCourseToFavourites,
  apiDeleteCourseFromFavourites,
  getUserInfo,
} from "./api/usersApi";
import { User } from "./types/user";
import { client } from "./api/httpClient";
import { AllArticles } from "./pages/AllArticles";
import { apiGetArticles } from "./api/articlesApi";
import { ArticleType } from "./types/articles";

export const Root = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [user, setUser] = useState<User>();
  const [searchParams] = useSearchParams();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token") || searchParams.get("token");

    console.log(token);

    if (token) {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (!localStorage.getItem("token")) {
        localStorage.setItem("token", token);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    getUserInfo()
      .then((data) => {
        setUser(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    apiGetCourses().then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    apiGetCategories().then((data) => {
      setCategories(data.sort((a: Categories, b: Categories) => a.id - b.id));
    });
  }, []);

  useEffect(() => {
    apiGetArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  const handleDeleteCourseFromFavourite = (courseId: number) => {
    setUser(
      (prev) =>
        prev && {
          ...prev,
          favourites: prev.favourites.filter((item) => item.id !== courseId),
        }
    );
    apiDeleteCourseFromFavourites(courseId);
  };

  const handleAddCourseToFavourites = (courseId: number) => {
    if (user?.favourites.some((item) => item.id === courseId)) {
      return;
    }

    apiAddCourseToFavourites(courseId).then((data) =>
      setUser((prev) =>
        prev
          ? {
              ...prev,
              favourites: [data, ...prev.favourites],
            }
          : prev
      )
    );
  };

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<App />}>
          <Route
            index
            element={<HomePage categories={categories} articles={articles} />}
          />
          <Route path="home" element={<Navigate to={"/"} replace />} />
          <Route path="courses">
            <Route
              index
              element={
                <Courses
                  courses={courses}
                  categories={categories}
                  favourites={user && user.favourites}
                  handleDeleteCourseFromFavourite={
                    handleDeleteCourseFromFavourite
                  }
                  handleAddCourseToFavourites={handleAddCourseToFavourites}
                />
              }
            />
            <Route
              path=":category"
              element={
                <Courses
                  courses={courses}
                  categories={categories}
                  favourites={user && user.favourites}
                  handleDeleteCourseFromFavourite={
                    handleDeleteCourseFromFavourite
                  }
                  handleAddCourseToFavourites={handleAddCourseToFavourites}
                />
              }
            />
            <Route
              path=":category/:courseName"
              element={
                <CourseInfo
                  courses={courses}
                  favourites={user && user.favourites}
                />
              }
            />
          </Route>
          <Route path="work-with-us" element={<WorkWithUs />} />
          <Route
            path="favourites"
            element={
              <Favourites
                categories={categories}
                favourites={user && user.favourites}
                handleDeleteCourseFromFavourite={
                  handleDeleteCourseFromFavourite
                }
                handleAddCourseToFavourites={handleAddCourseToFavourites}
              />
            }
          />
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="all-articles">
            <Route index element={<AllArticles articles={articles} />} />
            <Route path=":articleId" element={<Article />} />
          </Route>
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path="/login" element={<Modal type="login" />} />
          <Route path="/register" element={<Modal type="register" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      )}
    </>
  );
};
