import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { Modal } from "./components/Modal";
import { Courses } from "./pages/Courses";

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
        </Route>
      </Routes>
    </Router>
  );
};
