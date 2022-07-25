import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".hero-container > *", {
      opacity: 0,
      y: 70,
      duration: 0.7,
      stagger: 0.05,
      ease: "power4.out",
      delay: 0.2
    });
  });

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Your fridge but better.</h1>
        <p className="hero-copy">Bacon Driven. Open Economy.</p>
        <div className="hero-cta-btn">Join Us</div>
      </div>
    </section>
  );
}
