import { lazy } from "react";
import { ABOUT_US_PAGE_PATH } from "./constants";

const AboutUsPage = lazy(() => import("./AboutUsPage"));

const aboutUsRoute = {
	path: ABOUT_US_PAGE_PATH,
	element: <AboutUsPage />,
};

export default aboutUsRoute;
