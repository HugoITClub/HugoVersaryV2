import { lazy } from "react";
import { TEAMS_PAGE_PATH } from "./constants";

const TeamsPage = lazy(() => import("./TeamsPage"));

const teamsRoute = {
	path: TEAMS_PAGE_PATH,
	element: <TeamsPage />,
};

export default teamsRoute;
