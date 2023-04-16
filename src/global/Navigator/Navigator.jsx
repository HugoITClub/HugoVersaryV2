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
import { PROJECT_TEAM_PAGE_PATH } from "../../pages/AboutUs/ProjectTeam/constants";
import { FAQ_PAGE_PATH } from "../../pages/AboutUs/FAQ/constants";
import { HUGO_CLUB_PAGE_PATH } from "../../pages/AboutUs/HugoClub/constants";
import { useSelector } from "react-redux";
import navigatorMessages from "./navigatorMessages";
import { FormattedMessage } from "react-intl";
import useSheetAPI from "../../services/google/hooks/useSheetAPI";

export default function Navigator() {
	const location = useLocation();
	const navbarRef = useRef();
	const { locale } = useSelector((state) => state.language);
	const { data: regisForm } = useSheetAPI("AboutUs", "", "U", { earlyTake: 1 });
	const navLinks = [
		{
			name: navigatorMessages.home[locale],
			path: HOME_PAGE_PATH,
			end: true,
		},
		{
			name: navigatorMessages.teams[locale],
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
			name: navigatorMessages.activities[locale],
			path: ACTIVITY_PAGE_PATH,
			children: [
				{
					name: navigatorMessages.meetings[locale],
					path: MEETINGS_ACTIVITY_PAGE_PATH,
				},
				{
					name: navigatorMessages.events[locale],
					path: EVENTS_ACTIVITY_PAGE_PATH,
				},
			],
		},
		{
			name: navigatorMessages.blogs[locale],
			path: BLOGS_PAGE_PATH,
		},
		{
			name: navigatorMessages.aboutUs[locale],
			path: ABOUT_US_PAGE_PATH,
			children: [
				{
					name: "HUGO ENGLISH CLUB",
					path: HUGO_CLUB_PAGE_PATH,
				},
				{
					name: "HUGOVERSARY",
					path: PROJECT_TEAM_PAGE_PATH,
				},
				{
					name: "FAQ",
					path: FAQ_PAGE_PATH,
				},
			],
		},
	];

	const joinUsBtn = (
		<a href={regisForm[0]} target="_blank" rel="noreferrer" className="text-decoration-none ">
			<button className={joinCls("btn btn-gradient rounded-pill px-3 mx-3", style["join-us-btn"])}>
				<FormattedMessage {...navigatorMessages.joinUsButton} />
			</button>
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

		const collapseElements = navbar.querySelectorAll(".navbar-collapse");
		collapseElements.forEach((collapseElement) => {
			const collapse = window.bootstrap.Collapse.getOrCreateInstance(collapseElement);
			collapse.hide();
		});

		// Scroll to top when route changes
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location.pathname]);

	return (
		<Fragment>
			<Title navLinks={navLinks} />

			<nav ref={navbarRef} className={joinCls("navbar navbar-expand-lg bg-dark navbar-dark p-0 fixed-top", style["navbar"])}>
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

					<div className={joinCls("collapse navbar-collapse align-items-stretch show", style["navbar-collapse"])}>
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center align-items-start">
							{navLinks.map((navLink) => (
								<li
									key={navLink.name}
									className={joinCls("position-relative nav-item nav-element d-block d-lg-flex align-items-center mx-lg-2 h-100", style["nav-link-container"])}
								>
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
														<NavLink to={subNavLink.path} key={subNavLink.name} className="list-group-item dropdown-item px-5 px-lg-3">
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
