import { Fragment } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { joinCls } from "../../utilities/text.utils";
import Image from "../Image/Image";
import FakeImage from "./images/Fake.png";
import Title from "./Title";
import style from "./style.module.css";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";
import { BANANA_TEAM_PAGE_PATH, HEROES_COMPANY_TEAM_PAGE_PATH, NIFFLER_TEAM_PAGE_PATH, POWER_RANGERS_TEAM_PAGE_PATH, TEAMS_PAGE_PATH } from "../../pages/Teams/constants";
import { ACTIVITIES_PAGE_PATH, EVENTS_ACTIVITY_PAGE_PATH, MEETINGS_ACTIVITY_PAGE_PATH } from "../../pages/Activities/constants";
import { BLOGS_PAGE_PATH } from "../../pages/Blogs/constants";
import { ABOUT_US_PAGE_PATH } from "../../pages/AboutUs/constants";

export const NAV_LINKS = [
  {
    name: "HOME",
    path: HOME_PAGE_PATH,
    end: true,
  },
  {
    name: "TEAMS",
    path: TEAMS_PAGE_PATH,
    children: [
      {
        name: "BANANA",
        path: BANANA_TEAM_PAGE_PATH,
      },
      {
        name: "HEROES COMPANY",
        path: HEROES_COMPANY_TEAM_PAGE_PATH,
      },
      {
        name: "POWER RANGERS",
        path: POWER_RANGERS_TEAM_PAGE_PATH,
      },
      {
        name: "NIFFLER",
        path: NIFFLER_TEAM_PAGE_PATH,
      },
    ],
  },
  {
    name: "ACTIVITIES",
    path: ACTIVITIES_PAGE_PATH,
    children: [
      {
        name: "MEETINGS",
        path: MEETINGS_ACTIVITY_PAGE_PATH,
      },
      {
        name: "EVENTS",
        path: EVENTS_ACTIVITY_PAGE_PATH,
      },
    ],
  },
  {
    name: "BLOGS",
    path: BLOGS_PAGE_PATH,
  },
  {
    name: "ABOUT US",
    path: ABOUT_US_PAGE_PATH,
  },
];

export default function Navigator() {
  const location = useLocation();

  const joinUsBtn = (
    <a href="https://hugoenglish.club/" target="_blank" rel="noreferrer" className="text-decoration-none">
      <button className="btn btn-gradient rounded-pill px-3">JOIN US</button>
    </a>
  );

  return (
    <Fragment>
      <Title />

      <nav className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark p-0", style["navbar"])}>
        <div className="container align-items-stretch">
          <Link to={HOME_PAGE_PATH} className="navbar-brand">
            <Image src={FakeImage} width={48} />
          </Link>

          <div className="row align-items-center d-lg-none">
            <div className="col-auto">{joinUsBtn}</div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse align-items-stretch">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              {NAV_LINKS.map((navLink) => (
                <li key={navLink.name} className="position-relative nav-item nav-element d-flex align-items-center h-100">
                  {navLink.children ? (
                    <>
                      <div
                        className={joinCls(
                          "nav-link text-white dropdown-toggle h-100 d-flex align-items-center px-3",
                          style["nav-link"],
                          matchPath(navLink.path, location.pathname) && "active"
                        )}
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        <div>{navLink.name}</div>
                      </div>
                      <div className="dropdown-menu rounded-0 p-0">
                        <ul className="list-group list-group-flush">
                          {navLink.children.map((subNavLink) => (
                            <NavLink to={subNavLink.path} key={subNavLink.name} className="list-group-item dropdown-item">
                              {subNavLink.name}
                            </NavLink>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink to={navLink.path} end={navLink.end} className={joinCls("nav-link text-white h-100 d-flex align-items-center px-3", style["nav-link"])}>
                      <div>{navLink.name}</div>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="row align-items-center d-none d-lg-flex">
              <div className="col-auto">{joinUsBtn}</div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
