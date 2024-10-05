import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

export const App = () => {
  return (
    <>
      <h1 style={{ display: "none" }}>Skill share</h1>
      <Header />

      <main className="main">
        <HomePage />
      </main>

      <Footer />
    </>
  );
};
