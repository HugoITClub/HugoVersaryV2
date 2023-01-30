import { generatePath } from "react-router-dom";

export const BANANA = "banana";
export const HEROES_COMPANY = "heroes-company";
export const POWER_RANGERS = "power-rangers";
export const NIFFLER = "niffler";

export const TEAMS_PAGE_PATH = "/teams/:name";
export const BANANA_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: BANANA });
export const HEROES_COMPANY_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: HEROES_COMPANY });
export const POWER_RANGERS_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: POWER_RANGERS });
export const NIFFLER_TEAM_PAGE_PATH = generatePath(TEAMS_PAGE_PATH, { name: NIFFLER });
