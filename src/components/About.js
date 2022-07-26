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
    gsap.fromTo(".about-title-curtain", {
      scaleX: "100%",
      transformOrigin: "100% 0",
    }, {
      scaleX: 0,
      duration: 0.7, 
      scrollTrigger: {
        trigger: ".about-section",
        start: "top center",
        // markers: true,
        // toggleActions: "play none none reverse",
        once: true
      }
    })


    const floatingImg = document.querySelectorAll(".about-floating-container");

    floatingImg.forEach((img, index) => {
      gsap.from(img,  {
        y: 70,
        opacity: 0,
        duration: 1.5,
        delay: 0.21 * index,
        ease: "elastic.out",
        scrollTrigger: {
          id: `img-${index}`, 
          trigger: ".about-img-container",
          start: "top center+=100px",
          // markers: true,
          toggleActions: "play none none reverse",
        },
      });
    })

    
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-copy-container">
          <h2 className="about-title">
            <span className="about-title-curtain"></span>
            When life gives you lemon.</h2>
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
