import { Fragment, useEffect, useRef } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import { joinCls } from "../../utilities/text.utils";
import Image from "../../components/Image/Image";
import HugoLogoSvg from "./images/hugo-logo-full.svg";
import Title from "./Title";
import style from "./style.module.css";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";
import { BANANA_TEAM_PAGE_PATH, HEROES_COMPANY_TEAM_PAGE_PATH, NIFFLER_TEAM_PAGE_PATH, POWER_RANGERS_TEAM_PAGE_PATH, TEAMS_PAGE_PATH } from "../../pages/Teams/constants";
import { BLOGS_PAGE_PATH } from "../../pages/Blogs/constants";
import { ABOUT_US_PAGE_PATH } from "../../pages/AboutUs/constants";
import { MEETINGS_ACTIVITY_PAGE_PATH } from "../../pages/Activities/Meetings/constants";
import { ACTIVITY_PAGE_PATH } from "../../pages/Activities/constants";
import { EVENTS_ACTIVITY_PAGE_PATH } from "../../pages/Activities/Events/constants";

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
				name: "POWER RANGERS",
				path: POWER_RANGERS_TEAM_PAGE_PATH,
			},
			{
				name: "HEROES COMPANY",
				path: HEROES_COMPANY_TEAM_PAGE_PATH,
			},
			{
				name: "BANANA",
				path: BANANA_TEAM_PAGE_PATH,
			},

			{
				name: "NIFFLER",
				path: NIFFLER_TEAM_PAGE_PATH,
			},
		],
	},
	{
		name: "ACTIVITIES",
		path: ACTIVITY_PAGE_PATH,
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
	const navbarRef = useRef();

	const joinUsBtn = (
		<a href="https://forms.gle/P3a5dJzUpWxstcKt8" target="_blank" rel="noreferrer" className="text-decoration-none ">
			<button className="btn btn-gradient rounded-pill px-3 mx-3">JOIN US</button>
		</a>
	);

	useEffect(() => {
		// Close all dropdowns when route changes
		const navbar = navbarRef.current;
		const dropDownElements = navbar.querySelectorAll(".dropdown-toggle");

		dropDownElements.forEach((dropDownElement) => {
			const dropDown = window.bootstrap.Dropdown.getOrCreateInstance(dropDownElement);
			dropDown.hide();
		});

		// Scroll to top when route changes
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location.pathname]);

	return (
		<Fragment>
			<Title />

			<nav className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark p-0 fixed-top", style["navbar"])}>
				<div className={joinCls("container align-items-stretch", style["navbar-container"])}>
					<button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
						<span className="navbar-toggler-icon"></span>
					</button>

					<Link to={HOME_PAGE_PATH} className="navbar-brand me-0">
						<Image src={HugoLogoSvg} width={216} className="py-2" />
					</Link>

					<div className="row g-0 align-items-center d-lg-none">
						<div className="col-auto">{joinUsBtn}</div>
					</div>

					<div className={joinCls("collapse navbar-collapse align-items-stretch", style["navbar-collapse"])}>
						<ul ref={navbarRef} className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center align-items-start">
							{NAV_LINKS.map((navLink) => (
								<li key={navLink.name} className={joinCls("position-relative nav-item nav-element d-block d-lg-flex align-items-center mx-2 h-100", style["nav-link-container"])}>
									{navLink.children ? (
										<>
											<div
												className={joinCls(
													"nav-link text-white dropdown-toggle w-100 h-100 d-flex align-items-center justify-content-lg-center justify-content-between px-3",
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
														<NavLink to={subNavLink.path} key={subNavLink.name} className="list-group-item dropdown-item px-5">
															{subNavLink.name}
														</NavLink>
													))}
												</ul>
											</div>
										</>
									) : (
										<NavLink
											to={navLink.path}
											end={navLink.end}
											className={joinCls("nav-link text-white w-100 h-100 d-flex align-items-center justify-content-lg-center justify-content-between px-3", style["nav-link"])}
										>
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
