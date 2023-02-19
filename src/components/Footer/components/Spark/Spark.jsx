import { useEffect, useState } from "react";
import { joinCls } from "../../../../utilities/text.utils";

export default function Spark({
  x,
  yEnd,
  size,
  transitionTime,
  rotateEnd,
  onTransitionEnd,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Must be set timeout because browser render time minimum required to make transition effect
    setTimeout(() => {
      setIsMounted(true);
    }, 1000 * Math.random() + 1000);
  }, []);

  return (
    <div
      className={"position-absolute"}
      style={{
        left: `${x}px`,
        top: `${isMounted ? -yEnd : 40}px`,
        width: `${size}rem`,
        height: `${size}rem`,
        transform: `translate(-50%, -50%) rotate(${
          isMounted ? rotateEnd : 0
        }deg)`,
        opacity: isMounted ? 0 : 1,
        borderRadius: `${isMounted ? 0 : 50}%`,
        background: isMounted ? "#9a2718" : "#eba919",
        transition: `${transitionTime}s`,
        zIndex: 0,
      }}
      onTransitionEnd={onTransitionEnd}
    />
  );
}
