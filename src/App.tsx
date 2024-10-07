import { useEffect, useState } from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
// import { HomePage } from "./pages/HomePage";
// import { Modal } from "./components/Modal";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleSetLoginTrue = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <h1 style={{ display: "none" }}>Skill share</h1>
      <Header handleSetLoginTrue={handleSetLoginTrue} />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
