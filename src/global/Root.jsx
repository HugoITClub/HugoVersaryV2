import { Outlet } from "react-router-dom";
import Navigator from "./Navigator/Navigator";

import "./style/root.style.css";
import "./style/button.style.css";
import "./style/text.style.css";
import "./style/spacing.style.css";
import "./style/animation.style.css";
import "./style/custom.style.css";
import Splash from "../components/Splash/Splash";
import { shallowEqual, useSelector } from "react-redux";
import AppSuspense from "../services/loading/AppSuspense";

function Root() {
	const { isPageLoading } = useSelector((state) => state.loading, shallowEqual);

	return (
		<>
			<div className={isPageLoading ? "invisible" : undefined}>
				{/* Navigation bar */}
				<Navigator />

				<AppSuspense>
					{/* Page will render here */}
					<Outlet />
				</AppSuspense>
			</div>

			{/* Splash */}
			<Splash />
		</>
	);
}

export default Root;
