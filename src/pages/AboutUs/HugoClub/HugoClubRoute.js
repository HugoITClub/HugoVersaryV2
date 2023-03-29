import { lazy } from "react";
import { HUGO_CLUB_PAGE_PATH } from "./constants";

const HugoClubPage = lazy(() => import("./HugoClubPage"));

const HugoClubRoute = {
	path: HUGO_CLUB_PAGE_PATH,
	element: <HugoClubPage />,
};

export default HugoClubRoute;
