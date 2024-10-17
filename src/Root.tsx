import "./index.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { Courses } from "./pages/Courses";
import { WorkWithUs } from "./pages/WorkWithUs";
import { Profile } from "./pages/Profile";
import { Modal } from "./pages/Modal";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to={"/"} replace />} />
          <Route path="login" element={<Modal type="login" />} />
          <Route path="register" element={<Modal type="register" />} />
          <Route path="courses" element={<Courses />} />
          <Route path="work-with-us" element={<WorkWithUs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};
