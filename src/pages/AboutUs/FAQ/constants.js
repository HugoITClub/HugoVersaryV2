import { generatePath } from "react-router-dom";
import { ABOUT_US_PAGE_PATH } from "../constants";

export const FAQ_PAGE_PATH = generatePath(ABOUT_US_PAGE_PATH, { name: "faq" });
