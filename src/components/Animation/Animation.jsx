import { useEffect, useRef, useState } from "react";

export default function Animation({
	watching,
	animation = [],
	onAnimating = (currentAnimation) => {},
	onAnimated = (isLastAnimation, currentAnimation) => {},
	className,
	style,
	children,
	...props
}) {
	const refContainer = useRef();
	const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

	const handleAnimationEnded = () => {
		const newAnimationIndex = currentAnimationIndex + 1;
		onAnimated(newAnimationIndex >= animation.length, animation[currentAnimationIndex]);
		setCurrentAnimationIndex(newAnimationIndex);
	};

	useEffect(() => {
		setCurrentAnimationIndex(animation ? 0 : -1);
		onAnimating(animation[0]);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [watching, (animation || []).map((item) => item.name).join("-")]);

	useEffect(() => {
		const container = refContainer.current;

		const currentAnimation = animation[currentAnimationIndex];
		if (!currentAnimation) return;

		const { name, duration, timingFunction, delay } = currentAnimation;

		container.style.animationPlayState = "paused";
		container.style.animationName = "none";

		void container.offsetWidth; // Trigger reflow

		container.style.animationPlayState = "running";
		container.style.animationName = name;
		container.style.animationDuration = duration || "1s";
		container.style.animationDelay = delay || "0s";
		container.style.animationTimingFunction = timingFunction || "ease-out";

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentAnimationIndex]);

	return (
		<div ref={refContainer} className={className} style={{ animationFillMode: "both", ...style }} onAnimationEnd={handleAnimationEnded} {...props}>
			{children}
		</div>
	);
}
