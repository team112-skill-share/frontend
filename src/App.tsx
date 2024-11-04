import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
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
