import { useEffect, useRef } from "react";
import { generateWiggleTransform } from "./helper";

export default function Wiggle({
  maxTranslateRange = 10,
  maxRotateRange = 32,
  maxScaleRange = -16,
  transition = "1s ease-out",
  autoAnimate = true,
  className,
  children,
  ...props
}) {
  const refContainer = useRef();
  const refMovementContainer = useRef();

  useEffect(() => {
    const container = refContainer.current;
    const REDUCE_PERCENT_TO = 0.4;

    const intervalId = setInterval(() => {
      console.log(container.matches(":hover"));
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
        refMovementContainer.current.style.transition = "2s ease-out";
      }
    }, Math.random() * 1000 + 1000);

    return () => clearInterval(intervalId);
  }, [autoAnimate, maxRotateRange, maxScaleRange, maxTranslateRange]);

  const handleMouseMoved = (event) => {
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

  const handleMouseOuted = (event) => {
    refMovementContainer.current.style.transform = "";
  };

  return (
    <div ref={refContainer} className={className} onMouseMove={handleMouseMoved} onMouseLeave={handleMouseOuted} {...props}>
      <div ref={refMovementContainer} style={{ transition }}>
        {children}
      </div>
    </div>
  );
}
