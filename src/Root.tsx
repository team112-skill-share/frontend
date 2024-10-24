import "./index.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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

export const Root = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to={"/"} replace />} />
          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path="course-info" element={<CourseInfo />} />
          </Route>
          <Route path="work-with-us" element={<WorkWithUs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="article">
            <Route index element={<Article />} />
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
