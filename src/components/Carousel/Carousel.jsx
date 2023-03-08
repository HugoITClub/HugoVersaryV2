import { useEffect, useRef } from "react";
import { joinCls } from "../../utilities/text.utils";
import Image from "../Image/Image";
import "./style.css";

function Carousel({
	id,
	safeZone = false,
	intervalTime = 5000,
	nextButton = true,
	prevButton = true,
	onNext = (oldImageIndex, newImageIndex) => {},
	onPrev = (oldImageIndex, newImageIndex) => {},
	className,
	children,
	...props
}) {
	const carouselRef = useRef();

	useEffect(() => {
		const carousel = carouselRef.current;

		const handlePrevBtnClicked = (event) => {
			const oldImageIndex = event.from;
			const newImageIndex = event.to;
			if (event.direction === "left") {
				onNext(oldImageIndex, newImageIndex);
			} else if (event.direction === "right") {
				onPrev(oldImageIndex, newImageIndex);
			}
		};

		carousel.addEventListener("slide.bs.carousel", handlePrevBtnClicked);
		return () => carousel.removeEventListener("slide.bs.carousel", handlePrevBtnClicked);
	}, []);

	return (
		<div ref={carouselRef} id={id} className={joinCls("carousel slide carousel-fade h-100", safeZone && "carousel-safe-zone", className)} data-bs-ride="carousel" {...props}>
			<div className="carousel-inner h-100">
				{children.map((item, index) => (
					<div key={item.key} className={joinCls("carousel-item", index === 0 && "active")} data-bs-interval={intervalTime}>
						{item}
					</div>
				))}
			</div>
			{prevButton && (
				<button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
					<div className="icon">
						<span className="fa-solid fa-xl fa-angle-left"></span>
					</div>
				</button>
			)}
			{nextButton && (
				<button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
					<div className="icon">
						<span className="fa-solid fa-xl fa-angle-right"></span>
					</div>
				</button>
			)}
		</div>
	);
}

export default Carousel;
