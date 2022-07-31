import "./styles/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Produce from "./components/Produce";
import Footer from "./components/Footer";
import { useEffect, useContext } from "react";
import { ThemeContext } from './context/ThemeContext';

//router
function App() {
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector(".header");
      const scroll = document.documentElement.scrollTop;
      if (scroll === 0) {
        header.style.boxShadow = "";
      } else {
        header.style.boxShadow = "1px 1px 1px #777";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Hero />
      <About />
      <Produce />
      <Footer />
    </div>
  );
}

export default App;
