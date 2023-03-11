import { lazy } from "react";
import { EVENTS_ACTIVITY_PAGE_PATH } from "./constants";

const EventsPage = lazy(() => import("./EventsPage"));

const eventsRoute = {
	path: EVENTS_ACTIVITY_PAGE_PATH,
	element: <EventsPage />,
};

export default eventsRoute;
