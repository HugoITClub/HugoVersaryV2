import { generatePath } from "react-router-dom";
import { ACTIVITY_PAGE_PATH } from "../constants";

export const MEETINGS_ACTIVITY_PAGE_PATH = generatePath(ACTIVITY_PAGE_PATH, { name: "meetings" });
