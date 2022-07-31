import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  const [menuState, setMenuState] = useState(false);

  const tl = gsap.timeline();
  const openMenu = () => {
    if (menuState) {
      closeMenuAnimation();
    } else {
      openMenuAnimation();
    }
    setMenuState(!menuState);
  };

  const closeMenuAnimation = () => {
    document.querySelector(".mobile-nav-btn").classList.remove("open");
    tl.to("body", { css: { overflow: "scroll" }, duration: 0 })
      .to(".mobile-nav-btn", { rotate: 0, duration: 0.1 })
      .to(".mobile-nav-menu", {
        y: "-70vh",
        duration: 0.2,
      });
  };

  const openMenuAnimation = () => {
    document.querySelector(".mobile-nav-btn").classList.add("open");
    tl.to("body", { css: { overflow: "hidden" }, duration: 0 })
      .to(".mobile-nav-menu", { display: "block", opacity: 1, duration: 0 })
      .to(".mobile-nav-btn", { rotate: 180, duration: 0.1 })
      .to(".mobile-nav-menu", {
        y: 0,
        duration: 0.2,
      });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-img"></div>
          <p className="logo-copy">FridgeSwap.</p>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">Marketplace</li>
            <li className="nav-list-item">Bacon</li>
            <li className="nav-list-item">Connect Wallet</li>
          </ul>
        </nav>
        <button className="theme-toggle-btn" onClick={toggleThemeHandler}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
        <div className="mobile-nav-btn" onClick={openMenu}>
          <FontAwesomeIcon className="mobile-nav-icon" icon={faChevronDown} />
        </div>
        <div className="mobile-nav-menu">
          <div className="mobile-nav-btn-container"></div>
          <ul>
            <li>Marketplace</li>
            <li>Bacon</li>
            <li>Connect Wallet</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
