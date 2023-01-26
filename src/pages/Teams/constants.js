import { generatePath } from "react-router-dom";

export const TEAMS_PAGE_PATH = "/teams/:name";
export const BANANA_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: "banana" });
export const HEROES_COMPANY_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: "heroes-company" });
export const POWER_RANGERS_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: "power-rangers" });
export const NIFFLER_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: "niffler" });
