import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigator from "./Navigator/Navigator";

import "./style/root.style.css";
import "./style/button.style.css";
import "./style/text.style.css";
import "./style/spacing.style.css";
import "./style/animation.style.css";
import "./style/custom.style.css";
import Splash from "../components/Splash/Splash";

function Root() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div>
			{/* Navigation bar */}
			<Navigator />

			{/* Page will render here */}
			<Outlet />

			{/* Splash */}
			{isLoading && <Splash onFinish={() => setIsLoading(false)} />}
		</div>
	);
}

export default Root;
