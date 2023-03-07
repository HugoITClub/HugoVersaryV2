import { joinCls } from "../../utilities/text.utils";

import style from "./style.module.css";

export default function Splash({ className, children, ...props }) {
	return (
		<div className="position-fixed top-0 start-0 bg-light vw-100 vh-100 z-1">
			<div className="row justify-content-center align-items-center h-100">
				<div className="col-auto">
					<div className="row flex-column g-2">
						<div className="col-auto">
							<h3 className="text-center mb-0">Hugo English Club</h3>
						</div>
						<div className="col-auto">
							<div className={joinCls("progress", style["progress"])}>
								<div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
							</div>
						</div>
						<div className="col-auto">
							<p className={joinCls("f-montserrat text-center mb-0 fs-5", style["slogan"])}>Light Up Your Fire</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
