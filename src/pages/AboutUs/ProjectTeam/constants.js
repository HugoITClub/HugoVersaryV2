import { generatePath } from "react-router-dom";
import { ABOUT_US_PAGE_PATH } from "../constants";

export const PROJECT_TEAM_PAGE_PATH = generatePath(ABOUT_US_PAGE_PATH, { name: "project-team" });
