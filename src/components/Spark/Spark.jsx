import { useEffect, useState } from "react";
import { joinCls } from "../../utilities/text.utils";

export default function Spark({ sparkComponent, x, yStart, yEnd, size, transitionTime, rotateEnd, onTransitionEnd, className, ...props }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      // Must be set timeout because browser render time minimum required to make transition effect
      const timeoutId = setTimeout(() => {
        setIsMounted(true);
      }, 1000 * Math.random() + 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isMounted]);

  const SparkComponent = sparkComponent;

  useEffect(() => {
    setIsMounted(false);
  }, [sparkComponent]);

  return (
    <SparkComponent
      isMounted={isMounted}
      className={joinCls("position-absolute", className)}
      style={{
        left: `${x}px`,
        top: `${isMounted ? -yEnd : -yStart}px`,
        width: `${size}rem`,
        height: `${size}rem`,
        transform: `translate(-50%, -50%) rotate(${isMounted ? rotateEnd : 0}deg)`,
        transition: `${transitionTime}s`,
        zIndex: 0,
      }}
      transitionTime={transitionTime}
      onTransitionEnd={onTransitionEnd}
      {...props}
    />
  );
}
