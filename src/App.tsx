import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import { HomePage } from "./pages/HomePage";
// import { Modal } from "./components/Modal";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <h1 style={{ display: "none" }}>Skill share</h1>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
