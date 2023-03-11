import { lazy } from "react";
import { MEETINGS_ACTIVITY_PAGE_PATH } from "./constants";

const MeetingsPage = lazy(() => import("./MeetingsPage"));

const meetingsRoute = {
	path: MEETINGS_ACTIVITY_PAGE_PATH,
	element: <MeetingsPage />,
};

export default meetingsRoute;
