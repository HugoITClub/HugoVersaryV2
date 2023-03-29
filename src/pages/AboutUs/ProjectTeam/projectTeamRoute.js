import { lazy } from "react";
import { PROJECT_TEAM_PAGE_PATH } from "./constants";

const ProjectTeamPage = lazy(() => import("./ProjectTeamPage"));

const projectTeamRoute = {
	path: PROJECT_TEAM_PAGE_PATH,
	element: <ProjectTeamPage />,
};

export default projectTeamRoute;
