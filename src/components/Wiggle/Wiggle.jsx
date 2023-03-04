import { useEffect, useRef } from "react";
import { generateWiggleTransform } from "./helper";

export default function Wiggle({
	maxTranslateRange = 10,
	maxRotateRange = 32,
	maxScaleRange = -16,
	transitionTime = 1,
	autoAnimate = true,
	disableHover = false,
	className,
	children,
	...props
}) {
	const refContainer = useRef();
	const refMovementContainer = useRef();

	const transitionAuto = `${transitionTime * 2}s ease-out`;
	useEffect(() => {
		const container = refContainer.current;
		const REDUCE_PERCENT_TO = 0.4;

		const intervalId = setInterval(() => {
			if (container.matches(":hover")) return;

			const xPercent = Math.random() * 2 - 1;
			const yPercent = Math.random() * 2 - 1;

			if (!autoAnimate) {
				refMovementContainer.current.style.transform = "";
			} else {
				refMovementContainer.current.style.transform = generateWiggleTransform(
					xPercent,
					yPercent,
					maxTranslateRange * REDUCE_PERCENT_TO,
					maxRotateRange * REDUCE_PERCENT_TO,
					maxScaleRange * REDUCE_PERCENT_TO
				);
				refMovementContainer.current.style.transition = transitionAuto;
			}
		}, (Math.random() * 2 + transitionTime * 2) * 1000);

		return () => clearInterval(intervalId);
	}, [autoAnimate, maxRotateRange, maxScaleRange, maxTranslateRange]);

	const transition = `${transitionTime}s ease-out`;
	const handleMouseMoved = (event) => {
		if (disableHover) return;

		const { clientX, clientY } = event;
		const { left, top, width, height } = refContainer.current.getBoundingClientRect();

		const centerX = left + width / 2;
		const centerY = top + height / 2;

		const x = clientX - centerX;
		const y = clientY - centerY;

		const farthestDistanceX = width / 2;
		const farthestDistanceY = height / 2;

		const xPercent = (x / Math.abs(x)) * (1 - Math.abs(x) / farthestDistanceX);
		const yPercent = (y / Math.abs(y)) * (1 - Math.abs(y) / farthestDistanceY);

		refMovementContainer.current.style.transform = generateWiggleTransform(xPercent, yPercent, maxTranslateRange, maxRotateRange, maxScaleRange);
		refMovementContainer.current.style.transition = transition;
	};

	const handleMouseOuted = () => {
		refMovementContainer.current.style.transform = "";
	};

	return (
		<div ref={refContainer} className={className} onMouseMove={handleMouseMoved} onMouseLeave={handleMouseOuted} {...props}>
			<div ref={refMovementContainer} className="w-100 h-100" style={{ transition }}>
				{children}
			</div>
		</div>
	);
}
