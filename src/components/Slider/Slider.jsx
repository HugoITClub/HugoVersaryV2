import { useRef, useState } from "react";
import { joinCls } from "../../utilities/text.utils";

import style from "./style.module.css";

export default function Slider({ items = [], className, renderItem, ...props }) {
  const containerRef = useRef();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handlePrevButtonClicked = () => {
    const container = containerRef.current;
    const items = container.children;

    let newCurrentItemIndex = currentItemIndex;
    for (let i = 0; i < 100; ++i) {
      newCurrentItemIndex = newCurrentItemIndex - 1;
      if (newCurrentItemIndex < 0) newCurrentItemIndex += items.length;

      const currentItem = items[newCurrentItemIndex];
      if (!(currentItem.offsetLeft - container.scrollLeft >= 0 && currentItem.offsetLeft - container.scrollLeft + currentItem.clientWidth <= container.clientWidth)) {
        container.scrollTo({
          top: 0,
          left: currentItem.offsetLeft,
          behavior: "smooth",
        });

        break;
      }
    }

    setCurrentItemIndex(newCurrentItemIndex);
  };

  const handleNextButtonClicked = () => {
    const container = containerRef.current;
    const items = container.children;

    let newCurrentItemIndex = currentItemIndex;
    for (let i = 0; i < 100; ++i) {
      newCurrentItemIndex = (newCurrentItemIndex + 1) % items.length;

      const currentItem = items[newCurrentItemIndex];
      if (!(currentItem.offsetLeft - container.scrollLeft >= 0 && currentItem.offsetLeft - container.scrollLeft + currentItem.clientWidth <= container.clientWidth)) {
        container.scrollTo({
          top: 0,
          left: currentItem.offsetLeft - (container.clientWidth - currentItem.clientWidth),
          behavior: "smooth",
        });

        break;
      }
    }

    setCurrentItemIndex(newCurrentItemIndex);
  };

  return (
    <div className="position-relative">
      <div className={joinCls("d-flex flex-nowrap overflow-hidden", className)} {...props} ref={containerRef}>
        {items.map((item) => renderItem(item))}
      </div>

      <div className={joinCls("position-absolute d-flex align-items-center", style["prev-area"])}>
        <div className={joinCls("position-relative", style["fade-area"], currentItemIndex !== 0 && "px-5")}>
          <button
            className={joinCls("btn position-absolute d-flex justify-content-center align-items-center rounded-circle start-0 translate-middle", style["icon"])}
            onClick={handlePrevButtonClicked}
          >
            <span className="fa-solid fa-xl fa-angle-left text-primary"></span>
          </button>
        </div>
      </div>
      <div className={joinCls("position-absolute d-flex align-items-center", style["next-area"])}>
        <div className={joinCls("position-relative", style["fade-area"], currentItemIndex !== containerRef.current?.children.length - 1 && "px-5")}>
          <button
            className={joinCls("btn position-absolute d-flex justify-content-center align-items-center rounded-circle start-100 translate-middle", style["icon"])}
            onClick={handleNextButtonClicked}
          >
            <span className="fa-solid fa-xl fa-angle-right text-primary"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
