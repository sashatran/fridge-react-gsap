import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const floatingImg = document.querySelectorAll(".about-floating-icon");

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
      <div className="wave-svg">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="about-container">
        <div className="about-copy-container">
          <h2 className="about-title">
            <span className="about-title-curtain"></span>
            When life gives you a lemon.
          </h2>
          <p className="about-copy">
            Swap it for some chocolate, a mango or a cone of delicious
            strawberry ice cream. All the best things in life.
          </p>
          <div className="cta">Swap Now</div>
        </div>
        <div className="about-img-container">
          <img
            className="about-floating-icon chocolate"
            src="/assets/chocolate.png"
            alt="chocolate"
          />

          <img className="about-floating-icon" src="/assets/mango.png" alt="mango" />

          <img
            className="about-floating-icon icecream"
            src="/assets/icecream.png"
            alt="ice cream"
          />
        </div>
      </div>
    </section>
  );
}
