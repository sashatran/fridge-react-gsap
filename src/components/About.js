import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCarrot,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-copy-container">
          <h2 className="about-title">When life gives you lemon.</h2>
          <p className="about-copy">
            We help you take control of your fridge. Zero-calorie, zero-sugar
            hydrating wellness drops to add to any type of beverage.
          </p>
        </div>
        <div className="about-img-container">
          <div className="about-floating-container">
            <FontAwesomeIcon className="about-floating-icon" icon={faBurger} />
          </div>
          <div className="about-floating-container">
            <FontAwesomeIcon className="about-floating-icon" icon={faCarrot} />
          </div>
          <div className="about-floating-container">
            <FontAwesomeIcon className="about-floating-icon" icon={faBowlFood} />
          </div>
        </div>
      </div>
    </section>
  );
}
