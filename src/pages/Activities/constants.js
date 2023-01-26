import { generatePath } from "react-router-dom";

export const ACTIVITIES_PAGE_PATH = "/activities/:name";
export const MEETINGS_ACTIVITY_PAGE_PATH = generatePath(ACTIVITIES_PAGE_PATH, { name: "meetings" });
export const EVENTS_ACTIVITY_PAGE_PATH = generatePath(ACTIVITIES_PAGE_PATH, { name: "events" });
