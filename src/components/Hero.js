import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    // too unreadable
    tl.from([".hero-container > *", ".hero-cta-container > *"], {
      opacity: 0,
      y: 70,
      duration: 0.7,
      stagger: 0.08,
      ease: "power4.out",
      delay: 0.2,
    });
  });

  return (
    <section className="hero-section">
      <div className="hero-container">
      <img className="hero-3d-icon lemon" src="/assets/lemon-3d.png" alt="" />
        {/* <img className="hero-3d-icon pancake" src="/assets/pancake.png" alt="" /> */}
        <div className="hero-copy-container">
          <h1 className="hero-title">Your fridge but better.</h1>
          <p className="hero-copy">Bacon Driven. Open Economy.</p>
          <div className="hero-cta-btn">Join Us</div>
        </div>
        <div className="hero-cta-container">
          <div className="hero-cta">
            <h2 className="hero-cta-title">Storage</h2>
            <p className="hero-cta-copy">
              Decentralized storage for all your perishable assets.
            </p>
          </div>
          <div className="hero-cta">
            <h2 className="hero-cta-title">Prevention</h2>
            <p className="hero-cta-copy">
              Prevent major food from becoming something else.
            </p>
          </div>
          <div className="hero-cta">
            <h2 className="hero-cta-title">Transactions</h2>
            <p className="hero-cta-copy">Capable of 6 transations per min</p>
          </div>
        </div>
      </div>
    </section>
  );
}
