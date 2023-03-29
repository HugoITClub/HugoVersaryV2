import { generatePath } from "react-router-dom";
import { ABOUT_US_PAGE_PATH } from "../constants";

export const HUGO_CLUB_PAGE_PATH = generatePath(ABOUT_US_PAGE_PATH, { name: "hugo-club" });
