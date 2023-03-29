import { lazy } from "react";
import { FAQ_PAGE_PATH } from "./constants";

const FAQPage = lazy(() => import("./FAQPage"));

const FAQPageRoute = {
	path: FAQ_PAGE_PATH,
	element: <FAQPage />,
};

export default FAQPageRoute;
