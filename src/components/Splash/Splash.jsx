import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setIsPageLoading } from "../../services/loading/actions";
import { joinCls } from "../../utilities/text.utils";
import Animation from "../Animation/Animation";

import style from "./style.module.css";

export default function Splash({ className, children, onStart = () => {}, ...props }) {
	const dispatch = useDispatch();
	const { isPageLoading } = useSelector((state) => state.loading, shallowEqual);
	const { isLoading: isFontLoading } = useSelector((state) => state.font);

	const [isStarted, setIsStarted] = useState(false);
	const [isTimeout, setIsTimeout] = useState(false);
	const [isFinished, setIsFinished] = useState(false);

	let percent = 0;
	if (isStarted) {
		if (!isFontLoading) percent += 25;
		if (!isPageLoading) percent += 25;
		if (isTimeout) percent = 100;
	}

	useEffect(() => {
		if (isPageLoading) {
			setIsStarted(false);
			setIsTimeout(false);
			setIsFinished(false);
		}
	}, [isPageLoading]);

	useEffect(() => {
		if (isStarted) {
			onStart();
			const timeout = setTimeout(() => setIsTimeout(true), 2000);
			return () => clearTimeout(timeout);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isStarted]);

	const handleAnimating = () => {
		if (percent === 100) dispatch(setIsPageLoading(false));
	};

	const handleAnimated = () => {
		if (percent === 0) setIsStarted(true);
		if (percent === 100) setIsFinished(true);
	};

	return (
		!isFinished && (
			<Animation
				animation={percent === 100 ? [{ name: "fadeOut", delay: "0.8s" }] : [{ name: "fadeIn", duration: "0.24s" }]}
				onAnimating={handleAnimating}
				onAnimated={handleAnimated}
				className={joinCls("position-fixed top-0 start-0 bg-light vw-100 vh-100 z-3", className)}
				{...props}
			>
				<div className="row justify-content-center align-items-center h-100">
					<div className="col-auto">
						<div className="row flex-column g-2">
							<div className="col-auto">
								<h3 className="text-center mb-0">Hugo English Club</h3>
							</div>
							<div className="col-auto">
								<div className={joinCls("progress", style["progress"])} style={{ transition: "5s ease-out" }}>
									<div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${percent}%` }}></div>
								</div>
							</div>
							<div className="col-auto">
								<p className="f-google-san text-center mb-0 fs-5">Light Up Your Fire</p>
							</div>
						</div>
					</div>
				</div>
			</Animation>
		)
	);
}
