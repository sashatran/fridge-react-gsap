export default function CarouselItem({ title, copy, image }) {
  return (
    <div className="carousel-item">
    
      <div
        className="c-item-img-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="c-item-title">{title}</div>
      <div className="c-item-copy">{copy}</div>
    </div>
  );
}
