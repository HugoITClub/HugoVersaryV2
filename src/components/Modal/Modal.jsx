import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { joinCls } from "../../utilities/text.utils";

import style from "./style.module.css";

export default function Modal({ isShown, onClose, className, dialogClassName, contentClassName, children, ...props }) {
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
		setIsEntering(false);
		setIsEntered(false);
		setIsExisting(false);
		setIsExisted(false);

		const container = containerRef.current;

		const root = document.querySelector("#root");
		root.appendChild(container);

		return () => root.removeChild(container);
	}, []);

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
			{...props}
		>
			<div className={joinCls("position-relative modal-dialog", dialogClassName)}>
				<div className={joinCls("modal-content h-100", contentClassName)} onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>

			<div className="position-fixed d-lg-none bottom-0 end-0 mb-3 mb-lg-5 me-3 me-lg-5">
				<div className="d-flex gap-2 align-items-center px-3 py-2 border border-white text-white">
					<h5 className="mb-0">Close</h5>
					<i className="fa-solid fa-forward"></i>
				</div>
			</div>
		</div>
	);

	return createPortal(content, containerRef.current);
}
