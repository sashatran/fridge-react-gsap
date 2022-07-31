import CarouselItem from './CarouselItem';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Produce() {
    const carousel = [
        {
            title: "Lemon Booster",
            copy: "100x hydration and mineral boost your drink",
            image: "/assets/lemon-2.jpg"
        },
        {
            title: "Ginger Shot",
            copy: "Add some spice to your life with this tiny shot",
            image: "/assets/ginger.jpg"
        },
        {
            title: "Bacon Jam",
            copy: "Add fats to any dish for better memory",
            image: "/assets/bacon-2.jpg"
        },
        {
            title: "Wellness Basket",
            copy: "Veggies from our organic free range garden ",
            image: "/assets/tomato.jpg"
        }
    ]

    useEffect(() => {
      gsap.from([".produce-title", ".produce-copy"], {
        y: 30, 
        opacity: 0, 
        duration: 0.5,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".produce-section",
          start: "top center",
          once: true
        }
      })
    }, []); 

    useEffect(() => {
      gsap.from(".produce-carousel > *", {
        y: 40, 
        opacity: 0, 
        duration: 0.5,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".produce-section",
          start: "top center",
          toggleActions: "play none none reverse",
        }
      })
    }, [])

  return (
    <section className="produce-section">
      <div className="produce-container">
        <h2 className="produce-title">Meet the produce</h2>
        <p className="produce-copy">Best bacon you'll find in the market. Gluten Free. Free Range.  </p>
        <div className="produce-carousel">
          {carousel.map(({title, copy, image}) => {
            return (
                <CarouselItem key={title} title={title} copy={copy} image={image}/>
            )
          })}
          
        </div>
      </div>
    </section>
  );
}
