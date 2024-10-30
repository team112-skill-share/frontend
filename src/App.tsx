import { useEffect } from "react";
import { client } from "./api/httpClient";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Outlet, useSearchParams } from "react-router-dom";

export const App = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("token") || searchParams.get("token");

    if (token) {
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (!localStorage.getItem("token")) {
        localStorage.setItem("token", token);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <h1 style={{ display: "none" }}>Skill share</h1> */}
      <Header />

      <main className="max-w-[1224px] mx-auto w-full flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
