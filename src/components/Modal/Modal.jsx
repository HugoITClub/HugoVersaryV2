import { Component, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { joinCls } from "../../utilities/text.utils";

import style from "./style.module.css";

export default function Modal({ isShown, onClose, className, children, ...props }) {
  const containerRef = useRef(document.createElement("div"));
  const modalRef = useRef();

  const [isEntering, setIsEntering] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isExiting, setIsExisting] = useState(false);
  const [isExited, setIsExisted] = useState(false);

  const handleTransitionEnd = () => {
    if (isShown) {
      setIsEntering(false);
      setIsEntered(true);
    } else {
      setIsExisting(false);
      setIsExisted(true);
    }
  };

  useEffect(() => {
    if (isShown) {
      setIsEntering(true);
      setIsEntered(false);
      setIsExisting(false);
      setIsExisted(false);
    } else {
      setIsEntering(false);
      setIsEntered(false);
      setIsExisting(true);
      setIsExisted(false);
    }
  }, [isShown]);

  useEffect(() => {
    const root = document.querySelector("#root");
    root.appendChild(containerRef.current);

    return () => root.removeChild(containerRef.current);
  }, []);

  console.log(isShown);
  console.log({ isEntering, isEntered, isExiting, isExited });

  const content = (
    <div
      ref={modalRef}
      className={joinCls(
        "modal",
        className,
        style["modal"],
        (isShown || isEntering || isEntered || isExiting) && "d-block",
        (isEntering || isEntered) && style["show"],
        (isExiting || isExited) && style["hide"]
      )}
      onClick={onClose}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="modal-dialog">{children}</div>
    </div>
  );

  return createPortal(content, containerRef.current);
}