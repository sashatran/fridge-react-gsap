import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".header", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      stagger: 0.05,
      ease: "sine.out",
      delay: 0.2
    });
  });

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-img"></div>
          <p className="logo-copy">Fridge.</p>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">Marketplace</li>
            <li className="nav-list-item">Bacon</li>
            <li className="nav-list-item">Connect Wallet</li>
          </ul>
        </nav>
        <div className="mobile-nav-btn">
          <FontAwesomeIcon className="mobile-nav-icon" icon={faChevronDown} />
        </div>
      </div>
    </header>
  );
}
