import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { joinCls } from "../../utilities/text.utils";
import Animation from "../Animation/Animation";

import style from "./style.module.css";

export default function Splash({ className, children, onFinish, ...props }) {
	const { isLoading: isFontLoading } = useSelector((state) => state.font);
	const [isFinish, setIsFinish] = useState(false);

	let percent = 0;
	if (!isFontLoading) percent += 25;

	if (isFinish) percent = 100;

	useEffect(() => {
		const timeout = setTimeout(() => setIsFinish(true), 2000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<Animation animation={isFinish && [{ name: "fadeOut", delay: "0.8s" }]} onAnimated={onFinish}>
			<div className="position-fixed top-0 start-0 bg-light vw-100 vh-100 z-1">
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
								<p className="f-montserrat text-center mb-0 fs-5">Light Up Your Fire</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Animation>
	);
}
