import { Outlet } from "react-router-dom";
import Navigator from "./Navigator/Navigator";
import Splash from "../components/Splash/Splash";
import { shallowEqual, useSelector } from "react-redux";
import AppSuspense from "../services/loading/AppSuspense";
import { useEffect, useState } from "react";
import { joinCls } from "../utilities/text.utils";

import "./style/root.style.css";
import "./style/button.style.css";
import "./style/text.style.css";
import "./style/spacing.style.css";
import "./style/sizing.style.css";
import "./style/animation.style.css";
import "./style/custom.style.css";

function Root() {
	const { isPageLoading } = useSelector((state) => state.loading, shallowEqual);
	const [isStartedSplash, setIsStartedSplash] = useState(false);

	useEffect(() => {
		if (isPageLoading) setIsStartedSplash(false);
	}, [isPageLoading, setIsStartedSplash]);

	return (
		<>
			<div className={joinCls("mt-5", isPageLoading || !isStartedSplash ? "invisible" : undefined)}>
				{/* Navigation bar */}
				<Navigator />

				<AppSuspense>
					{/* Page will render here */}
					<Outlet />
				</AppSuspense>
			</div>

			{/* Splash */}
			<Splash onStart={() => setIsStartedSplash(true)} />
		</>
	);
}

export default Root;
