import { useEffect, useRef } from "react";
import { joinCls } from "../../utilities/text.utils";
import Image from "../Image/Image";
import "./style.css";

function Carousel({ id, images = [], intervalTime = 5000, className, onNext = (oldImageIndex, newImageIndex) => {}, onPrev = (oldImageIndex, newImageIndex) => {}, ...props }) {
  const carouselRef = useRef();

  useEffect(() => {
    const carousel = carouselRef.current;

    const handlePrevBtnClicked = (event) => {
      const oldImageIndex = event.from;
      const newImageIndex = event.to;
      if (event.direction === "left") {
        onNext(oldImageIndex, newImageIndex);
        console.log("next");
        console.log(oldImageIndex, newImageIndex);
      } else if (event.direction === "right") {
        onPrev(oldImageIndex, newImageIndex);
        console.log("prev");
        console.log(oldImageIndex, newImageIndex);
      }
    };

    carousel.addEventListener("slide.bs.carousel", handlePrevBtnClicked);
    return () => carousel.removeEventListener("slide.bs.carousel", handlePrevBtnClicked);
  }, []);

  return (
    <div ref={carouselRef} id={id} className={joinCls("carousel slide carousel-fade h-100", className)} data-bs-ride="carousel" {...props}>
      <div className="carousel-inner h-100">
        {images.map((image, index) => (
          <div key={image} className={joinCls("carousel-item", index === 0 && "active")} data-bs-interval={intervalTime}>
            <Image src={image} className="object-fit-cover w-100 h-100" />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <div className="icon">
          <span className="fa-solid fa-xl fa-angle-left"></span>
        </div>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <div className="icon">
          <span className="fa-solid fa-xl fa-angle-right"></span>
        </div>
      </button>
    </div>
  );
}

export default Carousel;
