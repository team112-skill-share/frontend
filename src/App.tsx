import { client } from "./api/httpClient";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  console.log(location.state);

  if (token) {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

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
