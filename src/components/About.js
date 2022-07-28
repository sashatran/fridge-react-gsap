import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCarrot,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const floatingImg = document.querySelectorAll(".about-floating-container");

    const fromAnim = {
      y: 70,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out",
    };

    floatingImg.forEach((img, index) => {
      ScrollTrigger.saveStyles(img);
      ScrollTrigger.matchMedia({
        "(min-width: 701px)": () => {
          let tl = gsap.timeline({
            delay: 0.21 * index,
            scrollTrigger: {
              id: `img-${index}`,
              trigger: ".about-img-container",
              start: "top bottom",
              // markers: true,
              toggleActions: "play none none reverse",
            },
          });
          tl.from(img, fromAnim);
        },
        "(max-width: 699px)": () => {
          let tl = gsap.timeline({
            delay: 0.21 * index,
            scrollTrigger: {
              id: `img-${index}`,
              trigger: ".about-img-container",
              start: "top bottom",
              // markers: true,
              toggleActions: "play none none reverse",
            },
          });
          tl.from(img, fromAnim);
        },
      });
    });

    floatingImg.forEach((img, index) => {
      // gsap.from(img, {
      //   y: 70,
      //   opacity: 0,
      //   duration: 1.5,
      //   delay: 0.21 * index,
      //   ease: "elastic.out",
      //   scrollTrigger: {
      //     id: `img-${index}`,
      //     trigger: ".about-img-container",
      //     start: "top bottom",
      //     markers: true,
      //     toggleActions: "play none none reverse",
      //   },
      // });
    });

    gsap.from(".about-copy-container > *", {
      x: -40,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-container",
        start: "top bottom",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-copy-container">
          <h2 className="about-title">
            <span className="about-title-curtain"></span>
            When life gives you lemon.
          </h2>
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
            <FontAwesomeIcon
              className="about-floating-icon"
              icon={faBowlFood}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
