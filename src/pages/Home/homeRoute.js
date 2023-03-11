import { lazy } from "react";
import { HOME_PAGE_PATH } from "./constants";

const HomePage = lazy(() => import("./HomePage"));

const homeRoute = {
	path: HOME_PAGE_PATH,
	element: <HomePage />,
};

export default homeRoute;
